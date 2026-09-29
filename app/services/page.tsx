import type {Metadata} from 'next';
import {SiteHeader,SiteCTA,SiteFooter} from '@/components/home/Home';
import {methodSteps} from '@/lib/content/services';
import {listServiceRecords} from '@/lib/cms/services';
import {ServiceCard} from '@/components/services/ServiceCard';
import './detail.css';
import '../home.css';
import './services.css';

export const metadata:Metadata={title:'Services — Étape Zero',description:'Stratégie de marque, identité visuelle et expérience digitale : les expertises du studio Étape Zero pour faire évoluer votre marque.'};

function MethodImage({file,alt}:{file:string;alt:string}){return <div className="service-image"><img src={file} alt={alt} loading="lazy" decoding="async"/></div>}

export const dynamic='force-dynamic';
export default async function Page(){const services=(await listServiceRecords()).map(r=>r.service).filter(s=>s.listed);return <div className="home services-page"><a className="home-skip" href="#contenu">Aller au contenu</a><SiteHeader/><main id="contenu">
  <section className="services-hero home-gutter" aria-labelledby="services-intro"><div className="services-mark" aria-hidden="true" data-pending-asset="/assets/figma/0db6e.svg"/><h1 id="services-intro">Chaque projet évolue différemment. Notre approche reste la même : comprendre avant de créer.</h1></section>
  <section className="services-list home-gutter" aria-label="Nos services">{services.map(service=><ServiceCard key={service.id} service={service}/>)}</section>
  <section className="services-method home-gutter" aria-labelledby="method-title"><h2 id="method-title">Une méthode adaptée à chaque projet.</h2><ol className="services-method-grid">{methodSteps.map((step,i)=><li key={step.title}><MethodImage file={step.image} alt={step.title}/><div className="method-copy"><h3>{String(i+1).padStart(2,'0')} - {step.title}</h3><div><p className="method-tags">{step.tags}</p><p className="method-description">{step.description}</p></div></div></li>)}</ol></section>
  <SiteCTA/></main><SiteFooter/></div>}
