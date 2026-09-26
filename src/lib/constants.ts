export const SITE_NAME = 'RoadReady';
export const SITE_TAGLINE = 'Everything you need to be road ready.';
export const SITE_DESCRIPTION =
  'A comprehensive, interactive web app for all things driving in India. Mock license tests, road signs encyclopedia, RTO guides, traffic rules, car anatomy, driving tutorials, and more.';

export const STORAGE_KEYS = {
  QUIZ_HISTORY: 'roadready_quiz_history',
  WRONG_QUESTIONS: 'roadready_wrong_questions',
  USER_STATS: 'roadready_user_stats',
  BOOKMARKS: 'roadready_bookmarks',
  CHECKLIST_PREFIX: 'roadready_checklist_',
} as const;

export const EXTERNAL_LINKS = {
  PARIVAHAN: 'https://parivahan.gov.in',
  SARATHI: 'https://sarathi.parivahan.gov.in',
  MORTH: 'https://morth.nic.in',
} as const;

export const EMERGENCY_NUMBERS = [
  { service: 'National Emergency Helpline', number: '112', description: 'All-in-one emergency number across India' },
  { service: 'Police', number: '100', description: 'Immediate police assistance' },
  { service: 'Ambulance / Medical Emergency', number: '108', description: 'Free emergency medical service' },
  { service: 'National Highway Helpline', number: '1033', description: '24x7 emergency response on National Highways' },
  { service: 'Traffic Police Helpline', number: '1095', description: 'City-specific traffic assistance' },
  { service: 'Women Helpline', number: '1091', description: 'Road safety and transit distress for women' },
] as const;
