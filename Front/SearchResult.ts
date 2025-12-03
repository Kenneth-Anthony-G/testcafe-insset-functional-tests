//#tabsresp-search_solr > li.tabs-search__control.nav-item.active > a
//#tabsresp-search_solr > li:nth-child(1) > a
//#tabsresp-search_solr > li:nth-child(2) > a
//#tabsresp-search_solr > li:nth-child(3) > a
//#tabsresp-search_solr > li:nth-child(4) > a
//#tabsresp-search_solr > li:nth-child(4) > a
//#tabsresp-search_solr > li:nth-child(4) > a

import { t,Selector } from 'testcafe';
export class UPJV_SearchResult{
    Titre_page1: Selector;
    Titre_page2: Selector;
    Titre_page3: Selector;
    Titre_page4: Selector;
    Titre_page5: Selector;
    Titre_page6: Selector;
       
    constructor(){
        this.Titre_page1=Selector('#tabsresp-search_solr > li:nth-child(1) > a');
        this.Titre_page2=Selector('#tabsresp-search_solr > li:nth-child(2) > a');
        this.Titre_page3=Selector('#tabsresp-search_solr > li:nth-child(3) > a');
        this.Titre_page4=Selector('#tabsresp-search_solr > li:nth-child(4) > a');
        this.Titre_page5=Selector('#tabsresp-search_solr > li:nth-child(5) > a');
        this.Titre_page6=Selector('#tabsresp-search_solr > li:nth-child(6) > a');
        
    }
 
   
    
    
};