/**
 * Interface defining the profile model.
 */
export interface Profile {
  name: string;
  contact: Contact;
  description: string;
  picture: string;
  languages: Language[];
  skills: Skill[];
  workExperiences: WorkExperience[];
  studies: Study[];
  hobbies: string[];
}

/**
 * Interface defining the contact model.
 */
export interface Contact {
  email: string;
  phone: string;
  address: string;
}

/**
 * Interface defining the language model.
 */
export interface Language {
  country: string;
  level: string;
}

/**
 * Interface defining the skill model.
 */
export interface Skill {
  title: string;
  level: number;
  levelMax: number;
}

/**
 * Interface defining the work experience model.
 */
export interface WorkExperience {
  title: string;
  date: string;
  description: string;
  logo: string;
}

/**
 * Interface defining the study model.
 */
export interface Study {
  title: string;
  date: string;
  description: string;
  logo: string;
}
