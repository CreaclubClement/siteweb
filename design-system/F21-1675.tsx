// Source: Figma 21:1675; fluid layout adaptation.
type HoverLinkEffectProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function HoverLinkEffect({ className, property1 = "Default" }: HoverLinkEffectProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative"} data-figma-id={isVariant2 ? "node-21_1680" : "node-21_1676"}>
      <div className="bg-[var(--noir,#252525)] h-px relative shrink-0 w-0" data-figma-id={isVariant2 ? "node-21_1681" : "node-21_1677"} />
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1682" : "node-21_1678"}>
        Le Studio
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1683" : "node-21_1679"} />
    </div>
  );
}