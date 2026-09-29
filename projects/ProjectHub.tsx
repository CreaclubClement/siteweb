'use client';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {ProjectCard,type Project} from '@/components/design-system/Component';
import {SiteHeader,SiteCTA,SiteFooter} from '@/components/home/Home';

export function ProjectHub({projects}:{projects:Project[]}){
 const [filter,setFilter]=useState('');
 const normalize=(value:string)=>value.trim().toLocaleLowerCase('fr');
 const categories=[...new Map(['Rebranding','Lancement',...projects.map(p=>p.category).filter(Boolean)].map(c=>[normalize(c),c])).entries()];
 const visible=projects.filter(p=>!filter||normalize(p.category)===filter);
 return <div className="home project-hub"><a className="home-skip" href="#contenu">Aller au contenu</a><SiteHeader/><main id="contenu"><section className="hub-hero home-gutter" aria-labelledby="hub-intro"><div className="hub-mark" aria-hidden="true"/><h1 id="hub-intro">Chaque projet répond à une problématique différente. Découvrez comment la stratégie guide chacune de nos décisions.</h1></section><section className="hub-list home-gutter" aria-label="Nos projets"><div className="hub-filters" role="group" aria-label="Filtrer par type de projet">{[['','Tous les projets'],...categories].map(([value,label])=><Button key={value} variant="secondary" className="hub-filter" aria-pressed={filter===value} aria-controls="project-grid" onClick={()=>setFilter(value)}>{label}</Button>)}</div><p className="sr-only" role="status">{visible.length} projet{visible.length>1?'s':''} affiché{visible.length>1?'s':''}</p><div id="project-grid" className="hub-grid">{visible.map(p=><div key={p.id} className={'hub-card'+(['amoual','lucas-drifter'].includes(p.id)?' hub-card-large':'')}><ProjectCard project={p} format="listing"/></div>)}</div>{visible.length===0&&<div className="hub-empty"><p>Aucun projet dans cette catégorie pour le moment.</p>{filter&&<Button variant="secondary" onClick={()=>setFilter('')}>Voir tous les projets</Button>}</div>}</section><SiteCTA/></main><SiteFooter/></div>;
}
