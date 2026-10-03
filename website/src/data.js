export const profile = {
  name: "Payton Murdoch",
  location: "Vancouver, British Columbia",
  linkedin: "https://www.linkedin.com/in/plmurdoch/",
  github: "https://github.com/plmurdoch",
};
export const experience = [
  {
    role: "Data Security & Governance Analyst",
    company: "Tru Cooperative Bank",
    context: "Formerly First West Credit Union",
    dates: "Oct 2025 — Present",
    current: true,
    summary:
      "Data protection and security operations support in financial services.",
    bullets: [
      "Tested Microsoft Purview sensitivity labels and data loss prevention policies with users.",
      "Supported Security Operations investigations of reported phishing emails, Copilot prompts, and security incidents.",
      "Performed a gap analysis of cybersecurity tools in the Azure environment.",
      "Researched and drafted a departmental RACI for customer identity and access management; delivered phishing-awareness guidance to front-line staff.",
    ],
    tags: [
      "Microsoft Purview",
      "DLP",
      "IAM",
      "Azure",
      "Incident investigations",
    ],
  },
  {
    role: "Cybersecurity Administrator",
    company: "TuGo Insurance",
    dates: "Jun 2025 — Oct 2025",
    summary:
      "Security administration across endpoint, email, and cloud services.",
    bullets: [
      "Served as the main cybersecurity contact, administering CrowdStrike, Microsoft, Darktrace, Fortinet, and Imperva services for the AWS environment.",
      "Supported threat risk assessments, incident readiness and response, and disaster recovery planning.",
      "Supported security training administration and kept leadership informed about emerging security trends.",
    ],
    tags: [
      "CrowdStrike Falcon",
      "Microsoft security",
      "Darktrace",
      "Fortinet",
      "Imperva",
    ],
  },
  {
    role: "Cybersecurity Project Coordinator",
    qualifier: "Part-time",
    company: "First West Credit Union",
    dates: "Jul 2024 — Jun 2025",
    summary:
      "Security metrics, phishing programs, and framework-informed project work.",
    bullets: [
      "Researched security practices against NIST, CIS, and OSFI frameworks; gathered KPIs and KRIs and assessed proposed metrics.",
      "Improved the realism of phishing training and scripted active-user update and deletion lists for the training program.",
      "Developed a process for gathering IT project security requirements and supported data security policy documentation and awareness content.",
    ],
    tags: ["NIST · CIS · OSFI", "KPI / KRI", "Phishing awareness", "Scripting"],
  },
];
export const skills = [
  {
    number: "01",
    name: "Security operations",
    description:
      "Endpoint and email security, reported-phishing investigations, incident response support, SIEM and log management, and vulnerability management.",
    tools: [
      "Microsoft 365 Defender",
      "CrowdStrike Falcon",
      "Darktrace",
      "KnowBe4",
      "Microsoft Sentinel",
      "Abnormal AI",
    ],
  },
  {
    number: "02",
    name: "Data & identity protection",
    description:
      "IAM, DLP, sensitivity labeling, data classification and retention, access control, and data governance.",
    tools: [
      "Microsoft Purview",
      "Customer IAM",
      "DLP policy testing",
      "Azure security exposure",
    ],
  },
  {
    number: "03",
    name: "Risk & security assurance",
    description:
      "Security framework research, audit readiness, policy documentation, threat risk assessment support, and KPI/KRI reporting.",
    tools: ["NIST", "CIS", "OSFI", "Security awareness"],
  },
  {
    number: "04",
    name: "Technical foundations & labs",
    description:
      "Python and SQL, network traffic analysis, firewall configuration, digital forensics using process memory dumps, network captures, and file-system analysis, and detection-model development. Security lab tools are listed separately from workplace platforms.",
    tools: [
      "Python · SQL",
      "Wireshark · GNS3",
      "Snort · iptables",
      "Nmap · Nessus · Metasploit",
      "Cisco ASA · Palo Alto NGFW",
      "scikit-learn · PyTorch",
    ],
  },
];
export const projects = [
  {
    id: "phishing-detection",
    category: "MEng capstone · Team project · 2024",
    title: "Phishing email detection",
    description:
      "Compared machine-learning approaches for classifying legitimate and phishing emails, using phishing data provided by the UVic Systems team.",
    detail:
      "Evaluated Logistic Regression, Naive Bayes, Random Forest, and neural-network approaches across feature sets. Documented model performance and recommendations in a capstone report.",
    tools: ["Python", "scikit-learn", "Email analysis"],
    link: "https://github.com/plmurdoch/Reports/blob/main/ECE_597_Final_Report.pdf",
    action: "Read capstone report",
  },
  {
    id: "network-detection",
    category: "Network security lab · Team project · 2024",
    title: "DoS traffic detection",
    description:
      "Built training and evaluation scripts to distinguish benign network flows from denial-of-service traffic in an academic test environment.",
    detail:
      "Used CICFlowMeter-compatible flow data and scikit-learn models. Evaluation code calculates false-positive and detection rates and plots ROC curves with AUC.",
    tools: ["Python", "scikit-learn", "Network flows"],
    link: "https://github.com/plmurdoch/ECE_567",
    action: "Explore detection code",
  },
  {
    id: "firewall-lab",
    category: "Firewall & IPS lab · Individual work · 2023",
    title: "Firewall policy & traffic inspection",
    description:
      "Configured network access and inspection rules across inside, outside, and DMZ hosts in a virtual lab.",
    detail:
      "Documented PAT, application-aware rules, HTTPS inspection, URL filtering, antivirus inspection, and exploit-blocking validation against a deliberately vulnerable lab host.",
    tools: ["Palo Alto NGFW", "VMware", "Network inspection"],
    link: "https://github.com/plmurdoch/Reports/blob/main/ECE_519C_Final_Assignment.pdf",
    action: "Read lab report",
  },
  {
    id: "cryptanalysis",
    category: "Applied cryptography · Academic project · 2024",
    title: "Differential cryptanalysis",
    description:
      "Implemented a Python differential cryptanalysis attack against an educational substitution-permutation network.",
    detail:
      "Explored differential characteristics and last-round key recovery to examine the relationship between cipher design and attack resistance.",
    tools: ["Python", "Cryptography", "Key recovery"],
    link: "https://github.com/plmurdoch/Cryptography",
    action: "Explore cryptanalysis code",
  },
];
