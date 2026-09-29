import type {CMSArticle} from '@/lib/cms/article-schema';
export const articleSeeds:CMSArticle[]=[
  {
    "id": "strategie-de-marque-avant-identite-visuelle",
    "title": "Pourquoi une stratégie de marque est essentielle avant une identité visuelle ?",
    "category": "Rebranding",
    "date": "2025-08-24",
    "excerpt": "Créer un logo, choisir des couleurs ou définir une typographie sont souvent les premières étapes auxquelles pensent les entreprises lorsqu'elles souhaitent moderniser leur image. Pourtant, une identité visuelle, aussi réussie soit-elle, ne peut résoudre un problème de positionnement.",
    "intro": "Créer un logo, choisir des couleurs ou définir une typographie sont souvent les premières étapes auxquelles pensent les entreprises lorsqu'elles souhaitent moderniser leur image. Pourtant, une identité visuelle, aussi réussie soit-elle, ne peut résoudre un problème de positionnement.",
    "readingMinutes": 7,
    "cover": {
      "src": "",
      "alt": "",
      "fit": "cover",
      "position": "center"
    },
    "hero": {
      "src": "",
      "alt": "",
      "fit": "cover",
      "position": "center"
    },
    "cardFormat": "landscape",
    "sections": [
      {
        "title": "Pourquoi une identité visuelle ne suffit pas",
        "subtitle": "",
        "text": "Lorsqu'une entreprise décide de faire évoluer son image, le premier réflexe est souvent de penser au logo, aux couleurs ou au futur site internet. Pourtant, ces éléments ne sont que la partie visible d'un travail beaucoup plus profond. Une identité visuelle ne peut pas résoudre un manque de positionnement, clarifier un discours ou donner une direction à une entreprise. Elle traduit une vision, mais elle ne la crée pas.\n\nC'est précisément pour cette raison que de nombreux rebrandings échouent. L'identité change, mais la perception reste la même. Les supports sont plus modernes, le logo est plus actuel, mais l'entreprise continue à rencontrer les mêmes difficultés parce que les véritables questions n'ont jamais été posées.",
        "bullets": [],
        "photos": [
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          },
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          },
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          },
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          }
        ],
        "quote": ""
      },
      {
        "title": "L’identité à revoir",
        "subtitle": "Définir avant de dessiner",
        "text": "Avant de concevoir une identité visuelle, il est essentiel de comprendre ce que la marque souhaite réellement représenter. Pourquoi existe-t-elle ? À qui s'adresse-t-elle ? Quelle perception souhaite-t-elle construire ? En quoi est-elle différente de ses concurrents ? Autant de questions qui précèdent naturellement toute réflexion graphique.\n\nDéfinir avant de dessiner\n\nCette phase constitue ce que l'on appelle la stratégie de marque. Elle ne consiste pas à imaginer des slogans ou à remplir un document théorique. Elle permet de définir un cadre de décision. Une fois cette direction clarifiée, chaque choix devient plus cohérent, qu'il s'agisse d'un logo, d'une typographie, d'un site internet ou d'une campagne de communication.\n\nLe design cesse alors d'être une succession de préférences esthétiques pour devenir la traduction d'une intention",
        "bullets": [],
        "photos": [
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          }
        ],
        "quote": ""
      },
      {
        "title": "Pourquoi une identité visuelle ne suffit pas",
        "subtitle": "",
        "text": "Réduire une identité visuelle à un logo est probablement l'une des idées reçues les plus répandues dans le branding. Un logo n'est qu'un élément parmi beaucoup d'autres. Ce qui crée réellement la cohérence d'une marque, c'est son système graphique.\n\nCe système définit la manière dont la typographie est utilisée, les principes de composition, les espaces, les couleurs, les images ou encore les règles qui permettent à l'ensemble des supports de parler d'une seule voix.\n\nC'est cette cohérence qui permet à une marque d'évoluer dans le temps sans perdre ce qui la rend reconnaissable. Une entreprise ne change pas de personnalité à chaque nouveau support. Elle applique simplement les mêmes principes dans des contextes différents.",
        "bullets": [],
        "photos": [],
        "quote": "“Une identité visuelle traduit une stratégie. Elle ne la remplace jamais.”"
      },
      {
        "title": "Les bénéfices d'une marque construite sur des bases solides",
        "subtitle": "",
        "text": "Une stratégie de marque n'apporte pas uniquement de la cohérence visuelle. Elle simplifie les décisions, aligne les équipes et donne une direction commune à tous les points de contact de l'entreprise.\n\nLes futurs supports sont plus rapides à produire, les messages deviennent plus clairs et les investissements réalisés dans le design ou la communication gagnent en efficacité parce qu'ils répondent tous à un même objectif.\n\nÀ long terme, cette cohérence contribue à renforcer la valeur perçue de l'entreprise. Les clients comprennent plus rapidement ce qu'elle représente, retiennent plus facilement son image et développent une confiance qui dépasse largement la qualité d'un simple logo.",
        "bullets": [],
        "photos": [
          {
            "src": "",
            "alt": "",
            "fit": "cover",
            "position": "center"
          }
        ],
        "quote": ""
      },
      {
        "title": "Conclusion",
        "subtitle": "",
        "text": "Une identité visuelle est souvent ce que l'on remarque en premier. Pourtant, elle est rarement le point de départ d'une marque forte. Avant de dessiner, il faut comprendre. Avant de communiquer, il faut définir une direction.",
        "bullets": [],
        "photos": [],
        "quote": ""
      }
    ],
    "closing": "Une marque forte ne naît jamais d'un logo réussi. Elle naît d'une direction claire. Le design ne fait ensuite que rendre cette direction visible.",
    "author": "Clément LE BAILLIF",
    "authorRole": "Fondateur du Studio",
    "authorPhoto": {
      "src": "",
      "alt": "",
      "fit": "cover",
      "position": "center"
    },
    "published": true,
    "listed": true
  }
];

// Shared article media: the hub and detail read the same CMS record.
const articlePhoto=(file:string,alt:string)=>({src:`/assets/articles/strategie-de-marque/${file}.webp`,alt,fit:'cover' as const,position:'center' as const});
const strategyArticle=articleSeeds[0];
strategyArticle.hero=articlePhoto('hero','Identité graphique embossée sur un support gris');
strategyArticle.cover={...strategyArticle.hero};
strategyArticle.sections[0].photos=[
 articlePhoto('detail-gris','Détail d’un support de marque gris'),
 articlePhoto('detail-brun','Détail d’un support de marque brun'),
 articlePhoto('papeterie','Déclinaison graphique sur une papeterie colorée'),
 articlePhoto('cooked','Affiche de la marque Cooked & Co'),
];
strategyArticle.sections[1].photos=[articlePhoto('identite','Identité graphique sur une série de supports gris')];
strategyArticle.sections[3].photos=[{...articlePhoto('resultats','Animation de supports de communication de marque'),src:'/assets/articles/strategie-de-marque/resultats.mp4',poster:'/assets/articles/strategie-de-marque/resultats-poster.webp'}];

strategyArticle.authorPhoto={src:'/assets/articles/clement-le-baillif.webp',alt:'Clément Le Baillif, fondateur du Studio Étape Zero',fit:'cover',position:'center'};
