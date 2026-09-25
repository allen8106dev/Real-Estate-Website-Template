import type { Agent } from '@/types/agent';
export const agents:Agent[]=[
 {id:'a1',name:'Meera Kulkarni',role:'Founder & Principal Consultant',phone:'+91 98220 48210',email:'meera@aarambhrealty.in',whatsapp:'919822048210',image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85',areas:['Baner','Aundh','Kothrud'],bio:'A Pune native with a keen eye for homes that hold their value.',socials:{linkedin:'https://linkedin.com'}},
 {id:'a2',name:'Rohan Deshmukh',role:'Residential Advisor',phone:'+91 97645 10392',email:'rohan@aarambhrealty.in',whatsapp:'919764510392',image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85',areas:['Wakad','Hinjawadi','Baner'],bio:'Helping young families make confident moves in west Pune.',socials:{linkedin:'https://linkedin.com',instagram:'https://instagram.com'}},
 {id:'a3',name:'Ananya Shah',role:'Investment & Commercial Lead',phone:'+91 98904 76821',email:'ananya@aarambhrealty.in',whatsapp:'919890476821',image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',areas:['Kharadi','Viman Nagar','Hadapsar'],bio:'Practical market intelligence for property investors and businesses.',socials:{linkedin:'https://linkedin.com'}}
];
export const getAgent=(id:string)=>agents.find(a=>a.id===id);
