'use client';
import {useEffect,useRef} from 'react';
import type {CSSProperties} from 'react';

export function ProjectVideo({src,poster,alt,style}:{src:string;poster?:string;alt:string;style?:CSSProperties}){
 const ref=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
  const video=ref.current;if(!video)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{
   video.defaultMuted=true;video.muted=true;
   video.autoplay=!reduced.matches;
   if(document.hidden||reduced.matches){video.pause();return;}
   if(video.paused)void video.play().catch(()=>{});
  };
  video.addEventListener('canplay',sync);
  document.addEventListener('visibilitychange',sync);
  reduced.addEventListener('change',sync);
  sync();
  return()=>{
   video.removeEventListener('canplay',sync);
   document.removeEventListener('visibilitychange',sync);
   reduced.removeEventListener('change',sync);
  };
 },[src]);
 return <video ref={ref} src={src} poster={poster} aria-label={alt} autoPlay muted loop playsInline controls={false} disablePictureInPicture disableRemotePlayback preload="auto" style={style}/>;
}
