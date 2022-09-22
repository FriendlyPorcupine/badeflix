function getStatus(bad) {
  fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCHWIMMBADOGD&srsName=EPSG:4326&outputFormat=json&cql_filter=strIndexOf(WEBLINK1%2C%27'+bad+'%27)%3E-1')
    .then(response => {
      console.log()
      return response.json()
    })
    .then(data => {
      // console.log(data)
      const props = data.features[0].properties
      const name = props.NAME
      const auslastungTag1 = props.AUSLASTUNG_AMPEL_KAT_TXT_1

      document.body.textContent = `${name} Ausleistung heute: ${auslastungTag1}`
    })
}

getStatus('floridsdorf');


/*
Weitere Bäder
theresienbad
hietzing
ottakring
doebling
grossfeldsiedlung
donaustadt
// Halle
amalienbad
huetteldorf
joergerbad
brigittenau
floridsdorf
// Sommer
laaerbergbad
hadersdorf
kongress
schafbergbad
krapfenwaldlbad
angelibad
altedonau
gaensehaeufel
hoepflerbad
liesingerbad
// Saunabäder
apostelbad
einsiedlerbad
hermannbad
penzingerbad
*/
