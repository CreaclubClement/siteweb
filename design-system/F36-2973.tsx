// Source: Figma 36:2973; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle77 = `${assetPathPrefix}/1ff9a.png`;

type BoutonRdvProps = {
  className?: string;
  property1?: "Default" | "Hover";
};

export default function BoutonRdv({ className, property1 = "Default" }: BoutonRdvProps) {
  const isHover = property1 === "Hover";
  return (
    <div className={className || `content-stretch flex gap-[8px] items-center justify-center p-[8px] relative ${isHover ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--accent,#d9ff8e)]"}`} data-figma-id={isHover ? "node-36_3749" : "node-36_2974"}>
      <div className="relative shrink-0 size-[18px]" data-figma-id={isHover ? "node-36_3750" : "node-36_3745"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle77} />
      </div>
      <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal" data-figma-id={isHover ? "node-36_3751" : "node-36_2975"}>
        Réserver un appel
      </p>
    </div>
  );
}