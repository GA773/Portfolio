export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export const education: Education[] = [
  {
    id: 'dgi',
    institution: 'Dronacharya Group Of Institutions',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Information Technology',
    period: '2023 – 2027',
    location: 'Greater Noida, India',
  },
];
