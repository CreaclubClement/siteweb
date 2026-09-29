import type {Project} from '@/components/design-system/Component';
import type {CMSProject} from '@/lib/cms/project-schema';
import {blankProject,blankPhoto} from '@/lib/cms/project-schema';

// Initial collection. Persisted CMS edits override these records.
const initialCards:Project[] = [
 {id:'amoual',title:'Amoual',category:'Rebranding',description:"Construire une marque capable d’inspirer confiance aux investisseurs.",cover:'/assets/figma/bcf19.png',services:['Identité visuelle','Stratégie de marque','Expérience digitale']},
 {id:'lucas-drifter',title:'Lucas Drifter',category:'Rebranding',description:"Créer une identité sobre et durable, à l’image d’un savoir-faire artisanal.",cover:'/assets/figma/f60c9.png',services:['Identité visuelle','Stratégie de marque','Expérience digitale']},
 {id:'u-tragulinu',title:'U-Tragulinu',category:'Rebranding',description:'Moderniser une marque historique sans perdre son authenticité corse.',cover:'',services:['Identité visuelle','Stratégie de marque','Expérience web']},
 {id:'pb-cosmetics',title:'PB cosmetics',category:'Rebranding',description:'Faire évoluer la perception d’une marque grâce à une identité plus premium.',cover:'/assets/figma/338b9.png',services:['Identité visuelle','Stratégie de marque','Expérience digitale']},
 {id:'decibell',title:'Decibell',category:'Rebranding',description:'Clarifier un positionnement complexe pour le rendre immédiatement identifiable.',cover:'',services:['Identité visuelle']},
 {id:'active-life',title:'Active Life',category:'Rebranding',description:'Créer une communication capable de capter l’attention en quelques secondes.',cover:'/assets/figma/48e72.png',services:['Identité visuelle','Stratégie de marque','Expérience digitale']},
 {id:'solespace',title:'SoleSpace',category:'Lancement',description:'Poser les bases d’une marque ambitieuse dès son lancement.',cover:'/assets/figma/77725.png',services:['Identité visuelle']},
 {id:'cooked',title:'Cooked & CO',category:'Lancement',description:'Construire un système graphique cohérent pour accompagner la croissance de la marque.',cover:'/assets/figma/1386a.png',services:['Identité visuelle']},
];

export const projectSeeds:CMSProject[]=initialCards.map(card=>({...blankProject(),id:card.id,title:card.title,category:card.category,description:card.description,services:card.services,listed:true,cover:{...blankPhoto(),alt:card.title},hero:{...blankPhoto(),alt:card.title}}));
Object.assign(projectSeeds[0],{"sector": "Investissement", "year": "2026", "development": ["Robin Delporte", "Tristan Dolorieux"], "published": true, "context": "Amoual est une plateforme d'investissement spécialisée dans le financement de camions en Afrique. À l'aube de son lancement, l'entreprise devait construire une image capable d'inspirer confiance auprès de futurs investisseurs tout en affirmant une vision moderne et accessible de l'investissement.", "challenges": "L'enjeu n'était pas simplement de créer une identité visuelle, mais de construire une marque capable d'inspirer confiance dès les premiers points de contact. Elle devait se démarquer des codes traditionnels de la finance, tout en posant des bases suffisamment solides pour accompagner la croissance future de l'entreprise.", "decisions": "Chaque décision a été guidée par une volonté de concilier crédibilité, simplicité et modernité. Plutôt que de reproduire les codes visuels du secteur bancaire, nous avons construit un système de marque capable de rassurer les investisseurs tout en affirmant une identité singulière et durable.", "results": "Au-delà de son identité, Amoual dispose aujourd'hui d'une marque capable d'accompagner son développement et de soutenir ses ambitions. Le projet a permis de poser des bases solides pour son lancement et de contribuer à la confiance de ses premiers investisseurs, avec plus de 2M€ investis, 30 investisseurs et plus de 200 000 € réservés.", "metrics": [{"value": "+30", "label": "Investisseurs"}, {"value": "+2 M€", "label": "Investis"}, {"value": "200 K€", "label": "Réservés"}]});
const amoualPhoto=(file:string,alt:string)=>({...blankPhoto(),src:'/assets/amoual/'+file,alt});
const amoualVideo=(file:string,alt:string)=>({...amoualPhoto(file+'.mp4',alt),poster:'/assets/amoual/'+file+'.webp'});
projectSeeds[0].hero=amoualPhoto('hero.webp','Brochure de présentation Amoual Invest suspendue sur fond bleu');
projectSeeds[0].cover={...projectSeeds[0].hero};
projectSeeds[0].galleries={
 context:[amoualVideo('video-2','Affiches animées Amoual Invest sur une façade'),amoualPhoto('photo-3.webp','Simulateur d’investissement Amoual sur ordinateur')],
 challenges:[amoualPhoto('photo-4.webp','Identité visuelle et logo Amoual Invest')],
 decisions:[amoualPhoto('photo-5.webp','Portrait et signature Amoual Invest'),amoualPhoto('photo-6.webp','Tableau de bord des investissements sur tablette')],
 results:[{...amoualVideo('video-7','Animation des performances des portefeuilles Amoual'),fit:'contain'},amoualPhoto('photo-8.webp','Suivi des investissements Amoual sur mobile'),amoualVideo('video-9','Affiche animée Amoual sur un mur de briques')]
};
export function toProjectCard(p:CMSProject):Project{const cover=p.cover.src?p.cover:p.hero;return {id:p.id,title:p.title,category:p.category,description:p.description,services:p.services,cover:cover.src,coverAlt:cover.alt,coverPoster:cover.poster,coverFit:cover.fit,coverPosition:cover.position,...(p.published?{href:"/projets/"+p.id}:{})};}
export const projects=projectSeeds.map(toProjectCard);

// Each case study and its cards share the same CMS media.
for(const id of ['lucas-drifter','pb-cosmetics','active-life','solespace','cooked','u-tragulinu']){
 const project=projectSeeds.find(p=>p.id===id)!;
 const video=id==='u-tragulinu';
 project.hero={...blankPhoto(),src:`/assets/projects/${id}/hero.${video?'mp4':'webp'}`,alt:`Présentation du projet ${project.title}`,...(video?{poster:'/assets/projects/u-tragulinu/hero-poster.webp'}:{})};
 project.cover={...project.hero};
 project.published=true;
 project.listed=true;
}

const decibellProject=projectSeeds.find(p=>p.id==='decibell')!;
decibellProject.hero={...blankPhoto(),src:'/assets/projects/decibell/hero.mp4',poster:'/assets/projects/decibell/hero-poster.webp',alt:'Présentation animée du projet Decibell'};
decibellProject.cover={...decibellProject.hero};
decibellProject.published=true;
