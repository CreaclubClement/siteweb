// Source: Figma 21:1501; fluid layout adaptation.
type Frame423Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame423({ className, property1 = "Default" }: Frame423Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--xs,4px)] items-end relative max-w-full w-[66px]"} data-figma-id={isVariant2 ? "node-21_1505" : "node-21_1502"}>
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1506" : "node-21_1503"}>
        Instagram
      </p>
      <div className={`bg-[var(--noir,#252525)] h-px relative shrink-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1507" : "node-21_1504"} />
    </div>
  );
}