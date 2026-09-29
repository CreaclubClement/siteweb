// Source: Figma 36:3014; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgIcon = `${assetPathPrefix}/e7cb9.svg`;
const imgRectangle77 = `${assetPathPrefix}/1ff9a.png`;
const imgRectangle6 = `${assetPathPrefix}/0cf98.png`;
const imgIcon1 = `${assetPathPrefix}/21677.svg`;

type SelectFormProps = {
  className?: string;
  property1?: "Default";
};

function SelectForm({ className, property1 = "Default" }: SelectFormProps) {
  return (
    <div className={className || "block relative size-[15px]"} data-node-id="36:3478">
      <div className="absolute bg-[var(--blanc,white)] border-[0.75px] border-[var(--gris-clair,#ededed)] border-solid inset-0" data-node-id="36:3477" />
    </div>
  );
}

type DropdownsForm2Props = {
  className?: string;
  property1?: "Dropdown | Regular";
};

function DropdownsForm2({ className, property1 = "Dropdown | Regular" }: DropdownsForm2Props) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] items-start relative w-full"} data-node-id="36:3350">
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] w-full" data-node-id="36:3351">
        De quoi souhaitez-vous parler ?
      </p>
      <div className="bg-[var(--gris-clair,#ededed)] content-stretch cursor-pointer flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3352" data-name="Input field">
        <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3353" data-name="Text">
          <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--gris,#5e5e5e)] text-left" data-node-id="36:3354">
            Choisir un budget
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="36:3355" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

type DropdownsFormProps = {
  className?: string;
  property1?: "Dropdown | Regular";
};

function DropdownsForm({ className, property1 = "Dropdown | Regular" }: DropdownsFormProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] items-start relative w-full"} data-node-id="36:3243">
      <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] w-full" data-node-id="36:3244">
        De quoi souhaitez-vous parler ?
      </p>
      <div className="bg-[var(--gris-clair,#ededed)] content-stretch cursor-pointer flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3245" data-name="Input field">
        <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3246" data-name="Text">
          <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--gris,#5e5e5e)] text-left" data-node-id="36:3247">
            Choisir un service
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="36:3248" data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

type BoutonRdvProps = {
  className?: string;
  property1?: "Default";
};

function BoutonRdv({ className, property1 = "Default" }: BoutonRdvProps) {
  return (
    <div className={className || "bg-[var(--accent,#d9ff8e)] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative"} data-node-id="36:2974">
      <div className="relative shrink-0 size-[18px]" data-node-id="36:3745">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle77} />
      </div>
      <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal" data-node-id="36:2975">
        Réserver un appel
      </p>
    </div>
  );
}

type FormulaireDeContactProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

export default function FormulaireDeContact({ className, property1 = "Default" }: FormulaireDeContactProps) {
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  return (
    <div className={className || `content-stretch flex gap-[var(--l,24px)] items-start relative ${isVariant3 ? "w-full" : "w-full"}`} data-figma-id={isVariant2 ? "node-36_3015" : isVariant3 ? "node-136_2327" : "node-36_3013"}>
      <div className={`content-stretch flex gap-[24px] shrink-0 ${isVariant2 ? "items-center sticky top-0" : isVariant3 ? "flex-col items-start justify-center relative w-full" : "items-center relative self-stretch"}`} data-figma-id={isVariant2 ? "node-36_3408" : isVariant3 ? "node-136_2339" : "node-2009_4407"}>
        <div className={`relative shrink-0 ${isVariant3 ? "h-[202px] w-full" : "h-[394px] w-full"}`} data-figma-id={isVariant2 ? "node-36_3016" : isVariant3 ? "node-136_2328" : "node-36_3002"}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
        </div>
        <div className={`content-stretch flex flex-col items-start relative shrink-0 ${isVariant2 ? "h-[394px] justify-between" : isVariant3 ? "gap-[64px] w-full" : "h-full justify-between"}`} data-figma-id={isVariant2 ? "node-36_3017" : isVariant3 ? "node-136_2329" : "node-36_3003"}>
          <div className="[word-break:break-word] content-stretch flex flex-col font-sans font-normal gap-[24px] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-36_3018" : isVariant3 ? "node-136_2330" : "node-36_3004"}>
            <p className="leading-[1.25] relative shrink-0 text-[24px] text-[color:var(--noir,#252525)] w-full" data-figma-id={isVariant2 ? "node-36_3019" : isVariant3 ? "node-136_2331" : "node-36_3005"}>
              Chaque projet commence par une conversation.
            </p>
            <p className="leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--gris,#5e5e5e)] w-full" data-figma-id={isVariant2 ? "node-36_3020" : isVariant3 ? "node-136_2332" : "node-36_3006"}>
              Chaque entreprise est différente. Le premier échange nous permet de comprendre votre contexte, vos objectifs et de voir si nous sommes les bons partenaires pour vous accompagner.
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--m,16px)] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-36_3021" : isVariant3 ? "node-136_2333" : "node-36_3007"}>
            <BoutonRdv className="bg-[var(--accent,#d9ff8e)] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative shrink-0" />
            {["Default", "Variant3"].includes(property1) && (
              <div className="bg-[var(--gris-clair,#ededed)] content-stretch cursor-pointer flex items-center justify-center p-[8px] relative shrink-0" data-figma-id={isVariant3 ? "node-136_2335" : "node-36_3009"} data-name="Bouton secondary">
                <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--noir,#252525)] text-center whitespace-normal" data-figma-id={isVariant3 ? "node-I136_2335-21_1259" : "node-I36_3009-21_1259"}>
                  Nous écrire
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {isVariant2 && (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--l,24px)] items-start justify-center min-w-px relative" data-node-id="36:3092">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-node-id="36:3058" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#666] text-[12px] w-full" data-node-id="I36:3058;1:34">
              Votre nom
            </p>
            <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="I36:3058;1:35" data-name="Input field">
              <div className="content-stretch flex items-center justify-between relative min-w-0 w-full" data-node-id="I36:3058;1:36" data-name="Text">
                <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I36:3058;1:37">
                  Enter username
                </p>
                <div className="relative shrink-0 size-[24px]" data-node-id="I36:3058;1:38" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-node-id="36:3082" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#666] text-[12px] w-full" data-node-id="I36:3082;1:34">
              Votre entreprise
            </p>
            <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="I36:3082;1:35" data-name="Input field">
              <div className="content-stretch flex items-center justify-between relative min-w-0 w-full" data-node-id="I36:3082;1:36" data-name="Text">
                <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I36:3082;1:37">
                  Nom de votre entreprise
                </p>
                <div className="relative shrink-0 size-[24px]" data-node-id="I36:3082;1:38" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-node-id="36:3093" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#666] text-[12px] w-full" data-node-id="I36:3093;1:34">
              E-mail
            </p>
            <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="I36:3093;1:35" data-name="Input field">
              <div className="content-stretch flex items-center justify-between relative min-w-0 w-full" data-node-id="I36:3093;1:36" data-name="Text">
                <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="I36:3093;1:37">
                  Contact@....com
                </p>
                <div className="relative shrink-0 size-[24px]" data-node-id="I36:3093;1:38" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
          </div>
          <DropdownsForm className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" />
          <div className="content-stretch flex flex-col gap-[var(--m,16px)] items-start relative min-w-0 w-full" data-node-id="36:3164" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] min-w-full relative shrink-0 text-[#666] text-[12px] w-[min-content]" data-node-id="36:3165">
              À quel moment se trouve votre entreprise ?
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="36:3230">
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3185" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3189">
                  Lancement
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3179" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3183">
                  Rebranding
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3173" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3177">
                  Croissance
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3191" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3195">
                  Autres
                </p>
              </div>
            </div>
          </div>
          <DropdownsForm2 className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" />
          <div className="content-stretch flex flex-col gap-[var(--m,16px)] items-start relative min-w-0 w-full" data-node-id="36:3410" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] min-w-full relative shrink-0 text-[#666] text-[12px] w-[min-content]" data-node-id="36:3411">
              Quand voulez traiter le sujet ?
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="36:3413">
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3414" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3416">
                  Dès que possible
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3417" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3419">
                  Dans 1 mois
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3420" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3422">
                  Dans 3 mois
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--s,8px)] items-center relative min-w-0 w-full" data-node-id="36:3423" data-name="Radio button">
                <SelectForm className="block cursor-pointer relative shrink-0 size-[15px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[#666] text-[14px]" data-node-id="36:3425">
                  Plus tard
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-node-id="36:3460" data-name="Username">
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#666] text-[12px] w-full" data-node-id="36:3461">
              Message supplémentaire
            </p>
            <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col h-[175px] items-start px-[var(--s,8px)] py-[8px] relative min-w-0 w-full" data-node-id="36:3462" data-name="Input field">
              <div className="content-stretch flex items-center justify-between relative min-w-0 w-full" data-node-id="36:3463" data-name="Text">
                <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[#666] text-[14px] w-full" data-node-id="36:3464">
                  Donnez-nous toutes les informations dont nous pourrions avoir besoin....
                </p>
                <div className="relative shrink-0 size-[24px]" data-node-id="36:3465" data-name="icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--noir,#252525)] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-node-id="36:3528" data-name="Bouton secondary">
            <p className="[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--blanc,white)] text-center whitespace-normal" data-node-id="I36:3528;21:1259">
              Commencer la discussion
            </p>
          </div>
        </div>
      )}
    </div>
  );
}