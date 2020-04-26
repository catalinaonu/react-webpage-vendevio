//next
import Head from "next/head";

//antd
import {Divider} from 'antd';


//components
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

import Footer from "../components/Footer";

const DataProtection = () => {
    return (
        <div>
            <Head>
                <title> Data Protection Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="data_protection-header">
                <div className="header-img">

                    <div className="navbar-container">
                        {/*navbar desktop*/}
                        <div className="top-navbar">
                            <NavbarDesktop/>
                        </div>


                        {/*navbar mobile*/}
                        <div className="drawer-navbar">
                            <NavbarMobile/>
                        </div>
                    </div>
                </div>
            </header>


            <section className="data-protection">
                <Divider/>

                <p>Wir nehmen den Schutz der persönlichen Daten unserer Nutzer besonders ernstund halten uns strikt an die Regeln der Datenschutzgesetze (DSGVO, TKG2003). Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht. Ausnahmenhiervon gelten nur im Fall gesetzlicher bzw. rechtlicher Verpflichtung oderwenn Sie in eine solche Weitergabe eingewilligt haben oder diese wünschen.</p>

                 <p>Diese Erklärung soll Ihnen einen Überblick darüber geben, wie wir diesenSchutz gewährleisten und welche Art von Daten zu welchem Zweck erhobenwerden.</p>

                <strong> Datenschutz </strong>
                <p>Wir erklären die Einhaltung der gesetzlichen Bestimmungen zum Datenschutz.Insbesondere werden Daten ausschließlich im Rahmen der Aufträge verwendetsowie Maßnahmen zur Gewährleistung der Datensicherheitgetroffen, indemsichergestellt wird, dass Daten ordnungsgemäß verwendet und Unbefugten nichtzugänglich gemacht werden. Auftraggeber, Dienstleister und ihre Mitarbeitersind zur Verschwiegenheit und Geheimhaltung der von User bekannt gegebenenDaten verpflichtet, soweit kein rechtlich zulässiger Grund für eineÜbermittlung oder Offenlegung der anvertrauten oder zugänglich gemachtenDaten besteht.</p>

                <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sieglauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrechtverstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weiseverletzt worden sind, können Sie direkt mit der Aufsichtsbehörde oder direktmit uns Kontakt aufnehmen. In Österreich ist dies die Datenschutzbehörde- https://www.dsb.gv.at. Unsere Kontaktdaten finden Sie im Impressum.Server-Log-FilesWir erheben und speichern automatisch Informationen in sogenanntenServer-Log Files, die Ihr Browser an uns übermittelt. Dies sind:</p>

                 <p>- die aufgerufene Seite (URL)<br/>
                    - der Browser bzw. die Browserversion<br/>
                    - das verwendete Betriebssystem<br/>
                    - die Referrer URL (die zuvor besuchte Seite)<br/>
                    - Hostname und IP-Adresse des zugreifenden Rechners<br/>
                    - die Uhrzeit der Serveranfrage</p>

                 <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführungdieser Daten mit anderen Datenquellen wird nicht vorgenommen. Nach 14 Tagenwerden die Daten gelöscht. Anbieter ist die World4You Internet Services GmbH, Hafenstraße 47-51, 4020 Linz, mit der wir einenAuftragsdatenverarbeitungsvertrag abgeschlossen haben.Personenbezogene DatenÜber unsere Websites erfassen wir keinerlei personenbezogene Daten(beispielsweise Namen, Anschriften, Telefonnummern oder E-Mail-Adressen),außer wenn Sie uns solche Daten freiwillig zur Verfügung stellen(beispielsweise durch die Kontaktaufnahme per Email oder Kontaktformular)bzw. eingewilligt haben oder die entsprechenden Rechtsvorschriften über denSchutz Ihrer Daten dies erlauben.Austausch personenbezogener DatenVendevio kann personenbezogene Daten gegenüber Dritten offenlegen, wenn diesvom Gesetz verlangt wird, dies auf eine gesetzliche oder gerichtlicheAnordnung hinauf erfolgt und dass dies den Schutz von Rechten,Eigentumsrechten oder der Sicherheit von uns oder den mit uns verbundenenUnternehmen, Geschäftsverbindungen, Kunden oder anderen Personenerforderlich ist.SicherheitEs werden technische und organisatorische Sicherheitsmaßnahmen getroffen, umIhre personenbezogenen Daten gegen unbeabsichtigte oder unrechtmäßigeLöschung, Veränderung oder gegen Verlust und gegen unberechtigte Weitergabeoder unberechtigten Zugriff zu schützen.Links zu anderen WebsitesDie Website enthält Links zu anderen Websites. Vendevio ist für dieDatenschutz-Policies oder den Inhalt dieser anderen Websites nichtverantwortlich und hat keinen Einfluss darauf.Kontakt mit unsWenn Sie per Formular auf der Website, per E-Mail oder per Drift MessengerErweiterung Kontakt mit uns aufnehmen, werden Ihre angegebenen Datenausschließlich zwecks Bearbeitung der Anfrage und für den Fall vonAnschlussfragen gespeichert. Diese Daten geben wir nicht ohne IhreEinwilligung weiter.CookiesUnsere Website verwendet sogenannte Cookies. Dabei handelt es sich um kleineTextdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden.Sie richten keinen Schaden an.</p>

                 <p>Man unterscheidet unbedingt notwendige Cookies um grundlegendeFunktionen der Website sicherzustellen, funktionelle Cookies um dieLeistung der Webseite sicherzustellen und zielorientierte Cookies umdas Benutzererlebnis zu verbessern</p>

                 <p>Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten EinigeCookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. DieVorgangsweise dazu ist nach Browser unterschiedlich, bitte schauen Sie inIhrer Browseranleitung nach (unter "Hilfe" im Browsermenü). Cookiesermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>

                 <p>Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten,dass er Sie über das Setzen von Cookies informiert und Sie dies nur imEinzelfall erlauben.</p>

                 <p>Bei der Deaktivierung von Cookies kann die Funktionalität unserer Websiteeingeschränkt sein.Web-AnalyseUnsere Website nutzt Funktionen
                 des Webanalysedienstes Google Analytics.Anbieter ist die Google Inc.,1600 Amphitheatre Parkway Mountain View, CA94043, USA.</p>

                 <p><strong>Google Analytics verwendet solche zielorientierten Cookies.</strong></p>

                  <p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics findenSie in der Datenschutzerklärung von Google:https://support.google.com/analytics/answer/6004245?hl=de.</p>

                  <p>Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzungder Website bezogenen Daten an Google sowie die Verarbeitung dieser Datendurch Google verhindern, indem Sie das unter dem folgenden Link verfügbareBrowser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.</p>

                 <p>Alternativ können Sie die Erfassung Ihrer Daten durch Google Analyticsverhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookiegesetzt, das die Erfassung Ihrer Daten bei zukünftigen Besuchen dieserWebsite verhindert.</p>

                 <p>Hier von Google Analytics austragen</p>

                 <p>Wir haben mit Google für die Datenverarbeitung einen Vertrag zurAuftragsdatenverarbeitung abgeschlossen.</p>

                  <p>Wir nutzen die Funktion "Aktivierung der IP-Anonymisierung" auf dieserWebseite. Dadurch wird Ihre IP-Adresse von Google innerhalb vonMitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten desAbkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur inAusnahmefällen wird die volle IP-Adresse an einen Server von Google in denUSA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Websitewird Google diese Informationen benutzen, um Ihre Nutzung der Websiteauszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und umweitere mit der Websitenutzung und der Internetnutzung verbundeneDienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmenvon Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nichtmit anderen Daten von Google zusammengeführt.</p>

                   <p>Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des §96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder f(berechtigtes Interesse) der DSGVO.SSL-VerschlüsselungDiese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragungvertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Siean uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eineverschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile desBrowsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol inIhrer Browserzeile.</p>

                   <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, dieSie an uns übermitteln, nicht von Dritten mitgelesen werden.Widerspruch gegen die (weitere) Datenverarbeitung und -nutzungIhre erteilte Einwilligung zur Speicherung Ihrer persönlichen Daten undderen Nutzung zur Erbringung der jeweiligen Dienste, können Sie jederzeitwiderrufen.</p>

                    <p>Bitte beachten Sie, dass wir auch nach Ihrem Widerspruch gegen dieDatenverwendung und/oder -speicherung Ihre Daten zu Abrechnungszwecken imerforderlichen Umfang verarbeiten dürfen.</p>

                    <p>Ferner hat der Widerspruch gegen eine weitere Datenverwendung natürlich zurFolge, dass Sie ggf. die bezogenen Services nicht weiter beziehen können unddie Erbringung des jeweiligen Dienstes unsererseits umgehend eingestelltwird. Ihre personenbezogenen Daten werden in diesem Zusammenhang umgehendgelöscht und in unserem Bestand nicht weiter vorgehalten.AuskunftsrechtSie haben jederzeit das Recht auf Auskunft über Art und Umfang der bezüglichIhrer Person gespeicherten Daten, deren Herkunft und deren Empfänger sowieden Zweck der Speicherung.</p>

                    <p>Die notwendigen Kontaktdaten sind im Impressum (Menü und Footer) zu finden.Weitere Informationen:Die betroffene Person hat das Recht auf Auskunft über die gespeichertenDaten gemäß Art 15 DSGVO, auf Berichtigung unzutreffender Daten gemäß Art 16DSGVO, auf Löschung von Daten gemäß Art 17 DSGVO, auf Einschränkung derVerarbeitung von Daten gemäß Art 18 DSGVO, auf Widerspruch gegen dieunzumutbare Datenverarbeitung gemäß Art 21 DSGVO sowie aufDatenübertragbarkeit gemäß Art 20 DSGVO. Sofern die Verarbeitung aufgrundeiner Einwilligungserklärung erfolgt, hat die betroffene Person dieMöglichkeit, diese jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit deraufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührtwird. Der Betroffene hat das Recht, sich bei der Aufsichtsbehörde zubeschweren – zuständig ist in Österreich die Datenschutzbehörde. DieAnschrift lautet:</p>

                    <p><strong>Österreichische Datenschutzbehörde</strong></p>
                    <p>Wickenburggasse 8, 1080 Wien, Telefon: +43 1 52 152-0,            E-Mail: dsb@dsb.gv.at</p>

                <p>Wir geben im Rahmen der Erhebung der Daten bekannt, sollte dieBereitstellung der personenbezogenen Daten für die betroffene Persongesetzlich oder vertraglich vorgeschrieben oder für einen Vertragsabschlusserforderlich sein. Gleichzeitig geben wir bekannt, ob die betroffene Personverpflichtet ist, die personenbezogenen Daten bereitzustellen und welchemöglichen Folgen die Nichtbereitstellung hätte. Eine automatisierteEntscheidungsfindung einschließlich Profiling erfolgt nicht. Solltenpersonenbezogenen Daten für einen anderen Zweck verarbeitet werden als den,für den die personenbezogenen Daten erhoben wurden, haben wir dieseInformationen über diesen anderen Zweck der betroffenen Personbekanntgegeben.</p>


            </section>

            <Footer/>
            <style jsx>{`
            //color of the links/navbar desktop
            .top-navbar :global(a) {
                                   color: #8c8c8c;
                                    }
             //color of the links/navbar mobile                  
            .drawer-navbar :global(a) {
                                      color: #8c8c8c;
                                      }
             
                          
            .data-protection {
                             //text color
                             color: #8c8c8c;
                              //set the width for the content and center it 
                             width: 60%;
                             margin-left: 20%;
                             margin-right: 20%;
                             padding-top: 24px;
                             padding-bottom: 24px;
                            }  
            }
                        
                            
         //to appear only on mobile
        @media only screen and (max-width: 600px){
        .data-protection {
        width: 80%;
         margin-left: 10%;
                             margin-right: 10%;
        }
        }                                       
            
            `}</style>
        </div>
    )
}

export default DataProtection