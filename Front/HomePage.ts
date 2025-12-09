import { t, Selector } from 'testcafe';
import {listFormation} from '../Data_Set/Constantes'
import { Formation } from './Formation';

export class INSSET_HomePage {
    Formation: Selector;
    FormationList: Selector;
    FormationM2: Selector;
    Formations: Formation[];

    constructor() {
        this.Formation = Selector('#menu-item-1248 > a');
        this.FormationList = Selector('#menu-item-1248 > ul.sub-menu > li');
        this.FormationM2 = Selector('#menu-item-1221');
        this.Formations = listFormation;
        
    }
};

