// Source: Figma 114:1659; fluid layout adaptation.
type Frame427322440Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame427322440({ className, property1 = "Default" }: Frame427322440Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `border-[var(--gris-clair,#ededed)] border-b border-solid content-stretch flex flex-col gap-[var(--m,16px)] items-center justify-center relative ${isVariant2 ? "p-[var(--s,8px)]" : '[word-break:break-word] font-sans font-normal leading-[1.4] pb-[var(--m,16px)] pt-[var(--s,8px)] px-[var(--s,8px)]'}`} data-figma-id={isVariant2 ? "node-114_1663" : "node-114_1660"}>
      <p className={`relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal ${isVariant2 ? '[word-break:break-word] font-sans font-normal leading-[1.4]' : ""}`} data-figma-id={isVariant2 ? "node-114_1664" : "node-114_1661"}>
        Une stratégie de marque est-elle réservée aux grandes entreprises ?
      </p>
      {property1 === "Default" && <p className="min-w-full relative shrink-0 text-[14px] text-[color:var(--gris,#5e5e5e)] text-left w-[min-content]" data-node-id="114:1662">{`Non. Les PME, startups et entreprises en développement ont souvent encore plus à gagner d'une stratégie claire. Elle permet de structurer la croissance et d'assurer la cohérence des futures décisions.`}</p>}
    </div>
  );
}