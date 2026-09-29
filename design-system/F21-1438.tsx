// Source: Figma 21:1438; fluid layout adaptation.
type Frame420Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame420({ className, property1 = "Default" }: Frame420Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative max-w-full w-[117px]"} data-figma-id={isVariant2 ? "node-21_1454" : "node-21_1437"}>
      <p className={`[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] ${isVariant2 ? "w-full" : "min-w-full w-[min-content]"}`} data-figma-id={isVariant2 ? "node-21_1455" : "node-21_1424"}>
        Expérience Digital
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1456" : "node-21_1425"} />
    </div>
  );
}