import { Selector, RequestLogger } from 'testcafe';
import { INSSET_HomePage } from '../Front/HomePage';
import * as fs from 'fs';
import * as path from 'path';
import * as pdfParse from 'pdf-parse';



const pdfLogger = RequestLogger(/\.pdf$/, {
    logResponseBody: true,
    logResponseHeaders: true
});


const HP = new INSSET_HomePage();
const url_insset = 'https://www.insset.u-picardie.fr/';

const logger = RequestLogger({ url_upjv: url_insset, method: 'post' }, {
    logResponseHeaders: true,
    logResponseBody: true
});
const count = 0;
// Action 0
fixture('Test Contenu de formation MN')
    .page(url_insset)
    .requestHooks(logger,pdfLogger);

test('Test1', async t => {
    // Agrandir la fenêtre
    await t.maximizeWindow();
    //Action 1 et 2
    for (const formation of HP.Formations) {
    await t
        .hover(HP.Formation)
        .wait(1500) 
        .expect(HP.Formation.visible).ok('Le menu Formation doit être visible.')

        //Action 3
        .hover(HP.FormationM2)
        .wait(1500)
        .expect(HP.FormationM2.visible).ok('Le sous-menu M2 doit être visible.')
        ;
    
    //Action 4
    // const formationCloud = Selector('a').withText('Cloud Computing');
    // const formationExists = await formationCloud.exists;
    // await t.expect(formationExists).ok('La formation Cloud Computing doit exister.');
    // console.log('Formation Cloud existe ?', formationExists);

    //Action 5
    // const countFormation = await HP.FormationList.count;
    // await t.expect(countFormation).gt(0, 'Aucune formation trouvée.');
    // console.log('Le nombre de formation trouvé est : ', countFormation);
    
    //Action 6
    await t
        .expect(formation.Nom.exists).ok('Le lien vers la formation doit exister avant le clic.')
        .expect(formation.Nom.visible).ok('Le lien vers la formation doit être visible avant le clic.')
        .click(formation.Nom)
        .wait(1500);

    // Action 7
    await t.expect(formation.MaquetteText.exists).ok('Le texte "Maquette" doit être présent.');
    await t.expect(formation.MaquetteLink.exists).ok('Le lien de la maquette doit exister.');
    await t.scrollIntoView(formation.MaquetteText).wait(2000);

    // Action 8
    await t.expect(formation.MaquetteImage.exists).ok('L icône PDF doit exister.');
    await t.expect(formation.MaquetteImage.visible).ok('L icône PDF doit être visible.');

    // Action 9
    await t.click(formation.MaquetteText).wait(5000);

    // Action 10
    await t.expect(pdfLogger.requests.length).gt(0, 'Aucun PDF téléchargé.');
    const pdfResponse = pdfLogger.requests[0].response.body;

    const nomFormation = await formation.Nom.innerText;
    const pdfName = nomFormation.replace(/\s+/g, '_') + '_maquette.pdf';
    const pdfPath = path.join(__dirname, 'downloads', pdfName);

    fs.writeFileSync(pdfPath, pdfResponse);
    await t.expect(fs.existsSync(pdfPath))
          .ok('Le fichier PDF n’a pas été enregistré localement.');

    // Action 11
    const data = await pdfParse(pdfResponse as Buffer);
    await t.expect(data.numpages).gt(0, 'PDF vide.');

    console.log('Tout est bien passé'); 
}
});
