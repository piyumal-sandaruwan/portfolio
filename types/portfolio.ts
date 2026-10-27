export type Project = { title:string; description:string; category:string; technologies:string[]; status?:string; githubUrl?:string; liveUrl?:string };
export type Certification = { name:string; issuer:string; issued:string; credentialId?:string; verificationUrl?:string; skills:string[] };
export type CreativeWork = { title:string; category:string; description:string; year?:string; tools:string[]; href?:string };
