// 1. Darstellung der Tabelle

// Die App zeigt eine Liste aller gespeicherten BMI-Messungen an.
// Jede Messung wird als eine Zeile dargestellt, bestehend aus:
// Datum
// Gewicht
// Größe
// berechneter BMI
// Bewertung (z. B. „Normalgewicht“)


// Die Tabelle wird dynamisch erzeugt, abhängig von Filter- oder Sortiereinstellungen.
// 2. Filterbereich
// Vor der Tabelle gibt es zwei Auswahlfelder:
// Ein Filter, mit dem der Nutzer den Zeitraum eingrenzen kann:
// „Alle Einträge“
// „Letzte Woche“
// „Letzter Monat“
// Ein Sortierfeld, mit dem der Nutzer die Reihenfolge bestimmt:
// Datum aufsteigend
// Datum absteigend
// BMI aufsteigend
// BMI absteigend
// Wenn der Nutzer eine Auswahl verändert, wird die Tabelle neu aufgebaut.

// 3. Ablauf beim Aktualisieren der Tabelle
// Die App liest den aktuellen Sortierwert.
// Die App liest den aktuellen Filterwert.
// Die App nimmt die gesamte BMI-Liste und filtert sie:
// Wenn „Alle“ ausgewählt ist → keine Filterung
// Wenn „Letzte Woche“ → nur Einträge, die maximal 7 Tage alt sind
// Wenn „Letzter Monat“ → nur Einträge der letzten 30 Tage
// Nach der Filterung sortiert die App die verbleibenden Einträge:
// nach Datum oder BMI
// jeweils auf- oder absteigend
// Die Tabelle wird geleert.
// Für jeden gefilterten Sortiereintrag wird eine neue Zeile erzeugt.

// 4. Löschen von Einträgen
// Wenn der Nutzer in einer Zeile auf „Löschen“ klickt:
// Der Eintrag wird aus der BMI-Liste entfernt.
// Die Tabelle wird sofort erneut aufgebaut.
// Die Sortier- und Filtereinstellungen bleiben dabei erhalten.

// 5. Verhalten beim Start der Seite
// Beim Laden der App:
// Die gespeicherte BMI-Liste wird geladen.
// Die Standardwerte für Filter (Alle) und Sortierung (Datum absteigend) werden gesetzt.
// Die Tabelle wird einmal initial aufgebaut.