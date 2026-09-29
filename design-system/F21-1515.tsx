// Source: Figma 21:1515; fluid layout adaptation.
type Frame424Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame424({ className, property1 = "Default" }: Frame424Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative max-w-full w-[53px]"} data-figma-id={isVariant2 ? "node-21_1519" : "node-21_1516"}>
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1520" : "node-21_1517"}>
        Youtube
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1521" : "node-21_1518"} />
    </div>
  );
}