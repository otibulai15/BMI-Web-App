Documentation:

    Settings:
    - Nach dem Ändern der Daten werden diese in dem localStorage gespeichert
    LocalStorage: 
        userSettings:
            gender: string
    Beispiel:
        // Saved Settings
        let settings = {
            gender: 'none'
        };

        // Load Settings from local storage
        function loadSettingsFromStorage() {
            const savedSettings = localStorage.getItem('userSettings');
            if (savedSettings) {
                settings = JSON.parse(savedSettings);
            }
        }

    graphTypeBtn:
    - Nach dem Klicken auf den Button wird der ausgewählte Graphentyp im localSotrage geändert
    LocalStorage:
        graphType: 'bar' oder 'line'
    Beispiel:
        // Saved Settings
        let graphType = 'bar';

        // Load Settings from local storage
        function loadGraphTypeFromStorage() {
            const savedGraphType = localStorage.getItem('graphType');
            if (savedGraphType) {
                graphType = JSON.parse(savedGraphType);
            }
        }