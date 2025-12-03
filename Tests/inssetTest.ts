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
// Action 0
fixture('Test Contenu de formation MN')
    .page(url_insset)
    .requestHooks(logger,pdfLogger);

test('Test1', async t => {
    // Agrandir la fenêtre
    await t.maximizeWindow()
        //Action 1 et 2
        .hover(HP.Formation)
        .wait(1500) 
        //Action 3
        .hover(HP.FormationM1)
        .wait(1500)
        ;

    const countFormation = await HP.FormationList.count;

    const formationCloud = Selector('a').withText('Cloud Computing');

    const formationExists = await formationCloud.exists;
    //Action 4
    console.log('Formation Cloud existe ?', formationExists);
    //Action 5
    console.log('Le nombre de formation trouvé est : ', countFormation);

   
    //Action 6
    await t
        .click(HP.FormationCloud)
        .wait(1500);
    // Action 7
    await t.expect(HP.MaquetteText.exists).ok('Le texte "Maquette" doit être présent.');
    await t.expect(HP.MaquetteLink.exists).ok('Le lien de la maquette doit exister.');


    await t.scrollIntoView(HP.MaquetteText).wait(2000);


    // Action 8

    await t.expect(HP.MaquetteImage.exists).ok('L icône PDF doit exister.');
    await t.expect(HP.MaquetteImage.visible).ok('L icône PDF doit être visible.');


    // Action 9
    await t.click(HP.MaquetteLink).wait(5000);

    // Action 10
    await t.expect(pdfLogger.requests.length).gt(0, 'Aucun PDF téléchargé.');
    const pdfResponse = pdfLogger.requests[0].response.body;


    const pdfPath = path.join(__dirname, 'downloads', 'maquette.pdf');
    fs.writeFileSync(pdfPath, pdfResponse);

    // Action 11
    const data = await pdfParse(pdfResponse as Buffer);

    await t.expect(data.numpages).gt(0, 'PDF vide.');

    console.log('Tout est bien passé');


});
