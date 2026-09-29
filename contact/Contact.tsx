"use client";
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {SiteHeader} from '@/components/home/Home';
import {FormSelect} from '@/components/design-system/Component';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {RadioGroup,RadioGroupItem} from '@/components/ui/radio-group';

export function Contact(){
 const nameRef=useRef<HTMLInputElement>(null);
 const resultRef=useRef<HTMLDivElement>(null);
 const [draft,setDraft]=useState<{url:string;body:string}|null>(null);
 const [copyStatus,setCopyStatus]=useState('');
 const [formOpen,setFormOpen]=useState(false);
 useEffect(()=>{if(formOpen){nameRef.current?.focus({preventScroll:true});nameRef.current?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});}},[formOpen]);
 function prepare(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const data=new FormData(e.currentTarget);
  const value=(key:string)=>String(data.get(key)||'Non précisé').trim();
  const body=['Bonjour Clément,','',`Nom : ${value('name')}`,`Entreprise : ${value('company')}`,`E-mail : ${value('email')}`,`Service : ${value('service')}`,`Étape de l’entreprise : ${value('stage')}`,`Budget : ${value('budget')}`,`Échéance : ${value('timing')}`,'',value('message')].join('\n');
  setDraft({body,url:'mailto:contact@etapezero.com?subject='+encodeURIComponent('Parlons de votre projet — '+value('company'))+'&body='+encodeURIComponent(body)});setCopyStatus('');
  requestAnimationFrame(()=>resultRef.current?.focus());
 }
 async function copy(){try{await navigator.clipboard.writeText(draft?.body||'');setCopyStatus('Message copié. Vous pouvez le coller dans votre e-mail.')}catch{setCopyStatus('La copie n’est pas disponible. Sélectionnez le texte du message ci-dessous.')}}
 return <div className="home contact-page"><a className="home-skip" href="#contenu">Aller au contenu</a><SiteHeader/>
 <main id="contenu" className="contact-layout home-gutter">
  <section className="contact-intro" aria-labelledby="contact-title"><div className="contact-photo" role="img" aria-label="Visuel du studio à venir" data-pending-asset="/assets/figma/0cf98.png">Visuel à venir</div><div className="contact-copy"><div><h1 id="contact-title">Chaque projet commence par une conversation.</h1><p>Chaque entreprise est différente. Le premier échange nous permet de comprendre votre contexte, vos objectifs et de voir si nous sommes les bons partenaires pour vous accompagner.</p></div><div className="contact-intro-actions"><Button asChild className="contact-book"><a href="mailto:contact@etapezero.com?subject=Demande%20de%20rendez-vous" aria-describedby="booking-note">Réserver un appel</a></Button><Button variant="secondary" className="contact-write" aria-expanded={formOpen} aria-controls="contact-form" onClick={()=>setFormOpen(true)}>Nous écrire</Button><small id="booking-note">Demande de rendez-vous par e-mail.</small></div></div></section>
  {formOpen&&<form id="contact-form" className="contact-fields" onSubmit={prepare} onChange={()=>{if(draft)setDraft(null)}} aria-label="Parlez-nous de votre projet">
   <label className="ds-field"><span>Votre nom <span className="sr-only">(obligatoire)</span></span><Input ref={nameRef} name="name" autoComplete="name" required maxLength={120} placeholder="Votre nom"/></label>
   <label className="ds-field"><span>Votre entreprise</span><Input name="company" autoComplete="organization" maxLength={160} placeholder="Nom de votre entreprise"/></label>
   <label className="ds-field"><span>E-mail <span className="sr-only">(obligatoire)</span></span><Input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="contact@entreprise.com"/></label>
   <FormSelect/>
   <Choices name="stage" title="À quel moment se trouve votre entreprise ?" choices={['Lancement','Rebranding','Croissance','Autres']}/>
   <FormSelect budget/>
   <Choices name="timing" title="Quand voulez-vous traiter le sujet ?" choices={['Dès que possible','Dans 1 mois','Dans 3 mois','Plus tard']}/>
   <label className="ds-field"><span>Message supplémentaire</span><Textarea name="message" rows={7} maxLength={3000} placeholder="Donnez-nous toutes les informations dont nous pourrions avoir besoin…"/></label>
   <div className="contact-submit"><Button type="submit">Commencer la discussion</Button><p>Prépare un e-mail à envoyer depuis votre messagerie. Aucun envoi automatique.</p></div>
   {draft&&<div className="contact-result" ref={resultRef} tabIndex={-1} role="status"><h2>Votre message est prêt.</h2><p>Ouvrez votre messagerie pour vérifier le message et l’envoyer à <a href="mailto:contact@etapezero.com">contact@etapezero.com</a>.</p><Button asChild><a href={draft.url}>Ouvrir ma messagerie</a></Button><Button type="button" variant="secondary" onClick={copy}>Copier le message</Button><p>{copyStatus}</p><details><summary>Voir le message</summary><pre>{draft.body}</pre></details></div>}
  </form>}
 </main></div>
}
function Choices({name,title,choices}:{name:string;title:string;choices:string[]}){return <fieldset className="contact-choice"><legend id={name+'-label'}>{title}</legend><RadioGroup name={name} aria-labelledby={name+'-label'}>{choices.map((label,i)=><label key={label} htmlFor={name+'-'+i}><RadioGroupItem value={label} id={name+'-'+i}/><span>{label}</span></label>)}</RadioGroup></fieldset>}
