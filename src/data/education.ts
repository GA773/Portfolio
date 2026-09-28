export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location: string;
  status?: string;
}

export const education: Education[] = [
  {
    id: 'be-csit',
    institution: 'Dronacharya Group Of Institutions',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Information Technology',
    period: '2023 – 2027',
    location: 'Greater Noida, India',
    status: 'Pursuing',
  },
  {
    id: 'higher-secondary-12th',
    institution: 'Saraswati Shishu Vidya Mandir',
    degree: 'Higher Secondary Education (12th)',
    period: '2021 – 2022',
    location: 'Giridih, Jharkhand',
  },
  {
    id: 'secondary-10th',
    institution: 'Saraswati Shishu Vidya Mandir',
    degree: 'Secondary Education (10th)',
    period: '2019 – 2020',
    location: 'Giridih, Jharkhand',
  },
];
