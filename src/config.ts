export const siteConfig = {
  name: "Nilkanth Miyani",
  title: "DevOps and Cloud Engineer",
  description: "Portfolio of Nilkanth Miyani — DevOps Engineer specialized in Cloud, CI/CD, and Automation.",
  accentColor: "#1d4ed8",

  social: {
    email: "miyaninilkanth2@gmail.com",
    linkedin: "https://linkedin.com/in/nilkanthmiyani",
    twitter: "https://x.com/nilkanthmiyani",
    github: "https://github.com/nilkanthmiyani",
  },

aboutMe: `
I’m a DevOps and Cloud Engineer who focuses on building scalable infrastructure and automating deployment workflows. I work with Kubernetes, Docker, GitLab CI/CD, Jenkins, Terraform, and Ansible to create reliable systems that are easy to deploy, monitor, and improve. I learn by building, breaking, and refining — always aiming to make systems faster, cleaner, and more resilient.
`,


skills: [
  // CI/CD & Automation
  "GitLab CI/CD",
  "Jenkins",
  "Ansible",
  "Terraform",

  // Containers & Orchestration
  "Docker",
  "Kubernetes",
  "Nginx",

  // Cloud Platforms
  "Azure",
  "AWS",
  "Cloudflare",

  // Dev & Scripting
  "Python",
  "Linux",
  "Bash",
  "Java",

  // Version Control
  "GitHub"
],

  projects: [
    {
      name: "DevOps End-to-End Portfolio Project",
      description:
        "Deployed a complete DevOps workflow including VM setup, load balancer routing, containerization using Docker, orchestration using Kubernetes, and CI/CD automation.",
      link: "https://github.com/nilkanthmiyani/devops-portfolio",
      skills: ["Docker", "Kubernetes", "Nginx", "Jenkins", "Azure"]
    },
    {
      name: "Node.js Todo App CI/CD Pipeline",
      description:
        "Built a full CI/CD workflow for a Node.js application using GitLab CI/CD. Automated build, test, Docker image creation, and deployment. Integrated runner configuration and environment-based deployment pipeline.",
      link: "https://github.com/NilkanthMiyani/node-todo-cicd",
      skills: ["Node.js", "GitLab CI/CD", "Docker"]
    },
  ],

  experience: [
    {
      company: "Edureka",
      title: "DevOps Engineer - GenAI Program",
      dateRange: "2025",
      bullets: [
        "Completed DevOps with GenAI certification program",
        "Worked with CI/CD, Docker, Kubernetes, and cloud automation",
        "Implemented hands-on labs and infrastructure deployments"
      ],
    },
    {
      company: "AWS Zero to Hero Training (Shubham)",
      title: "Trainee - AWS Cloud & DevOps",
      dateRange: "2025",
      bullets: [
        "Learned AWS services including EC2, VPC, S3, IAM, and CloudWatch",
        "Built deployment pipelines and cloud-hosted application setups",
        "Practiced real-world AWS architecture patterns"
      ],
    },
    {
      company: "Microsoft Azure Cloud Infrastructure Internship",
      title: "Cloud Intern",
      dateRange: "2025",
      bullets: [
        "Assisted in deploying applications on Azure platform",
        "Configured virtual networks, load balancers, and storage services",
        "Worked on monitoring, scaling, and resource optimization"
      ],
    },
  ],

  education: [
    {
      school: "Gujarat Technological University",
      degree: "Bachelor of Engineering in Information Technology",
      dateRange: "2022 - 2026",
      achievements: [
        "Focused on Cloud, DevOps related projects",
        "Built hands-on projects integrating Azure, Jenkins, and Docker",
        "Emerging Technologies under Code Unnati Program, a CSR initiative of SAP and implemented by Edunet Foundation.",
      ],
    },
  ],
};
