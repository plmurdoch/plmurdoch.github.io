"""Generate the public resume from the portfolio's content. Requires reportlab."""
from pathlib import Path
import json, subprocess
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

font_root = Path('/usr/share/fonts/truetype/dejavu')
if (font_root/'DejaVuSans.ttf').exists():
 pdfmetrics.registerFont(TTFont('ResumeSans', str(font_root/'DejaVuSans.ttf')))
 pdfmetrics.registerFont(TTFont('ResumeSans-Bold', str(font_root/'DejaVuSans-Bold.ttf')))
 pdfmetrics.registerFontFamily('ResumeSans',normal='ResumeSans',bold='ResumeSans-Bold',italic='ResumeSans',boldItalic='ResumeSans-Bold')
 regular_font, bold_font = 'ResumeSans', 'ResumeSans-Bold'
else:
 regular_font, bold_font = 'Helvetica', 'Helvetica-Bold'
root = Path(__file__).resolve().parents[1]
node_code = "import {profile,experience,skills,projects} from './src/data.js'; console.log(JSON.stringify({profile,experience,skills,projects}));"
data = json.loads(subprocess.check_output(['node','--input-type=module','-e',node_code],cwd=root,text=True))
output = root/'public/payton-murdoch-resume.pdf'
styles = {
 'name': ParagraphStyle('name',fontName=bold_font,fontSize=24,leading=28,textColor=HexColor('#18252e'),spaceAfter=4),
 'position': ParagraphStyle('position',fontName=regular_font,fontSize=11,leading=15,textColor=HexColor('#345b79'),spaceAfter=8),
 'contact': ParagraphStyle('contact',fontName=regular_font,fontSize=8.2,leading=12,textColor=HexColor('#344954'),spaceAfter=8),
 'section': ParagraphStyle('section',fontName=bold_font,fontSize=9.5,leading=13,textColor=HexColor('#345b79'),spaceBefore=8,spaceAfter=5),
 'job': ParagraphStyle('job',fontName=bold_font,fontSize=9.4,leading=13,textColor=HexColor('#18252e'),spaceBefore=5,spaceAfter=3),
 'small': ParagraphStyle('small',fontName=regular_font,fontSize=8.2,leading=11.6,textColor=HexColor('#425864'),spaceAfter=4),
 'body': ParagraphStyle('body',fontName=regular_font,fontSize=8.7,leading=12.4,textColor=HexColor('#263b47'),spaceAfter=4),
 'bullet': ParagraphStyle('bullet',fontName=regular_font,fontSize=8.5,leading=12,textColor=HexColor('#263b47'),leftIndent=9,firstLineIndent=-7,spaceAfter=2),
}
def para(text,style='body'): return Paragraph(text,styles[style])
def plain(text): return escape(text.replace('—','-').replace('·',' / '))
story=[para('Payton Murdoch','name'),para('Cybersecurity / Security Operations / Data Protection','position'),para('Vancouver, BC | <a href="mailto:payton.murdoch@gmail.com">payton.murdoch@gmail.com</a><br/><a href="https://plmurdoch.github.io/">plmurdoch.github.io</a> | <a href="https://www.linkedin.com/in/plmurdoch/">linkedin.com/in/plmurdoch</a> | <a href="https://github.com/plmurdoch">github.com/plmurdoch</a>','contact'),para('Security operations and data protection experience in financial services and insurance. Work spans endpoint and email security, IAM, Microsoft Purview DLP, phishing investigations, security metrics, and incident response support.')]
story.append(para('PROFESSIONAL EXPERIENCE','section'))
for job in data['experience']:
 qualifier=' ('+job['qualifier']+')' if job.get('qualifier') else ''
 story.append(para(plain(job['role']+qualifier),'job'))
 story.append(para(plain(job['company']+' | '+job['dates'])+(' | Formerly First West Credit Union' if job.get('context') else ''),'small'))
 for bullet in job['bullets']: story.append(para('- '+plain(bullet),'bullet'))
story.append(para('TECHNICAL CAPABILITIES','section'))
for title,content in [
 ('Workplace platforms','Microsoft 365 Defender, CrowdStrike Falcon, Darktrace, Microsoft Purview, KnowBe4, Fortinet, Imperva; Azure security exposure.'),
 ('Capabilities','IAM, DLP, data classification / retention / access control, SIEM and log management, vulnerability management, incident response support, audit readiness, NIST / CIS / OSFI.'),
 ('Programming and academic labs','Python, SQL, Wireshark, GNS3, Snort, iptables, Nmap, Nessus, Metasploit, Cisco ASA, Palo Alto NGFW, scikit-learn, PyTorch.')]:
 story.append(para('<b>'+title+':</b> '+content,'body'))
story.append(para('SELECTED SECURITY PROJECTS','section'))
for project in data['projects'][:2]:
 story.append(para('<b>'+plain(project['title'])+'</b> (academic team project, 2024): '+plain(project['description'])+' <a href="'+project['link']+'" color="#345b79">View artifact</a>.','body'))
story.append(para('EDUCATION &amp; CERTIFICATION','section'))
story.append(para('<b>MEng, Telecommunications and Information Security</b> | University of Victoria | 2023-2024','body'))
story.append(para('<b>BSc, Computer Science</b> | University of Victoria | 2018-2023','body'))
story.append(para('<b>ISC2 Certified in Cybersecurity (CC)</b> | Sep 2024-Aug 2027','body'))
def footer(canvas,doc):
 canvas.setTitle('Payton Murdoch - Cybersecurity Resume');canvas.setAuthor('Payton Murdoch')
 canvas.setStrokeColor(HexColor('#c3cccf'));canvas.line(38,33,574,33)
 canvas.setFont(regular_font,7);canvas.setFillColor(HexColor('#425864'));canvas.drawString(38,22,'Payton Murdoch | Cybersecurity & Security Operations');canvas.drawRightString(574,22,'plmurdoch.github.io')
doc=SimpleDocTemplate(str(output),pagesize=(612,792),leftMargin=38,rightMargin=38,topMargin=30,bottomMargin=40)
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(output)
