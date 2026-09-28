export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  credentialUrl?: string;
  downloadUrl?: string;
  downloadFilename?: string;
  previewImage?: string;
  completionDate?: string;
}

export const certifications: Certification[] = [
  {
    id: 'computer-network',
    title: 'Computer Network',
    issuer: 'Cisco Networking Academy',
    status: 'Completed',
    credentialUrl: '/certificates/networking-basics-cisco.pdf',
    downloadUrl: '/certificates/networking-basics-cisco.pdf',
    downloadFilename: 'Gaurav-Kumar-Networking-Basics-Cisco.pdf',
    previewImage: '/certificates/networking-basics-cisco.png',
    completionDate: '19 Mar 2026',
  },
  {
    id: 'software-testing',
    title: 'Software Testing',
    issuer: 'Cursa',
    status: 'Completed',
    credentialUrl: '/certificates/software-testing-cursa.pdf',
    downloadUrl: '/certificates/software-testing-cursa.pdf',
    downloadFilename: 'Gaurav-Kumar-Software-Testing-Cursa.pdf',
    previewImage: '/certificates/software-testing-cursa.png',
    completionDate: '31 Mar 2026',
  },
  {
    id: 'html-essentials',
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    status: 'Completed',
    credentialUrl: '/certificates/html-essentials-cisco.pdf',
    downloadUrl: '/certificates/html-essentials-cisco.pdf',
    downloadFilename: 'Gaurav-Kumar-HTML-Essentials-Cisco.pdf',
    previewImage: '/certificates/html-essentials-cisco.png',
    completionDate: '16 Sep 2025',
  },
  {
    id: 'mern-stack-development',
    title: 'MERN Stack Development',
    issuer: 'Apna College',
    status: 'In Progress',
  },
];
