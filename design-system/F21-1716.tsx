// Source: Figma 21:1716; fluid layout adaptation.
type HoverLinkEffectProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function HoverLinkEffect({ className, property1 = "Default" }: HoverLinkEffectProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative"} data-figma-id={isVariant2 ? "node-21_1721" : "node-21_1717"}>
      <div className="bg-[var(--noir,#252525)] h-px relative shrink-0 w-0" data-figma-id={isVariant2 ? "node-21_1722" : "node-21_1718"} />
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1723" : "node-21_1719"}>
        Le journal
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1724" : "node-21_1720"} />
    </div>
  );
}