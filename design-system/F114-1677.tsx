// Source: Figma 114:1677; fluid layout adaptation.
type Frame427322442Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame427322442({ className, property1 = "Default" }: Frame427322442Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `border-[var(--gris-clair,#ededed)] border-b border-solid content-stretch flex flex-col gap-[var(--m,16px)] items-center justify-center relative ${isVariant2 ? "p-[var(--s,8px)]" : '[word-break:break-word] font-sans font-normal leading-[1.4] pb-[var(--m,16px)] pt-[var(--s,8px)] px-[var(--s,8px)]'}`} data-figma-id={isVariant2 ? "node-114_1681" : "node-114_1678"}>
      <p className={`relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal ${isVariant2 ? '[word-break:break-word] font-sans font-normal leading-[1.4]' : ""}`} data-figma-id={isVariant2 ? "node-114_1682" : "node-114_1679"}>
        Combien de temps dure un accompagnement ?
      </p>
      {property1 === "Default" && <p className="min-w-full relative shrink-0 text-[14px] text-[color:var(--gris,#5e5e5e)] text-left w-[min-content]" data-node-id="114:1680">{`Chaque projet est différent, mais une mission de stratégie de marque s'étale généralement sur plusieurs semaines afin de laisser le temps à l'analyse, aux ateliers et à la formalisation des décisions.`}</p>}
    </div>
  );
}