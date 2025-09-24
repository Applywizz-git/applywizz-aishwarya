import profileImage from "@/assets/aishwaryaimage2-removebg-preview.png";

export const profile = {
  name: "Aishwarya Uyyala",
  title: "Software Engineer • Full-Stack Development • Cloud Solutions",
  location: "Utica, NY",
  phone: "+1 (856) 294-1732",
  email: "uyyala.aishwarya@gmail.com",
  image: profileImage,

  languages: [
    "Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "Bash", "C", "C++"
  ],

  sceneMap: {
    dataEngineering: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Redis", "REST APIs"],
    aiMl: ["TensorFlow", "PyTorch", "Scikit-Learn", "YOLOv7", "LangChain", "RAG"],
    devOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
  },

  about: [
    "5+ years developing full-stack applications using Java, Spring Boot, Angular, React, and REST APIs, improving enterprise system efficiency by 40%.",
    "Designed and optimized microservices architectures and SQL/NoSQL databases, reducing query latency by 50% and supporting high-volume, scalable applications with cloud-native solutions on AWS and Azure."
  ],

  experience: [
    {
      company: "Pathfinder Village",
      role: "Technology Specialist",
      location: "Edmeston, NY",
      dates: "Jun 2025 – Present",
      highlights: [
        "Revamped Pathfinder Village and Farmstead Market websites using WordPress and React.js → +25% accessibility compliance, +40% community engagement.",
        "Introduced standardized templates and CMS workflows → +20% accessibility scores across all key pages.",
        "Designed REST API integrations with MySQL and PostgreSQL → −35% query response times.",
        "Generated insights through Google Analytics and Power BI → +30% monthly site visits.",
        "Trained staff on Microsoft 365, SharePoint, and CMS tools → +40% adoption, −30% support tickets.",
        "Coordinated Jira and GitHub workflows → 95% on-time project completion rate."
      ],
      technologies: ["WordPress", "React.js", "MySQL", "PostgreSQL", "Power BI", "Microsoft 365", "SharePoint", "Jira", "GitHub"]
    },
    {
      company: "Reality AI Lab",
      role: "Volunteer Software Engineer",
      location: "San Francisco, CA",
      dates: "Mar 2025 – Jun 2025",
      highlights: [
        "Built enterprise-scale applications with Java, Spring Boot, and Angular → +40% client operational efficiency.",
        "Modernized legacy Audit Management system into microservices framework with Docker/Kubernetes → −30% audit cycle time.",
        "Created REST APIs integrated with MySQL to manage 10M+ records → improved reliability.",
        "Developed Angular dashboards and reusable components → boosted usability and adoption.",
        "Automated CI/CD pipelines with Maven, Jenkins, Docker → −25% deployment errors.",
        "Coordinated AWS/on-prem rollouts and mentored juniors → sustained 99.9% uptime."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker", "Jenkins", "AWS"]
    },
    {
      company: "SUNY Polytechnic Institute",
      role: "Multicultural Affairs Student Assistant",
      location: "Utica, NY",
      dates: "Sep 2024 – Dec 2024",
      highlights: [
        "Automated event attendance tracking with Excel formulas/pivot tables → −40% reporting time.",
        "Designed digital promotional assets with Canva/PowerPoint → +25% student participation.",
        "Analyzed survey datasets with Python (Pandas, Matplotlib) → +18% outreach effectiveness.",
        "Developed Power BI dashboards for diversity KPIs → improved data-driven program planning.",
        "Created onboarding docs and workflows in Word/Confluence → −30% training time."
      ],
      technologies: ["Excel", "Python", "Pandas", "Matplotlib", "Power BI", "Canva", "Confluence"]
    },
    {
      company: "SUNY Polytechnic Institute",
      role: "Graduate Research Assistant",
      location: "Utica, NY",
      dates: "Jan 2024 – Dec 2024",
      highlights: [
        "Modeled retinal blood flow using Python and MATLAB → +28% simulation accuracy.",
        "Streamlined image processing with OpenCV → +22% anomaly detection efficiency.",
        "Optimized MySQL data pipelines → −40% query latency (HIPAA compliant).",
        "Automated preprocessing & feature extraction in Python → saved 12+ hrs/month.",
        "Built dynamic dashboards in Power BI → faster research insights."
      ],
      technologies: ["Python", "MATLAB", "OpenCV", "MySQL", "Power BI"]
    },
    {
      company: "SUNY Polytechnic Institute",
      role: "IT Support Operations Assistant",
      location: "Utica, NY",
      dates: "Sep 2023 – May 2024",
      highlights: [
        "Automated test scheduling with Python and Excel VBA → −20% manual coordination.",
        "Implemented ADA-compliant testing systems → +30% accessibility, −30% setup errors.",
        "Optimized MySQL queries → −35% retrieval times (FERPA compliant).",
        "Developed Power BI dashboards for testing metrics → +25% reporting efficiency.",
        "Resolved 95% incidents within SLA for adaptive testing platforms."
      ],
      technologies: ["Python", "Excel VBA", "MySQL", "Power BI"]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Software Engineer",
      location: "Bengaluru, India",
      dates: "Sep 2018 – Sep 2022",
      highlights: [
        "Developed enterprise applications with Java, Spring Boot, Angular, REST APIs → +40% client efficiency.",
        "Migrated legacy Audit Management to microservices with Docker/Kubernetes → −30% audit cycle time.",
        "Built REST APIs integrated with MySQL for 10M+ records → improved data reliability.",
        "Created Angular dashboards and reusable UI components → stronger user adoption.",
        "Automated CI/CD pipelines with Maven, Jenkins, Docker → −25% release failures.",
        "Managed AWS & on-prem deployments ensuring high availability."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker", "Kubernetes", "Jenkins", "AWS"]
    }
  ],

  projects: [
    {
      title: "Automated Code Documentation",
      description: "Built Python-based ingestion pipeline with AST parsing and FAISS storage. Implemented RAG with LangChain/LLMs for context-aware documentation. Deployed FastAPI in Docker for instant engineer insights.",
      technologies: ["Python", "AST", "FAISS", "LangChain", "FastAPI", "Docker"],
      image: "/project11.jpeg"
    },
    {
      title: "Semi-Supervised ML for DDoS Detection",
      description: "Engineered flow features, applied clustering/label propagation, trained XGBoost ensemble, deployed Kafka pipeline + ELK logging. Achieved 92% accuracy with minimal false positives.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Kafka", "ELK Stack"],
      image: "/project22.png"
    },
    {
      title: "Software Cost Estimation",
      description: "Performed feature engineering, trained Random Forest/XGBoost regressors with CV, delivered REST API + exportable reports for project budget forecasting.",
      technologies: ["Pandas", "Random Forest", "XGBoost", "REST APIs", "Flask"],
      image: "/project33.jpeg"
    },
    {
      title: "Object Detection with YOLOv7",
      description: "Fine-tuned YOLOv7/Faster R-CNN/DETR on COCO + domain data. Benchmarked with PyTorch/TensorRT. Packaged as containerized inference service for real-time edge deployment.",
      technologies: ["YOLOv7", "PyTorch", "TensorRT", "OpenCV", "Docker"],
      image: "/project44.jpeg"
    },
    {
      title: "Android App Download Prediction",
      description: "Engineered app metadata + sentiment features, trained XGBoost + neural nets with backtesting, exposed predictions via Flask API for marketing campaign optimization.",
      technologies: ["spaCy", "XGBoost", "Neural Networks", "Flask API"],
      image: "/project55.jpeg"
    },
    {
      title: "Advanced Security in Cloud Computing",
      description: "Implemented AWS KMS encryption, IAM least-privilege, GuardDuty/CloudTrail/WAF telemetry pipeline, SIEM integration, and automated alerting for stronger cloud security.",
      technologies: ["AWS KMS", "GuardDuty", "CloudTrail", "WAF", "SIEM"],
      image: "/project66.jpeg"
    }
  ],

  skills: {
    "Frontend Development": [
      "React.js", "Angular", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript"
    ],
    "Backend Development": [
      "Java", "Spring Boot", "Spring REST", "Node.js", "Express.js", "Microservices", "JPA/Hibernate", "GraphQL"
    ],
    "Cloud & DevOps": [
      "AWS", "EC2", "S3", "Lambda", "RDS", "API Gateway", "CloudFormation", "Microsoft Azure", 
      "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "CI/CD Pipelines"
    ],
    "Databases": [
      "MySQL", "PostgreSQL", "MongoDB", "Oracle", "Redis"
    ],
    "AI/ML & Data Science": [
      "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "YOLOv7", "RAG", "LangChain", "OpenCV", "MATLAB"
    ],
    "Programming": [
      "Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash", "C", "C++"
    ]
  },

  certifications: [
    { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", id: "AWS-CP-2024", date: "2024" },
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", id: "AZ-900", date: "2024" },
    { name: "Crash Course on Python", issuer: "Google", id: "GOOGLE-PY-2024", date: "2024" },
    { name: "IBM Python for Data Science, AI & Development", issuer: "Coursera", id: "IBM-PYDS-2024", date: "2024" },
    { name: "Full-Stack Web Development with React", issuer: "Coursera", id: "REACT-FS-2024", date: "2024" },
    { name: "Data Structures and Algorithms Specialization", issuer: "Coursera", id: "DSA-SPEC-2024", date: "2024" }
  ],

  achievements: [
    "Ranked 649th nationally in the Unified Cyber Olympiad by Unified Council, showcasing strong problem-solving and analytical skills."
  ],

  education: [
    {
      degree: "M.S., Computer and Information Science",
      school: "SUNY Polytechnic Institute",
      location: "Utica, NY",
      year: "Jan 2023 – Dec 2024"
    },
    {
      degree: "B.Tech, Computer Science & Engineering",
      school: "Sri Indu College of Engineering & Technology",
      location: "Hyderabad, India",
      year: "Jul 2018 – Aug 2022"
    }
  ],
    recommendations: [
    {
      name: "Karen Knavel",
      title: "Karen Knavel",
      image: "src/assets/karen_knavel.png", // Path to the image
      description:
        "Thank you so much, Aishwarya, for your exceptional work on this challenging project! Your contributions have been fantastic, and it's been a true pleasure collaborating with you...",
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      image: "src/assets/recomendationimage1.png",
      description:
        "Aishwarya is a talented developer who consistently goes above and beyond on every project.",
    },
    {
      name: "Edmond Rusjan",
      title: "Associate Professor of Mathematics at SUNYIT",
      image: "src/assets/recomendationimagemen2.png", // Path to the image
      description:
        "Many thanks, Aishwarya, for all your contributions on this challenging project! Nice job! It's been a pleasure working with you...",
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      image: "path/to/image2.jpg",
      description:
        "Aishwarya is a talented developer who consistently goes above and beyond on every project.",
    },
    // More recommendations can go here
  ],

};

