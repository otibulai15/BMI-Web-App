Plan.md — Tabellen-Feature für BMI-App
Ziel

Eine übersichtliche Tabelle soll dem Nutzer seine bisherigen BMI-Berechnungen anzeigen.
Jede Zeile stellt eine Messung dar, inklusive Datum, Gewicht, Größe, berechnetem BMI und Bewertung (z. B. Normalgewicht, Übergewicht).

Features

Datentabelle: Anzeige aller gespeicherten BMI-Einträge

Sortierung: Nach Datum oder BMI auf- und absteigend sortieren

Filter: Optional Filter nach Zeitraum (z. B. letzte Woche, letzter Monat)

Löschen: Einzelne oder mehrere Einträge entfernen


Tabellenstruktur
Spalte	Beschreibung	Typ / Format
Datum	Zeitpunkt der Messung	Date (dd.mm.yyyy)
Gewicht (kg)	Eingegebenes Gewicht	Number (z. B. 72.5)
Größe (cm)	Eingegebene Körpergröße	Number (z. B. 178)
BMI	Berechneter Wert (kg/m²)	Number (1 Dezimalstelle)
Bewertung	Textliche Kategorie (z. B. „Normalgewicht“)	String