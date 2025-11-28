var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Aree_verdi_Systus_1 = new ol.format.GeoJSON();
var features_Aree_verdi_Systus_1 = format_Aree_verdi_Systus_1.readFeatures(json_Aree_verdi_Systus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aree_verdi_Systus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aree_verdi_Systus_1.addFeatures(features_Aree_verdi_Systus_1);
var lyr_Aree_verdi_Systus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aree_verdi_Systus_1, 
                style: style_Aree_verdi_Systus_1,
                popuplayertitle: 'Aree_verdi_Systus',
                interactive: true,
                title: '<img src="styles/legend/Aree_verdi_Systus_1.png" /> Aree_verdi_Systus'
            });
var format_Alberi_systus_2 = new ol.format.GeoJSON();
var features_Alberi_systus_2 = format_Alberi_systus_2.readFeatures(json_Alberi_systus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberi_systus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberi_systus_2.addFeatures(features_Alberi_systus_2);
var lyr_Alberi_systus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberi_systus_2, 
                style: style_Alberi_systus_2,
                popuplayertitle: 'Alberi_systus',
                interactive: true,
                title: '<img src="styles/legend/Alberi_systus_2.png" /> Alberi_systus'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Aree_verdi_Systus_1.setVisible(true);lyr_Alberi_systus_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Aree_verdi_Systus_1,lyr_Alberi_systus_2];
lyr_Aree_verdi_Systus_1.set('fieldAliases', {'Nome': 'Nome', 'Indirizzo': 'Indirizzo', 'Tipo': 'Tipo', 'CenterLat': 'CenterLat', 'CenterLng': 'CenterLng', 'Data': 'Data', 'PDF': 'PDF', 'Tipologia': 'Tipologia', 'Valutazione Ecologica': 'Valutazione Ecologica', 'Ente Proprietario': 'Ente Proprietario', 'Ente Gestore': 'Ente Gestore', 'Tipologia Gestione': 'Tipologia Gestione', 'Data Inizio Gestione': 'Data Inizio Gestione', 'Data Fine Gestione': 'Data Fine Gestione', 'Stato Attuale': 'Stato Attuale', 'Ambito Territoriale': 'Ambito Territoriale', 'Tecnico Rilevatore': 'Tecnico Rilevatore', 'Siepi': 'Siepi', 'Impianto Irriguo': 'Impianto Irriguo', 'Giochi': 'Giochi', 'Arborei': 'Arborei', 'Stato Manutentivo': 'Stato Manutentivo', 'Stato Pavimentazione': 'Stato Pavimentazione', 'Prescrizioni Preliminari': 'Prescrizioni Preliminari', 'Data Inizio Censimento': 'Data Inizio Censimento', 'Vincolo Paesaggistico': 'Vincolo Paesaggistico', 'field_28': 'field_28', });
lyr_Alberi_systus_2.set('fieldAliases', {'Cliente': 'Cliente', 'Nome': 'Nome', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', 'Specie': 'Specie', 'Data Censimento albero': 'Data Censimento albero', 'Data Ultima Ispezione': 'Data Ultima Ispezione', 'PDF ultima ispezione': 'PDF ultima ispezione', 'Prossimo Controllo': 'Prossimo Controllo', 'Validità': 'Validità', 'Ultima cpc': 'Ultima cpc', 'Ultima ispezione stato albero': 'Ultima ispezione stato albero', 'Prescrizione': 'Prescrizione', 'Colletto': 'Colletto', 'Colletto-note': 'Colletto-note', 'Fusto': 'Fusto', 'Fusto-note': 'Fusto-note', 'Chioma': 'Chioma', 'Chioma-note': 'Chioma-note', 'Interventi Consigliati': 'Interventi Consigliati', 'Interventi Effettuati': 'Interventi Effettuati', 'Note Interventi Effettuati': 'Note Interventi Effettuati', 'Analisi strumentale': 'Analisi strumentale', 'Cultivar': 'Cultivar', 'Attributo': 'Attributo', 'Conforme Legge 10/2013': 'Conforme Legge 10/2013', 'Categoria morfologica': 'Categoria morfologica', 'Fase vegetativa': 'Fase vegetativa', 'Posizione': 'Posizione', 'Contrasto dominanza visiva': 'Contrasto dominanza visiva', 'Contesto ambientale': 'Contesto ambientale', 'Visibilità pubblica': 'Visibilità pubblica', 'Composizione paesaggistica': 'Composizione paesaggistica', 'Valore estetico': 'Valore estetico', 'Tipo di chioma': 'Tipo di chioma', 'Trasparenza di chioma': 'Trasparenza di chioma', 'Stato dell\'albero': 'Stato dell\'albero', 'Data Rilievo': 'Data Rilievo', 'Data piantagione': 'Data piantagione', 'Età stimata': 'Età stimata', 'Tecnico incaricato': 'Tecnico incaricato', 'Note': 'Note', 'Altezza': 'Altezza', 'Altezza tronco libero': 'Altezza tronco libero', 'Circonferenza': 'Circonferenza', 'Lunghezza': 'Lunghezza', 'Larghezza': 'Larghezza', 'Diametro chioma': 'Diametro chioma', 'Diametro colletto': 'Diametro colletto', 'Diametro fusto': 'Diametro fusto', 'Area chioma': 'Area chioma', 'Indice di Snellezza': 'Indice di Snellezza', });
lyr_Aree_verdi_Systus_1.set('fieldImages', {'Nome': 'TextEdit', 'Indirizzo': 'TextEdit', 'Tipo': 'TextEdit', 'CenterLat': 'TextEdit', 'CenterLng': 'TextEdit', 'Data': 'TextEdit', 'PDF': 'TextEdit', 'Tipologia': 'TextEdit', 'Valutazione Ecologica': 'TextEdit', 'Ente Proprietario': 'TextEdit', 'Ente Gestore': 'TextEdit', 'Tipologia Gestione': 'TextEdit', 'Data Inizio Gestione': 'TextEdit', 'Data Fine Gestione': 'TextEdit', 'Stato Attuale': 'TextEdit', 'Ambito Territoriale': 'TextEdit', 'Tecnico Rilevatore': 'TextEdit', 'Siepi': 'TextEdit', 'Impianto Irriguo': 'TextEdit', 'Giochi': 'TextEdit', 'Arborei': 'TextEdit', 'Stato Manutentivo': 'TextEdit', 'Stato Pavimentazione': 'TextEdit', 'Prescrizioni Preliminari': 'TextEdit', 'Data Inizio Censimento': 'TextEdit', 'Vincolo Paesaggistico': 'TextEdit', 'field_28': 'TextEdit', });
lyr_Alberi_systus_2.set('fieldImages', {'Cliente': 'TextEdit', 'Nome': 'TextEdit', 'Latitudine': 'TextEdit', 'Longitudine': 'TextEdit', 'Specie': 'TextEdit', 'Data Censimento albero': 'TextEdit', 'Data Ultima Ispezione': 'TextEdit', 'PDF ultima ispezione': 'TextEdit', 'Prossimo Controllo': 'TextEdit', 'Validità': 'TextEdit', 'Ultima cpc': 'TextEdit', 'Ultima ispezione stato albero': 'TextEdit', 'Prescrizione': 'TextEdit', 'Colletto': 'TextEdit', 'Colletto-note': 'TextEdit', 'Fusto': 'TextEdit', 'Fusto-note': 'TextEdit', 'Chioma': 'TextEdit', 'Chioma-note': 'TextEdit', 'Interventi Consigliati': 'TextEdit', 'Interventi Effettuati': 'TextEdit', 'Note Interventi Effettuati': 'TextEdit', 'Analisi strumentale': 'TextEdit', 'Cultivar': 'TextEdit', 'Attributo': 'TextEdit', 'Conforme Legge 10/2013': 'TextEdit', 'Categoria morfologica': 'TextEdit', 'Fase vegetativa': 'TextEdit', 'Posizione': 'TextEdit', 'Contrasto dominanza visiva': 'TextEdit', 'Contesto ambientale': 'TextEdit', 'Visibilità pubblica': 'TextEdit', 'Composizione paesaggistica': 'TextEdit', 'Valore estetico': 'TextEdit', 'Tipo di chioma': 'TextEdit', 'Trasparenza di chioma': 'TextEdit', 'Stato dell\'albero': 'TextEdit', 'Data Rilievo': 'DateTime', 'Data piantagione': 'DateTime', 'Età stimata': 'TextEdit', 'Tecnico incaricato': 'TextEdit', 'Note': 'TextEdit', 'Altezza': 'Range', 'Altezza tronco libero': 'Range', 'Circonferenza': 'Range', 'Lunghezza': 'TextEdit', 'Larghezza': 'TextEdit', 'Diametro chioma': 'Range', 'Diametro colletto': 'Range', 'Diametro fusto': 'TextEdit', 'Area chioma': 'TextEdit', 'Indice di Snellezza': 'TextEdit', });
lyr_Aree_verdi_Systus_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Indirizzo': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'CenterLat': 'inline label - visible with data', 'CenterLng': 'inline label - visible with data', 'Data': 'no label', 'PDF': 'no label', 'Tipologia': 'inline label - always visible', 'Valutazione Ecologica': 'no label', 'Ente Proprietario': 'no label', 'Ente Gestore': 'no label', 'Tipologia Gestione': 'no label', 'Data Inizio Gestione': 'no label', 'Data Fine Gestione': 'no label', 'Stato Attuale': 'inline label - visible with data', 'Ambito Territoriale': 'no label', 'Tecnico Rilevatore': 'no label', 'Siepi': 'no label', 'Impianto Irriguo': 'no label', 'Giochi': 'no label', 'Arborei': 'no label', 'Stato Manutentivo': 'no label', 'Stato Pavimentazione': 'no label', 'Prescrizioni Preliminari': 'no label', 'Data Inizio Censimento': 'no label', 'Vincolo Paesaggistico': 'no label', 'field_28': 'no label', });
lyr_Alberi_systus_2.set('fieldLabels', {'Cliente': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Latitudine': 'inline label - visible with data', 'Longitudine': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Data Censimento albero': 'no label', 'Data Ultima Ispezione': 'no label', 'PDF ultima ispezione': 'no label', 'Prossimo Controllo': 'no label', 'Validità': 'no label', 'Ultima cpc': 'no label', 'Ultima ispezione stato albero': 'no label', 'Prescrizione': 'no label', 'Colletto': 'no label', 'Colletto-note': 'no label', 'Fusto': 'no label', 'Fusto-note': 'no label', 'Chioma': 'no label', 'Chioma-note': 'no label', 'Interventi Consigliati': 'no label', 'Interventi Effettuati': 'no label', 'Note Interventi Effettuati': 'no label', 'Analisi strumentale': 'no label', 'Cultivar': 'no label', 'Attributo': 'no label', 'Conforme Legge 10/2013': 'no label', 'Categoria morfologica': 'inline label - visible with data', 'Fase vegetativa': 'no label', 'Posizione': 'inline label - visible with data', 'Contrasto dominanza visiva': 'no label', 'Contesto ambientale': 'no label', 'Visibilità pubblica': 'no label', 'Composizione paesaggistica': 'no label', 'Valore estetico': 'no label', 'Tipo di chioma': 'no label', 'Trasparenza di chioma': 'no label', 'Stato dell\'albero': 'no label', 'Data Rilievo': 'no label', 'Data piantagione': 'no label', 'Età stimata': 'no label', 'Tecnico incaricato': 'no label', 'Note': 'no label', 'Altezza': 'no label', 'Altezza tronco libero': 'no label', 'Circonferenza': 'no label', 'Lunghezza': 'no label', 'Larghezza': 'no label', 'Diametro chioma': 'no label', 'Diametro colletto': 'no label', 'Diametro fusto': 'no label', 'Area chioma': 'no label', 'Indice di Snellezza': 'no label', });
lyr_Alberi_systus_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});