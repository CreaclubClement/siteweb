// Source: Figma 36:4872; fluid layout adaptation.
type FiltreRebrandingProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

export default function FiltreRebranding({ className, property1 = "Sélectionner" }: FiltreRebrandingProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4879" : "node-36_4873"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4880" : "node-36_4874"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4881" : "node-36_4875"}>
          Rebranding
        </p>
      </div>
    </div>
  );
}