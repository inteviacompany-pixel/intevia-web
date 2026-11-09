export type Language = 'th' | 'en';
export type NavView = 'home' | 'about' | 'rfid-tech' | 'logistics' | 'engineering' | 'projects' | 'roi' | 'contact';

export interface ProjectItem {
  id: string;
  category: 'logistics' | 'manufacturing' | 'healthcare' | 'retail';
  titleTh: string;
  titleEn: string;
  subtitleTh: string;
  subtitleEn: string;
  descTh: string;
  descEn: string;
  highlightsTh: string[];
  highlightsEn: string[];
  techStack: string[];
  metrics: {
    labelTh: string;
    labelEn: string;
    value: string;
  }[];
  slideRef?: number;
}

export interface ServicePillar {
  id: string;
  titleTh: string;
  titleEn: string;
  descTh: string;
  descEn: string;
  scopeTh: string[];
  scopeEn: string[];
  deliverablesTh: string[];
  deliverablesEn: string[];
  impactTh: string;
  impactEn: string;
}
