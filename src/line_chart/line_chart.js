(async function() {
  const data = [
    { month: 'Jan', bmi: 34.5 },
    { month: 'Feb', bmi: 32.5 },
    { month: 'Mar', bmi: 31.8 },
    { month: 'Apr', bmi: 28.7 },
    { month: 'May', bmi: 24.5 },
    { month: 'Jun', bmi: 22.2 },
    { month: 'Jul', bmi: 21.2 },
  ];

  new Chart(
    document.getElementById('bmi-chart'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.month),
        datasets: [
          {
            label: 'BMI over time',
            data: data.map(row => row.bmi)
          }
        ]
      }
    }
  );
})()


//Userstory: Der Nutzer möchte seinen BMI-Wert für den Zeitraum November-Dezember visualisieren,
//           hierzu wählt er im Dashboard als Start November und Dezember als ende. Als nächstes
//           drückt er den "aktualisieren" Knopf, woraufhin die Daten vom HTTP Server abgerufen werden.
//           Danach werden die Daten im Graphen visualisiert.

// Nutzer Einstellungen bezüglich Zeitraum abrufen
//   HTTP Request vom Server: Daten des nötigen Zeitraums abrufen
// Graphen konfigurieren
//  - X als Zeit als Zeitachse mit dem Start- und Enddatum kofigurieren
//  - Y Die einzelnen Datenpunkte eintragen.

//Funktion retrieveDatapoints(start, end)
//  try {
//      daten := requestData("/bmi", {start: 01.11.25, end: 1.12.25})
//      return daten
//  } catch (Ex) {
//      Fehler:
//       - Verbindung fehlgeschlagen
//       - Anfrage fehlerhaft
//       - Serverfehler
//  }
//

/*const config = {
    type: 'line',
}*/

/*function retrieveDatapoints(start, end) {

}*/

//Funktion plotGraph(start, end)
//   daten := retrieveDatapoints(start, end)
//   setupGraph(start, end)
//   für datenpunkt in daten {
//      plotData(datenpunkt.datum, datenpunkt.wert)
//}


/*function plotGraph(start, end) {
    new Chart(ctx, {
        type: 'line',
        
    })
}*/