// Source: Figma 21:1261; fluid layout adaptation.
type BoutonSecondaryProps = {
  className?: string;
  property1?: "Default" | "Hover";
};

export default function BoutonSecondary({ className, property1 = "Default" }: BoutonSecondaryProps) {
  const isHover = property1 === "Hover";
  return (
    <div className={className || `content-stretch flex items-center justify-center p-[8px] relative ${isHover ? "bg-[var(--accent,#d9ff8e)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isHover ? "node-21_1262" : "node-21_1260"}>
      <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal" data-figma-id={isHover ? "node-21_1263" : "node-21_1259"}>
        Voir nos projets
      </p>
    </div>
  );
}