import type { Project, Certification, CreativeWork } from "@/types/portfolio";
export const projects: Project[] = [{
 title:"Serverless Contact Form",
 description:"A serverless contact workflow built around managed cloud services, API-driven submissions, and persistent contact records.",
 category:"Cloud Engineering", technologies:["AWS Lambda","API Gateway","DynamoDB","S3","GitHub Actions"], status:"Cloud project", githubUrl:"", liveUrl:""
}];
export const certifications: Certification[] = [{
 name:"Add your certification", issuer:"Issuing organization", issued:"YYYY", credentialId:"", verificationUrl:"", skills:["Cloud","Networking","DevOps"]
}];
export const creativeWorks: CreativeWork[] = [{
 title:"Creative & Event Design", category:"Visual Communication", description:"Magazine layouts, event posters, social media graphics, and visual design work.", year:"2026", tools:["Photoshop","Figma","Visual Design"], href:""
}];
export const skills = [
 {name:"AWS",group:"Cloud"},{name:"Docker",group:"Containers"},{name:"GitHub Actions",group:"CI/CD"},{name:"Linux",group:"Systems"},
 {name:"Networking",group:"Infrastructure"},{name:"React / Next.js",group:"Development"},{name:"Node.js",group:"Backend"},{name:"Git",group:"Workflow"}
];
export const focusAreas = [
 {number:"01",title:"Cloud infrastructure",detail:"Designing reliable, secure cloud foundations."},
 {number:"02",title:"Automation & delivery",detail:"Making builds and releases repeatable."},
 {number:"03",title:"Networks & security",detail:"Understanding how systems connect and stay protected."}
];
