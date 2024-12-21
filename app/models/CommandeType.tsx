import { PanierType } from "./PanierType";


export class CommandeType { 
    panier: Array<any> = [];
    id: string = '';
    dateDoc: string = 'yyyymmdd';
    dateFact: string = '';
    numFact: string = '';
    payed: boolean = false;
    pushsended: boolean = false;
    cdeDone: boolean = false;
    panierUserEmail: string = '';
    total: number = 0;
    remise: number = 0;
    noteCuisine: string = '';

    constructor() {
        this.panier =[]
        // Initialisation si nécessaire
    }
}


//version plus développée :

// export class CommandeType {
//     panier: Array<PanierType>;
//     id: string;
//     dateDoc: string;
//     dateFact: string;
//     numFact: string;
//     payed: boolean;
//     pushsended: boolean;
//     cdeDone: boolean;
//     panierUserEmail: string;
//     total: number;
//     remise: number;
//     noteCuisine: string;

//     constructor(
//         panier: Array<PanierType> = [],
//         id: string = '',
//         dateDoc: string = 'yyyymmdd',
//         dateFact: string = '',
//         numFact: string = '',
//         payed: boolean = false,
//         pushsended: boolean = false,
//         cdeDone: boolean = false,
//         panierUserEmail: string = '',
//         total: number = 0,
//         remise: number = 0,
//         noteCuisine: string = ''
//     ) {
//         this.panier = panier;
//         this.id = id;
//         this.dateDoc = dateDoc;
//         this.dateFact = dateFact;
//         this.numFact = numFact;
//         this.payed = payed;
//         this.pushsended = pushsended;
//         this.cdeDone = cdeDone;
//         this.panierUserEmail = panierUserEmail;
//         this.total = total;
//         this.remise = remise;
//         this.noteCuisine = noteCuisine;
//     }
// }
