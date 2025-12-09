
export class Formation {
    Nom: Selector;
    MaquetteText: Selector;
    MaquetteLink: Selector;
    MaquetteImage: Selector;

    constructor(Nom: Selector, MaquetteLink: Selector, MaquetteText: Selector, MaquetteImage: Selector) {
        this.Nom = Nom;
        this.MaquetteLink = MaquetteLink;
        this.MaquetteText = MaquetteText;
        this.MaquetteImage = MaquetteImage;
    }
}