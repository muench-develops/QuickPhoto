# Konzept

- Vorstellung der Projektidee

- Aufgabe 1:
    1. Files erstellen: index.html, main.js, main.css (assets/js/css) [ ]
    2. Html Grundgerüst erstellen [ ]
    3. Seiten Titel anpassen [ ]
- Aufgabe 2:
    1. Boostrap und eigene Dateien (css, js) einbinden [ ]
    2. Überschrift: QuickPhoto ausgeben [ ]
    3. Google Fonts einbinden [ ]
    4. Font zuweisen in Main.css [ ]
    3. Container-Div um Überschrift [ ]
    4. Trennlinie unter Überschrift [ ] --> (HR)

- Aufgabe 3 - Navigation:
    1. Navigation erstellen: [ ]
        1. 1 Div erstellen und 3 Divs darin [ ]
        2. Überschrift in das erstes Unter-Div [ ]
        2. Überdiv Class d-flex zuweisen [ ]
        3. Boostrap --> Inputgroup-Dokumentation einfügen [ ]
        4. HR Tag entfernen durch Border-botom ersetzen [ ]
        5. Input Feld verkleinern [ ]
            1. Div --> Style über width zuweisen
    2. Fontawesome einbinden [ ] 
    3. @ durch Suchsymbol ersetzen [ ]
    4. Haussymbol, DM, Kompass und Herzsymbol [ ]
    5. d-inline-block [ ]
    6. Größe der Icons anpassen [ ]

- Aufgabe 4:
    1. Hintergrundfarbe der Seite ändern --> rgba(var(--b3f,250,250,250),1) [ ]
    2. Kommentare Navigation, User und Bilder erstellen [ ]
    3. Div für User und Bilder Galerie unterhalb der Navigation erstellen [ ]

- Aufgabe 5 - User:
    1. Innerhalb des User Divs 1 Div mit 2 (25%, 75%) Unter Divs erstellen [ ]
    2. In das erste der beiden unter-Divs ein Bild einbinden [ ]
    3. Bild über class rounded-circle rund machen [ ]
    4. User-Div nach rechts einrücken [ ]
    5. Bild umrahmen (border, border-dark) [ ]
    6. Username, Beiträge, Abonennten, abonniert und Biografie erstellen. [ ]
- Aufgabe 6:
    1. Unter User Div einen Rahmen einfügen [ ]
    2. Abstand über padding ausprobieren (py) ausprobieren [ ]
 - Aufgabe 7:
    1. User abonnieren Button hinzufügen [ ]

- Aufgabe 7 - Galerie:
    1. Unsplash.com 3 Bilder aussuchen [ ]
    2. Auf gleiche Höhe / Breite achten [ ]
    3. Bilder herunterladen in small [ ]
    4. In Order assets / media ablegen [ ]
    5. Umbennen der Bilder in image1 bis image 3 [ ]
    6. In Galerie Div ein weiteres Div erstellen [ ]
    7. Bilder einbinden [ ]
_____________________________________________________________________________

Javascript Funktionen:
- Button - Abo:
- Aufgabe 1
    1. Button Id zuweisen btnAbonnieren
    2. Script main js einbinden
    3. Variable erstellen und Btn selektieren
- Aufgabe 2 
    4. EventListener Button hinzufügen in main js
    5. function erstellen
        1. Event preventDefault()
        2. Ein und ausblenden über btnAbonnieren.style.display 
- Aufgabe 3:    
    6. Im Div des Usernamens ein weiteres div hinzufügen mit dem Style: Display: none,
    7. Id dem Div zuweisen "divAbonniert"
    8. Fontawesome Haken raussuchen
- Aufgabe 4:
    9. Haken einblenden inkl. Text abonniert
    10. dem divAbonniert die Eigenschaft onclick hinzufügen
    11. onclick="toggleAbonniert"
    12. class = "align-self-center und mb-0" hinzufügen
    12. in main js function toggleAbonniert erstellen


- Suchfunktionalität:
- Aufgabe 1
    1. Input Feld Id zuweisen: Suche
    2. Javascript inputFeld selektieren
    3. Eventlistener onChange hinzufügen
    4. Ausgeben des Input wertes
        1. alert(event.target.value);
        2. alert entfernen und suchwert in Variable speichern
        3. Wenn Suchwert Länge größer zwei dann console.log("Suche gestartet");
- Aufgabe 2:
    5. Id dem Galerie Div zuweisen ID ="Galerie"
    6. Galerie selektieren in JS
    7. Variable erstellen Bilder
    8. Console.Log(Bilder[0]) um erste Bild auszugeben
- Aufgabe 3_
    9. Durch bilder loopen
    10. src auf Suchwert prüfen
    11. Ein und Ausblenden, falls passt