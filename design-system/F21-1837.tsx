// Source: Figma 21:1837; fluid layout adaptation.
type CtaContactHeaderProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CtaContactHeader({ className, property1 = "Default" }: CtaContactHeaderProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "bg-[var(--accent,#d9ff8e)] content-stretch flex gap-[var(--xs,4px)] h-[68px] items-end p-[var(--s,8px)] relative rounded-bl-[var(--s,8px)] max-w-full w-[199px]"} data-figma-id={isVariant2 ? "node-21_1850" : "node-21_1836"}>
      {property1 === "Default" && (
        <p className="[word-break:break-word] font-sans font-normal leading-[1.2] relative shrink-0 text-[32px] text-[color:var(--noir,#252525)] text-right tracking-[-0.96px] whitespace-normal" data-node-id="21:1835">
          Contact
        </p>
      )}
      <div className={`absolute bg-[var(--noir,#252525)] h-[68px] left-0 rounded-bl-[var(--s,8px)] top-0 ${isVariant2 ? "max-w-full w-[199px]" : "w-0"}`} data-figma-id={isVariant2 ? "node-21_1852" : "node-21_1847"} />
      {isVariant2 && (
        <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[1.2] left-[119px] text-[32px] text-[color:var(--blanc,white)] text-right top-[22px] tracking-[-0.96px] whitespace-normal" data-node-id="21:1851">
          Contact
        </p>
      )}
    </div>
  );
}