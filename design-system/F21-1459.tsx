// Source: Figma 21:1459; fluid layout adaptation.
type Frame421Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame421({ className, property1 = "Default" }: Frame421Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative max-w-full w-[132px]"} data-figma-id={isVariant2 ? "node-21_1463" : "node-21_1460"}>
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] max-w-full w-[132px]" data-figma-id={isVariant2 ? "node-21_1464" : "node-21_1461"}>
        Stratégie de marque
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1465" : "node-21_1462"} />
    </div>
  );
}