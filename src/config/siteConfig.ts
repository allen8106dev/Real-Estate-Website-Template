import { theme } from './theme';
export const siteConfig = {
  companyName:'Aarambh Realty', tagline:'Thoughtful spaces. Sound decisions.', logo:{text:'AARĀMBH'},
  contact:{phone:'+91 98220 48210',whatsapp:'919822048210',email:'hello@aarambhrealty.in',address:{line1:'Office 402, Verve Estate',line2:'Baner Road',city:'Pune',state:'Maharashtra',pincode:'411045'},mapEmbedUrl:'https://www.google.com/maps?q=Baner,+Pune&output=embed'},
  social:{instagram:'https://instagram.com',facebook:'https://facebook.com',linkedin:'https://linkedin.com',youtube:'https://youtube.com'},
  serviceAreas:['Baner','Wakad','Kharadi','Viman Nagar','Hinjawadi','Kothrud','Hadapsar'], city:'Pune',
  colors:{primary:theme.colors.ink,primaryDark:theme.colors.pine,accent:theme.colors.gold},
  stats:{propertiesListed:240,happyClients:680,yearsExperience:12,citiesCovered:4},
  seo:{defaultTitle:'Aarambh Realty | Premium Properties in Pune',defaultDescription:'Verified homes, investment opportunities and trusted real estate guidance in Pune.',ogImage:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'}
} as const;
