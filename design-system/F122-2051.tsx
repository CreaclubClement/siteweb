// Source: Figma 122:2051; fluid layout adaptation.
type DropdownServicesProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function DropdownServices({ className, property1 = "Default" }: DropdownServicesProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `border-[var(--gris-clair,#ededed)] border-b border-solid content-stretch flex flex-col gap-[var(--m,16px)] relative ${isVariant2 ? "items-center justify-center p-[var(--s,8px)]" : '[word-break:break-word] font-sans font-[450] items-start leading-[normal] pb-[var(--m,16px)] pt-[var(--s,8px)] px-[var(--s,8px)] text-[14px] w-full'}`} data-figma-id={isVariant2 ? "node-122_2055" : "node-122_2052"}>
      <div className={`content-stretch flex gap-[var(--xs,4px)] items-start relative shrink-0 whitespace-normal ${isVariant2 ? '[word-break:break-word] font-sans font-[450] leading-[normal] text-[14px]' : ""}`} data-figma-id={isVariant2 ? "node-122_2065" : "node-122_2060"}>
        <p className="relative shrink-0 text-[color:var(--noir,#252525)] text-center" data-figma-id={isVariant2 ? "node-122_2066" : "node-122_2053"}>
          Services
        </p>
        <p className="relative shrink-0 text-black text-left" data-figma-id={isVariant2 ? "node-122_2067" : "node-122_2058"}>
          {isVariant2 ? "+" : "-"}
        </p>
      </div>
      {isDefault && (
        <>
          <p className="min-w-full relative shrink-0 text-[color:var(--noir,#252525)] text-left w-[min-content]" data-node-id="122:2054">
            Stratégie de marque
          </p>
          <p className="relative shrink-0 text-[color:var(--noir,#252525)] text-left whitespace-normal" data-node-id="122:2069">
            Identité visuelle
          </p>
          <p className="relative shrink-0 text-[color:var(--noir,#252525)] text-left whitespace-normal" data-node-id="122:2071">
            Expérience Digtial
          </p>
        </>
      )}
    </div>
  );
}