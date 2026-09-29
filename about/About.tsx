"use client";
import {useEffect,useState} from 'react';
import {SiteHeader,SiteCTA,SiteFooter} from '@/components/home/Home';
import type {CMSService} from '@/lib/cms/service-schema';
import {ServicePhoto} from '@/components/services/ServiceCard';
const sections=[['convictions','Convictions'],['vision','Vision d’un projet'],['pour-qui','Pour qui ?'],['engagements','Nos engagements'],['expertises','Services']] as const;
const convictions=[['Le design n’a pas vocation à masquer les faiblesses d’une entreprise. Il doit révéler ce qui la rend unique, clarifier son positionnement et créer une perception cohérente à chaque point de contact.','Nous croyons que la simplicité est le résultat d’un travail exigeant. Derrière chaque choix graphique se cachent une réflexion stratégique, des arbitrages et une intention précise.'],['Une identité forte ne cherche pas à suivre les tendances. Elle est conçue pour rester juste, pertinente et durable.','Enfin, nous sommes convaincus que les meilleures marques ne sont pas toujours celles qui parlent le plus fort, mais celles qui savent créer une cohérence que l’on ressent avant même de pouvoir l’expliquer.']];
const vision=[['Nous abordons chaque projet comme la construction d’un nouvel équilibre entre les ambitions de l’entreprise, la réalité de son marché et la perception de ses publics.','Avant de concevoir, nous cherchons à comprendre ce qui doit évoluer, ce qui mérite d’être préservé et ce que la marque doit désormais rendre possible.'],['Cette vision commune devient le fil conducteur du projet : elle guide les décisions, aligne les équipes et donne du sens à chaque choix créatif.','Notre objectif n’est pas seulement de livrer une nouvelle image, mais de construire un système capable d’accompagner durablement le développement de l’entreprise.']];
const collage=[[0,14],[26,125],[151,28],[322,125],[436,141],[312,14],[473,0],[580,14],[545,125],[168,141]];
function Visual({className='',src,alt=''}:{className?:string;src?:string;alt?:string}){return <div className={'about-visual '+className}>{src?<img src={'/assets/about/'+src+'.webp'} alt={alt} loading="lazy" decoding="async"/>:<span>Visuel à venir</span>}</div>}
function Copy({columns}:{columns:string[][]}){return <div className="about-copy">{columns.map((paragraphs,i)=><div key={i}>{paragraphs.map(p=><p key={p}>{p}</p>)}</div>)}</div>}
function Title({index}:{index:number}){return <h2 className="about-section-title" id={sections[index][0]+'-title'}>{sections[index][1]}</h2>}
export function About({services}:{services:CMSService[]}){
 const [active,setActive]=useState<string>('convictions');
 const [highlights,setHighlights]=useState([1,2]);
 useEffect(()=>{
  const section=document.getElementById('pour-qui');if(!section)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible=false;let timer:ReturnType<typeof setTimeout>|undefined;
  const sync=()=>{
   if(timer)clearTimeout(timer);timer=undefined;
   if(visible&&!reduced.matches&&!document.hidden){
    timer=setTimeout(()=>{
     const column=Math.floor(Math.random()*2);
     const offset=1+Math.floor(Math.random()*3);
     setHighlights(previous=>previous.map((index,i)=>i===column?(index+offset)%4:index));
     sync();
    },2000+Math.random()*1000);
   }
  };
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();});
  observer.observe(section);reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
  return()=>{if(timer)clearTimeout(timer);observer.disconnect();reduced.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);};
 },[]);
 useEffect(()=>{
  let frame=0;
  const update=()=>{frame=0;const header=document.querySelector('.home-header')?.getBoundingClientRect().height??68;const line=header+Math.min(150,window.innerHeight*.2);let current:string=sections[0][0];for(const [id] of sections){if((document.getElementById(id)?.getBoundingClientRect().top??Infinity)<=line)current=id;}setActive(current);};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  update();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);window.addEventListener('hashchange',schedule);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);window.removeEventListener('hashchange',schedule);};
 },[]);
 return <div className="home about"><a className="home-skip" href="#contenu">Aller au contenu</a><SiteHeader/><main id="contenu"><section className="about-hero about-gutter"><h1>Chez Étape Zero, nous ne cherchons pas à imposer un style. Nous construisons des marques qui traduisent fidèlement l’identité, les ambitions et la vision de chaque entreprise.</h1><div className="about-hero-images"><Visual src="hero-image-left" alt="Recherche typographique et embossage sur papier blanc"/><Visual src="hero-image-right" alt="Travail de composition et recherches graphiques au studio"/></div></section>
 <div className="about-content about-gutter"><nav className="about-nav" aria-label="Dans cette page">{sections.map(([id,title])=><a key={id} href={'#'+id} aria-current={active===id?'location':undefined}>{title}</a>)}</nav><div className="about-sections">
 <section id="convictions" aria-labelledby="convictions-title"><Title index={0}/><Visual className="about-wide" src="conviction-image" alt="Échange autour du design entre trois créatifs"/><Copy columns={convictions}/></section>
 <section id="vision" aria-labelledby="vision-title"><Title index={1}/><div className="about-collage" aria-label="Sélection de projets du studio">{collage.map(([x,y],i)=><div key={i} style={{left:x/724*100+'%',top:y/311*100+'%'}}><Visual src={'vision-image-'+(i+1)} alt={['Affiche Amoual Invest','Campagne Decibell','Affiche de gestion immobilière','Identité digitale sur smartphone','Identité graphique sur textile','Supports de communication sur fond bleu','Packaging PB Cosmetics','Campagne cosmétique','Interface Amoual sur tablette','Étiquette de marque SoleSpace'][i]}/></div>)}</div><Copy columns={vision}/></section>
 <section id="pour-qui" aria-labelledby="pour-qui-title"><Title index={2}/><Visual className="about-wide" src="target-audience-image" alt="Créateur au milieu de ses objets et de ses recherches"/><div className="about-audience">{[['Vous êtes...','En lancement.','En repositionnement.','En croissance.','À un tournant'],['Vous avez déjà...','Une vision.','Une expertise.','Des objectifs de croissance','Besoin d’une marque alignée']].map((group,i)=><div key={group[0]}><h3>{group[0]}</h3><ul>{group.slice(1).map((item,j)=><li key={item} className={j===highlights[i]?'highlight':''}>{item}</li>)}</ul></div>)}<p>Nous accompagnons des entreprises de tous secteurs. Notre méthode consiste à comprendre leurs ambitions, leurs objectifs et leurs enjeux afin d’aligner la perception de leur marque avec la réalité de leur projet.</p></div></section>
 <section id="engagements" aria-labelledby="engagements-title"><Title index={3}/><div className="about-commitment-images"><Visual src="commitment-image-left" alt="Deux créatifs devant un mur de recherches graphiques"/><Visual src="commitment-image-right" alt="Sélection de pistes graphiques et éditoriales à une table de travail"/></div><div className="about-statements"><p>Nous voulons <mark>comprendre</mark> avant de <mark>concevoir</mark></p><p>Nous croyons à <mark>la cohérence</mark> et fuyons <mark>la tendance.</mark></p><p>Nous construisons des <mark>systèmes</mark> pas seulement <mark>des visuels</mark></p><p>Nous <mark>co-construisons</mark> chaque décision</p><p>Nous privilégions <mark>la qualité</mark> à <mark>la quantité</mark></p><p>Nous créons <mark>de l’autonomie</mark> pour tous <mark>nos clients</mark></p></div></section>
 <section id="expertises" aria-labelledby="expertises-title"><Title index={4}/><div className="about-service-list">{services.map(service=><a className="about-service" key={service.id} href={service.published?'/services/'+service.id:'/services#'+service.id}><ServicePhoto photo={service.cover} className="about-visual"/><div><h3><span className="hover-underline">{service.title}</span><span aria-hidden="true">↗</span></h3><p>{service.description}</p><ul>{service.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></div></a>)}</div></section>
 </div></div><SiteCTA/></main><SiteFooter/></div>;
}
