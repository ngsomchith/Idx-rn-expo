import { CommandeType } from "./CommandeType";
import { FixtureType } from "./FixtureType";

import {  OddType } from "./OddType";
import { PanierType } from "./PanierType";


export class UserType
{ 
  name: string='';
  email: string='';
  isAuth:boolean=false;
  firstname: string='';
  adresse: string='';
  postalCode: string='';
  ville: string='';
  fonction: string='';
  phonehand: string='';
  createAt:Date=new Date();
  codePromo:string='';
  daySetCodePromo:string='';
  // thisOdd: Array<OddType>;// = new OddType();
  // thisDayFixtures:Array<FixtureType> = new Array<FixtureType>();
  commande:CommandeType //= new CommandeType();
  // panier:PanierType= new PanierType(); 
  
}

// export function UserType()
// { 
// //   this.name='';

// // this.email='';

// // this. firstname='';

// // this.adresse='';

// // this.postalCode='';

// // this.ville='';

// // this.fonction='';

// // this.phonehand='';

// // this.thisOdd= new Array<OddType> ;

// // this.FirstDayOdd='yyyymmdd';

// // this.currentDayFixtures='yyyymmdd';

// }

// this. // thisDayFixtures:Array<FixtureType> = new Array<FixtureType>();

// this.   blocage!: number;

// this.   city!: string;

// this.   confirmpassword!: string;

// this.   cpLatLng!: string;

// this.   birthday!: Date;

// this.   credit!: number;

// this.   dateLivraison!: string;

// this.   dispo!: number;

// this.   endTimeLivraison!: string;

// this.   etat!: string;

// this.   favoris: any[] = [];

// this.   geoLoc: true = true;

// this.   id!: string;

// this.   indexEstim!: number;

// this.   lastStore!: string;

// this.   lat!: string;

// this.   lng!: string;

// this.   numCde!: string;

// this.   password!: string;

// this.   phonehome!: string;

// this. //   photoURL: string;

// this.   rayon!: number;

// this.   reserve!: number;

// this.   adresse!: string;

// this.   road!: string;

// this.   suivre: any[] = [];

// this.   stat: any[] = [];

// this.   algo: any[] = [];

// this.   timeLivraison!: string;

// this.   token!: string;

// this.   varTemp!: string;

// this.   seller!: string;

// this.//blocage: string;

// this.//credit: string;

// this.//dispo: number;

// this