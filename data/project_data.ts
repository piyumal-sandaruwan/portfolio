export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Student API",
    category: "BACKEND / DEVOPS",
    description:
      "A Spring Boot REST API deployed on AWS EC2, with an automated CI/CD pipeline integrating GitLab, Jenkins, SonarQube, Docker and Nginx.",
    stack: [
      "Java",
      "Spring Boot",
      "Maven",
      "MySQL",
      "GitLab",
      "Jenkins",
      "SonarQube",
      "Docker",
      "AWS EC2",
      "Nginx",
    ],
    href: "YOUR_STUDENT_API_REPOSITORY_URL",
    image: "/images/projects/student-api.png",
  },

  {
    number: "02",
    title: "i-Computers",
    category: "FULL STACK / CLOUD / DEVOPS",
    description:
      "A full-stack computer shop application with React and Node.js, deployed using Docker and Azure infrastructure with GitHub Actions CI/CD.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Azure",
      "Azure Container Registry",
      "Nginx",
    ],
    href: "YOUR_I_COMPUTERS_REPOSITORY_URL",
    image: "/images/projects/i-computers.png",
  },

  {
    number: "03",
    title: "Cloud Infrastructure",
    category: "CLOUD / NETWORKING",
    description:
      "An AWS infrastructure project exploring EC2 hosting, Cloudflare DNS, HTTPS configuration and Nginx reverse proxy routing for multiple services.",
    stack: [
      "AWS",
      "EC2",
      "Ubuntu",
      "Cloudflare",
      "Nginx",
      "DNS",
      "SSL/TLS",
      "Linux",
    ],
    href: "YOUR_INFRASTRUCTURE_REPOSITORY_URL",
    image: "/images/projects/3.png",
  },

  {
    number: "04",
    title: "SHOPZA – POS System",
    category: "FULL STACK / AWS / DEVOPS",
    description:
      "A Point of Sale system deployed on AWS EC2, featuring automated frontend and backend deployments, Nginx HTTPS configuration, PM2 process management and separate Linux deployment users.",
    stack: [
      "React",
      "TypeScript",
      "AWS EC2",
      "Ubuntu",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Cloudflare",
      "Linux",
    ],
    href: "https://lnkd.in/g3VcbuHD",
    image: "/images/projects/shopza-pos.png",
  },

  {
    number: "05",
    title: "AWS Serverless Contact Form",
    category: "SERVERLESS / AWS / CI/CD",
    description:
      "A serverless contact form using AWS Amplify, API Gateway, Lambda and DynamoDB. GitHub integration automates frontend deployment, while Lambda processes submissions and stores contact information.",
    stack: [
      "AWS Amplify",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "IAM",
      "CloudWatch",
      "GitHub Actions",
    ],
    href: "YOUR_SERVERLESS_REPOSITORY_URL",
    image: "/images/projects/aws-serverless-contactForm.png",
  },

  {
    number: "06",
    title: "AWS Serverless Feedback System",
    category: "SERVERLESS / CLOUD / AWS",
    description:
      "A serverless feedback platform hosted on Amazon S3 and CloudFront, using API Gateway and Lambda to process submissions, store feedback in DynamoDB, upload PDF files to S3 and send email notifications through Amazon SES.",
    stack: [
      "Amazon S3",
      "CloudFront",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "Amazon SES",
      "GitHub Actions",
    ],
    href: "YOUR_FEEDBACK_PROJECT_REPOSITORY_URL",
    image: "/images/projects/serverless-feedback.png",
  },
];