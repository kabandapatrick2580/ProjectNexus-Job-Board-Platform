export interface JobProps {
    id: string;
    title: string;
    category: string;
    location: string;
    experience_level: string;
    company: string;
  }
  
export interface FilterProps {
    category: string;
    location: string;
    experience_level: string;
  }

export interface ButtonProps {
    text: string;
    variant?: string;
    onClick?: () => void;
  }

export interface CardProps {
    title: string;
    content: string;
    variant?: "default" | "primary" | "danger" | "success" | "warning";
  }

export interface ImageProps {
  image: string;
}

export interface Applicant {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface JobApplication {
  resume_link: string;
  cover_letter: string;
  job: string;
}
