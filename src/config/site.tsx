import { getBaseUrl } from "@/utils/baseUrl";

export const siteConfig = {
  base_url: getBaseUrl() || process.env.NEXT_PUBLIC_BASE_URL,
  brand: 'QualitEx',
  title: 'QualitEx Management Consultancy',
  description: 'QualitEx helps Philippine businesses achieve global success with expert management system consulting, boosting quality, speed, and efficiency.',
  keywords: 'QualitEx, management consulting Philippines, ISO consulting, business excellence, quality management systems, global competitiveness, organizational development, process improvement, corporate consulting, service excellence',
  contact: {
    phone: '(+632) 805-4757',
    email: 'info@qualitexph.com',
    main_office: 'B3 L97 Ostini St., Camella Milan, San Pedro City, Laguna, PH',
    main_office_short: 'San Pedro City, Laguna, PH'
  },
  social: {
    facebook: 'https://www.facebook.com/QualitEx-Management-Consultancy-1610762062538956/',
    linkedin: 'https://www.linkedin.com/in/edison-pike-1a5a634b',
    youtube: 'https://www.youtube.com/@qualitexph',
    twitter: 'https://twitter.com'
  },
};
