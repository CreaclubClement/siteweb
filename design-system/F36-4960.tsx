// Source: Figma 36:4960; fluid layout adaptation.
type FiltreExperienceDigitaleProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

export default function FiltreExperienceDigitale({ className, property1 = "Sélectionner" }: FiltreExperienceDigitaleProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4967" : "node-36_4961"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4968" : "node-36_4962"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4969" : "node-36_4963"}>
          Expérience digitale
        </p>
      </div>
    </div>
  );
}