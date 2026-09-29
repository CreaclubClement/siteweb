// Source: Figma 149:2367; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle167 = `${assetPathPrefix}/0cc37.png`;

type VideoServiceMobileProps = {
  className?: string;
  property1?: "Open" | "Close";
};

export default function VideoServiceMobile({ className, property1 = "Open" }: VideoServiceMobileProps) {
  const isClose = property1 === "Close";
  return (
    <div className={className || "content-stretch flex flex-col gap-[var(--l,24px)] items-center relative"} data-figma-id={isClose ? "node-149_2392" : "node-149_2376"}>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-figma-id={isClose ? "node-149_2393" : "node-149_2377"}>
        <div className="content-stretch flex flex-col gap-[var(--m,16px)] items-start relative min-w-0 w-full" data-figma-id={isClose ? "node-149_2394" : "node-149_2378"}>
          <div className="h-[551px] relative min-w-0 w-full" data-figma-id={isClose ? "node-149_2395" : "node-149_2390"}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle167} />
          </div>
          <div className="content-stretch flex items-start justify-between relative min-w-0 w-full" data-figma-id={isClose ? "node-149_2396" : "node-149_2380"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.25] relative shrink-0 text-[24px] text-black w-full" data-figma-id={isClose ? "node-149_2397" : "node-149_2381"}>
              Pourquoi les entreprises investissent dans une stratégie de marque ?
            </p>
            <div className="content-stretch cursor-pointer flex gap-[var(--2xl,64px)] items-start overflow-clip relative shrink-0" data-figma-id={isClose ? "node-149_2398" : "node-149_2382"}>
              <div className={`content-stretch flex items-center justify-center p-[8px] relative shrink-0 ${isClose ? "bg-[var(--gris-clair,#ededed)]" : "bg-[var(--noir,#252525)]"}`} data-figma-id={isClose ? "node-149_2399" : "node-149_2383"} data-name="Frame 14/Variant2">
                <p className={`[word-break:break-word] font-sans font-normal leading-[1.4] relative shrink-0 text-[16px] text-center whitespace-normal ${isClose ? "text-[color:var(--noir,#252525)]" : "text-[color:var(--blanc,white)]"}`} data-figma-id={isClose ? "node-I149_2399-21_1858" : "node-I149_2383-21_1858"}>
                  Vous préférez lire ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {property1 === "Open" && (
        <div className="[word-break:break-word] content-stretch flex font-sans font-normal gap-[24px] items-start leading-[0] relative shrink-0 text-[16px] text-[color:var(--gris,#5e5e5e)] w-full whitespace-pre-wrap" data-node-id="149:2384">
          <div className="flex-[1_0_0] min-w-px relative" data-node-id="149:2385">
            <p className="leading-[1.4] mb-0">
              {`La stratégie de marque est souvent réduite à un exercice de positionnement ou à quelques ateliers de réflexion. Pourtant, son rôle est bien plus large. Elle permet de définir une direction commune, d'aligner les décisions de l'entreprise et de construire une perception cohérente auprès de ses différents publics.`}
              <br aria-hidden />
              <br aria-hidden />
            </p>
            <p className="leading-[1.4] mb-0">
              {`Avant de concevoir une identité visuelle ou un site internet, il est essentiel de comprendre ce qui rend une entreprise unique. Quels sont ses objectifs à moyen et long terme ? À qui s'adresse-t-elle réellement ? Quelle perception souhaite-t-elle créer ? Répondre à ces questions permet d'éviter des décisions guidées uniquement par les tendances ou les préférences personnelles.`}
              <br aria-hidden />
              <br aria-hidden />
            </p>
            <p className="leading-[1.4]">{`Une stratégie de marque solide agit comme un cadre. Elle facilite les choix créatifs, mais également les décisions marketing, commerciales et produit. Elle offre une vision suffisamment claire pour que chaque prise de parole, chaque support de communication et chaque évolution de l'entreprise s'inscrivent dans une même logique.`}</p>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-node-id="149:2386">
            <p className="leading-[1.4] mb-0">
              {`Au cours de cette étude de cas, nous revenons sur les différentes étapes du projet. Depuis les premières discussions avec le client jusqu'à la définition du positionnement, nous expliquons comment les enjeux ont été identifiés, quelles pistes ont été explorées et pourquoi certaines décisions ont été retenues plutôt que d'autres.`}
              <br aria-hidden />
              <br aria-hidden />
            </p>
            <p className="leading-[1.4] mb-0">{`Nous abordons également la manière dont la plateforme de marque a servi de fondation au travail de création. Les valeurs, la proposition de valeur, le territoire d'expression et les messages clés n'ont pas été définis comme des livrables indépendants, mais comme un système destiné à guider l'ensemble des futures décisions de la marque.`}</p>
            <p className="leading-[1.4] mb-0">{`Cette approche permet de créer des identités plus cohérentes, plus durables et surtout plus pertinentes. Une marque ne gagne pas en crédibilité parce qu'elle adopte les derniers codes graphiques du moment. Elle gagne en crédibilité lorsque chacun de ses points de contact raconte la même histoire et renforce la même perception.`}</p>
            <p className="leading-[1.4]">{`Enfin, nous partageons plusieurs enseignements tirés de cette collaboration. Certains concernent directement la stratégie, d'autres la manière dont une identité peut accompagner une phase de lancement, de repositionnement ou de croissance. L'objectif n'est pas de présenter une méthode universelle, mais de montrer comment une réflexion approfondie en amont permet de construire des solutions plus justes et plus durables.`}</p>
          </div>
        </div>
      )}
    </div>
  );
}