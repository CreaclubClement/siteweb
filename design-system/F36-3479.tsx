// Source: Figma 36:3479; fluid layout adaptation.
type SelectFormProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function SelectForm({ className, property1 = "Default" }: SelectFormProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative size-[15px] ${isVariant2 ? "content-stretch flex items-center justify-between px-[3.75px] py-[3px]" : "block"}`} data-figma-id={isVariant2 ? "node-36_3480" : "node-36_3478"}>
      <div className="absolute bg-[var(--blanc,white)] border-[0.75px] border-[var(--gris-clair,#ededed)] border-solid inset-0" data-figma-id={isVariant2 ? "node-36_3481" : "node-36_3477"} />
      {isVariant2 && <div className="bg-[var(--noir,#252525)] relative shrink-0 size-[7.5px]" data-node-id="36:3482" />}
    </div>
  );
}