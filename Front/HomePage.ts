import { t, Selector } from 'testcafe';

export class INSSET_HomePage {
    Formation: Selector;
    FormationList: Selector;
    FormationM1: Selector;
    FormationCloud: Selector;
    Document: Selector;
    MaquetteLink: Selector;
    MaquetteText: Selector;
    MaquetteImage: Selector;


    constructor() {
        this.Formation = Selector('#menu-item-1248');
        this.FormationList = Selector('#menu-item-1248 > ul.sub-menu > li');
        this.FormationM1 = Selector('#menu-item-1220');
        this.FormationCloud = Selector('#menu-item-1229 a');
        this.Document = Selector("#panel-w60e01768-0-2-4 h1 span");
        this.MaquetteLink = Selector('#panel-w60e01768-0-2-5 > div > div > a');
        this.MaquetteText = Selector('#panel-w60e01768-0-2-5 > div > div > a > div > div.container_titre_pdf > span');
        this.MaquetteImage = Selector('#panel-w60e01768-0-2-5 > div > div > a > div > div.container_picto_pdf > div');
      
    }
};


