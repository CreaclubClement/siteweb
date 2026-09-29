// Source: Figma 21:1529; fluid layout adaptation.
type Frame425Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame425({ className, property1 = "Default" }: Frame425Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative max-w-full w-[55px]"} data-figma-id={isVariant2 ? "node-21_1533" : "node-21_1530"}>
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1534" : "node-21_1531"}>
        LinkedIn
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1535" : "node-21_1532"} />
    </div>
  );
}