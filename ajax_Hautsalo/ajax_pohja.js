
const apiurl = "http://api.tvmaze.com/search/shows?q=";

let apiKysely;

const hakunappi = document.getElementById("hakunappi");

const tulosAlue = document.getElementById("tulos");

const hakuKentta = document.getElementById('hakuteksti');

hakunappi.addEventListener('click', tee_haku);

function tee_haku()  {


    let hakusana = hakuKentta.value;

    apiKysely = apiurl + hakusana;
    console.log("Lähetettävä kysely: " + apiKysely);

    fetch(apiKysely).then(function(response) {
        return response.json();
    }).then(function(json) {
        naytaVastaus(json);				
    }).catch(function(error) {
        console.log(error);
    });

};

function naytaVastaus(jsonData) {

    console.log("json sellaisenaan <br>");
    console.log(jsonData);
    console.log("Sellainen se oli. <br>");

    console.log("Hakutuloksia löytyi: " + Object.keys(jsonData).length + " kpl.");
    console.log("Length kertoo: " + jsonData.length);

    if (jsonData.length == 0) {
        tulosAlue.innerText = "Pyydettyä sarjaa ei löydy";
        return;
    }

    let htmlkoodi = ``;

    for (let i = 0; i < jsonData.length; i++) {

       let kuva = "kuvaa ei löydy";
       if (jsonData[i].show.image != null) {
           kuva = `<img src="${jsonData[i].show.image.medium}" alt="Sarjan kuva">`;
       }


        htmlkoodi +=
            `
            Sarjan nimi: ${jsonData[i].show.name }  <br>
            Sarjan url: <a href="${jsonData[i].show.url }"> ${jsonData[0].show.url} </a>  <br>
            Sarjan kuvaus:${kuva} <br>
            <br>
            Sarjan summary : ${jsonData[i].show.summary}
            Genres: ${jsonData[i].show.genres}; <br>
        `;
    }


    tulosAlue.innerHTML = htmlkoodi;

    let kuva;

    if (kuva == null) {
    }

}

function virhetilanne() {
   
    try {
     
    }
    catch (e) {
        console.log("Jokin meni pieleen, alla virheen info: <br>")
        console.log(e);
    }

}
