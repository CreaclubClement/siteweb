import type {Metadata} from 'next';
import {Contact} from '@/components/contact/Contact';
import '../home.css';
import './contact.css';
export const metadata:Metadata={title:'Contact — Étape Zero',description:'Parlons de votre projet de branding, de rebranding ou de site web. Contactez le studio Étape Zero.'};
export default function Page(){return <Contact/>}
