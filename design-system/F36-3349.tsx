// Source: Figma 36:3349; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgIcon = `${assetPathPrefix}/e7cb9.svg`;
const imgIcon1 = `${assetPathPrefix}/eb109.svg`;
const imgIcon2 = `${assetPathPrefix}/18ab9.svg`;

type DropdownsForm2Props = {
  className?: string;
  property1?: "Dropdown | Focus" | "Dropdown | Open" | "Dropdown | Regular";
};

export default function DropdownsForm2({ className, property1 = "Dropdown | Regular" }: DropdownsForm2Props) {
  const isDropdownFocus = property1 === "Dropdown | Focus";
  const isDropdownOpen = property1 === "Dropdown | Open";
  return (
    <div className={className || `content-stretch flex flex-col items-start relative w-full ${isDropdownOpen ? "gap-[var(--s,8px)]" : "gap-[8px]"}`} data-figma-id={isDropdownOpen ? "node-36_3366" : isDropdownFocus ? "node-36_3358" : "node-36_3350"}>
      <p className={`[word-break:break-word] font-sans font-[450] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] w-full ${["Dropdown | Focus", "Dropdown | Open"].includes(property1) ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isDropdownOpen ? "node-36_3367" : isDropdownFocus ? "node-36_3359" : "node-36_3351"}>
        De quoi souhaitez-vous parler ?
      </p>
      {property1 === "Dropdown | Regular" && (
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
      )}
      {isDropdownFocus && (
        <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3360" data-name="Input field">
          <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3361" data-name="Text">
            <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--gris,#5e5e5e)]" data-node-id="36:3362">
              Moins de 5 000 €
            </p>
            <div className="relative shrink-0 size-[24px]" data-node-id="36:3363" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      )}
      {isDropdownOpen && (
        <div className="content-stretch flex flex-col items-start relative min-w-0 w-full" data-node-id="36:3368" data-name="Dropdown options">
          <div className="bg-[var(--gris-clair,#ededed)] content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3369" data-name="Input field">
            <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3370" data-name="Text">
              <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--gris,#5e5e5e)]" data-node-id="36:3371">
                Moins de 5 000 €
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="36:3372" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
              </div>
            </div>
          </div>
          <div className="bg-[var(--accent,#d9ff8e)] border border-[var(--gris-clair,#ededed)] border-solid content-stretch cursor-pointer flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3375" data-name="Option">
            <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3376" data-name="Text">
              <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--noir,#252525)] text-left" data-node-id="36:3377">
                Moins de 5 000 €
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="36:3378" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[var(--gris-clair,#ededed)] border-solid content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3381" data-name="Option 1">
            <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3382" data-name="Text">
              <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--noir,#252525)]" data-node-id="36:3383">
                5 000 – 10 000 €
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="36:3384" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[var(--gris-clair,#ededed)] border-solid content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3387" data-name="Option 2">
            <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3388" data-name="Text">
              <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--noir,#252525)]" data-node-id="36:3389">
                10 000 – 20 000 €
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="36:3390" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[var(--gris-clair,#ededed)] border-solid content-stretch flex flex-col items-start p-[var(--s,8px)] relative min-w-0 w-full" data-node-id="36:3393" data-name="Option 3">
            <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-node-id="36:3394" data-name="Text">
              <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[1.4] min-w-px relative text-[14px] text-[color:var(--noir,#252525)]" data-node-id="36:3395">
                À définir ensemble
              </p>
              <div className="relative shrink-0 size-[24px]" data-node-id="36:3396" data-name="icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}