import { company } from './company';
export const pageSEO = {
  home:{title:company.seo.title,description:company.seo.description},
  about:{title:`About Us | ${company.companyName}`,description:`Learn about ${company.companyName}, its mission, vision, values and construction capabilities.`},
  services:{title:`Construction Services | ${company.companyName}`,description:'Building construction, civil engineering, road works, renovation, project management and supply services.'},
  projects:{title:`Projects | ${company.companyName}`,description:'Explore completed construction, road, civil and infrastructure projects delivered by the team.'},
  products:{title:`Construction Supplies | ${company.companyName}`,description:'Reliable construction materials, hardware and site supply solutions for project requirements.'},
  industries:{title:`Industries We Serve | ${company.companyName}`,description:'Construction and infrastructure solutions for residential, commercial, industrial and institutional sectors.'},
  why:{title:`Why Choose Us | ${company.companyName}`,description:'Quality, safety, reliability and communication in every construction and engineering project.'},
  team:{title:`Our Team | ${company.companyName}`,description:'Experienced professionals focused on quality delivery and responsive project coordination.'},
  careers:{title:`Careers | ${company.companyName}`,description:'Explore opportunities to join a growing construction and engineering team.'},
  blog:{title:`Blog & News | ${company.companyName}`,description:'Construction, engineering and project insight updates from the field.'},
  faq:{title:`FAQ | ${company.companyName}`,description:'Answers to common questions about construction services, supplies and quotation requests.'},
  testimonials:{title:`Testimonials | ${company.companyName}`,description:'Client feedback from projects completed with professionalism and care.'},
  contact:{title:`Contact Us | ${company.companyName}`,description:`Contact ${company.companyName} for construction, engineering and supply enquiries.`},
  quote:{title:`Request a Quote | ${company.companyName}`,description:'Submit a construction project enquiry and request a quotation.'}
};
