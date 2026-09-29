// Source: Figma 36:4811; fluid layout adaptation.
type Frame362Props = {
  className?: string;
  property1?: "Non sélectioner" | "Sélectionner";
};

export default function Frame362({ className, property1 = "Non sélectioner" }: Frame362Props) {
  const isSelectionner = property1 === "Sélectionner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isSelectionner ? "node-36_4812" : "node-36_4810"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isSelectionner ? "bg-[var(--noir,#252525)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isSelectionner ? "node-36_4813" : "node-36_4802"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isSelectionner ? "text-[color:var(--gris-clair,#ededed)]" : "text-black"}`} data-figma-id={isSelectionner ? "node-36_4814" : "node-36_4803"}>
          Filtres de recherches
        </p>
      </div>
    </div>
  );
}