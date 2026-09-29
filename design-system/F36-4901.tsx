// Source: Figma 36:4901; fluid layout adaptation.
type FiltreBuissnessProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

function FiltreBuissness({ className, property1 = "Sélectionner" }: FiltreBuissnessProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4977" : "node-36_4971"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4978" : "node-36_4972"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4979" : "node-36_4973"}>
          Business
        </p>
      </div>
    </div>
  );
}

type FiltreSystemeGraphiqueProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

function FiltreSystemeGraphique({ className, property1 = "Sélectionner" }: FiltreSystemeGraphiqueProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4957" : "node-36_4951"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4958" : "node-36_4952"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4959" : "node-36_4953"}>
          Système graphique
        </p>
      </div>
    </div>
  );
}

type FiltreValeurPercuProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

function FiltreValeurPercu({ className, property1 = "Sélectionner" }: FiltreValeurPercuProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4893" : "node-36_4887"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4894" : "node-36_4888"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4895" : "node-36_4889"}>
          Valeur perçue
        </p>
      </div>
    </div>
  );
}

type FiltreRebrandingProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

function FiltreRebranding({ className, property1 = "Sélectionner" }: FiltreRebrandingProps) {
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

type FiltrePositionnementProps = {
  className?: string;
  property1?: "Sélectionner" | "Non sélectioner";
};

function FiltrePositionnement({ className, property1 = "Sélectionner" }: FiltrePositionnementProps) {
  const isNonSelectioner = property1 === "Non sélectioner";
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-figma-id={isNonSelectioner ? "node-36_4860" : "node-36_4858"}>
      <div className={`content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0 ${isNonSelectioner ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)] gap-[var(--s,8px)]"}`} data-figma-id={isNonSelectioner ? "node-36_4861" : "node-36_4848"}>
        <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] whitespace-normal ${isNonSelectioner ? "text-black" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isNonSelectioner ? "node-36_4862" : "node-36_4849"}>
          Positionnement
        </p>
      </div>
    </div>
  );
}

type FiltreArticleProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4" | "Variant5" | "Variant6";
};

export default function FiltreArticle({ className, property1 = "Default" }: FiltreArticleProps) {
  const isDefault = property1 === "Default";
  const isVariant2OrVariant3OrVariant4OrVariant5OrVariant6 = ["Variant2", "Variant3", "Variant4", "Variant5", "Variant6"].includes(property1);
  const isVariant3 = property1 === "Variant3";
  const isVariant3OrVariant4OrVariant5OrVariant6 = ["Variant3", "Variant4", "Variant5", "Variant6"].includes(property1);
  const isVariant4 = property1 === "Variant4";
  const isVariant5 = property1 === "Variant5";
  const isVariant6 = property1 === "Variant6";
  return (
    <div className={className || "content-stretch flex gap-[10px] items-start overflow-clip py-[var(--m,16px)] relative"} data-figma-id={isVariant6 ? "node-36_5223" : isVariant5 ? "node-36_5204" : isVariant4 ? "node-36_5185" : isVariant3 ? "node-36_5166" : property1 === "Variant2" ? "node-36_5147" : "node-36_4900"}>
      {isVariant2OrVariant3OrVariant4OrVariant5OrVariant6 && (
        <>
          <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-figma-id={isVariant6 ? "node-36_5224" : isVariant5 ? "node-36_5205" : isVariant4 ? "node-36_5186" : isVariant3 ? "node-36_5167" : "node-36_5148"}>
            <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0" data-figma-id={isVariant6 ? "node-I36_5224-36_4802" : isVariant5 ? "node-I36_5205-36_4802" : isVariant4 ? "node-I36_5186-36_4802" : isVariant3 ? "node-I36_5167-36_4802" : "node-I36_5148-36_4802"}>
              <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-black text-left whitespace-normal" data-figma-id={isVariant6 ? "node-I36_5224-36_4803" : isVariant5 ? "node-I36_5205-36_4803" : isVariant4 ? "node-I36_5186-36_4803" : isVariant3 ? "node-I36_5167-36_4803" : "node-I36_5148-36_4803"}>
                Tous les articles
              </p>
            </div>
          </div>
          <FiltrePositionnement className={`content-stretch flex flex-col items-start relative shrink-0 ${isVariant3OrVariant4OrVariant5OrVariant6 ? "cursor-pointer" : ""}`} property1={isVariant3OrVariant4OrVariant5OrVariant6 ? "Non sélectioner" : undefined} />
          <FiltreRebranding className={`content-stretch flex flex-col items-start relative shrink-0 ${["Variant3", "Variant4"].includes(property1) ? "" : "cursor-pointer"}`} property1={["Variant2", "Variant4", "Variant5", "Variant6"].includes(property1) ? "Non sélectioner" : undefined} />
          <FiltreValeurPercu className={`content-stretch flex flex-col items-start relative shrink-0 ${isVariant4 ? "" : "cursor-pointer"}`} property1={["Variant2", "Variant3", "Variant5", "Variant6"].includes(property1) ? "Non sélectioner" : undefined} />
          <FiltreSystemeGraphique className={`content-stretch flex flex-col items-start relative shrink-0 ${isVariant5 ? "" : "cursor-pointer"}`} property1={["Variant2", "Variant3", "Variant4", "Variant6"].includes(property1) ? "Non sélectioner" : undefined} />
          <FiltreBuissness className={`content-stretch flex flex-col items-start relative shrink-0 ${isVariant6 ? "" : "cursor-pointer"}`} property1={["Variant2", "Variant3", "Variant4", "Variant5"].includes(property1) ? "Non sélectioner" : undefined} />
        </>
      )}
      {isDefault && (
        <>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="36:4822">
            <div className="bg-[var(--noir,#252525)] content-stretch flex items-center px-[var(--s,8px)] py-[var(--xs,4px)] relative shrink-0" data-node-id="I36:4822;36:4813">
              <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--blanc,white)] whitespace-normal" data-node-id="I36:4822;36:4814">
                Tous les articles
              </p>
            </div>
          </div>
          <FiltrePositionnement className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" property1="Non sélectioner" />
          <FiltreRebranding className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" property1="Non sélectioner" />
          <FiltreValeurPercu className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" property1="Non sélectioner" />
          <FiltreSystemeGraphique className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" property1="Non sélectioner" />
          <FiltreBuissness className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" property1="Non sélectioner" />
        </>
      )}
    </div>
  );
}