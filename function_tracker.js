const API='https://disease.sh/v3/covid-19/all';

async function getDataGlobal() {
    const covidData= await fetch(API,{
        headers:{
            'Accept': 'application/json'
        }
    });
    const covidObj = await covidData.json();
    console.log(covidObj)


    document.getElementById('total_case').innerHTML = `${covidObj.deaths}`;
    document.getElementById('active_case').innerHTML = `${covidObj.active}`;
    document.getElementById('recovered_case').innerHTML = `${covidObj.recovered}`;
    document.getElementById('deaths_case').innerHTML = `${covidObj.deaths}`;

    document.getElementById('total_confirmed').innerHTML = `${covidObj.deaths}`;
    document.getElementById('total_recovered').innerHTML = `${covidObj.active}`;
    document.getElementById('total_deaths').innerHTML = `${covidObj.active}`;
    document.getElementById('new_deaths').innerHTML = `${covidObj.recovered}`;
    document.getElementById('help_line_no').innerHTML = `${covidObj.deaths}`;
    
}
getDataGlobal()



async function getDataCountry(){
    let covidCountry=await fetch("https://disease.sh/v3/covid-19/countries/pe",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const covidObj = await covidCountry.json();
    console.log(covidObj);

    document.getElementById('total_cases_country').innerHTML = `${covidObj.cases}`;
    document.getElementById('total_deaths_country').innerHTML = `${covidObj.deaths}`;
    document.getElementById('total_recovered_country').innerHTML = `${covidObj.recovered}`;
    document.getElementById('total_active_country').innerHTML = `${covidObj.active}`;
    document.getElementById('new_cases_country').innerHTML = `${covidObj.todayCases}`;
    document.getElementById('new_deaths_country').innerHTML = `${covidObj.todayDeaths}`;
}
getDataCountry()


// top10countries


let top10countries
async function getTop10CountryData() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json())

    let html = ''
    for (let i = 0; i < 15; i++) {
        const country = top10countries[i];
        html = html + `
            <li class="list-group-item d-flex countries_top10_container">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    ${country.country}
                <span class="c_un_error">${country.cases}</span>
            </li>
            `
    }
    document.querySelector("#top10country").innerHTML = html;
    // esto servirá para crear las opciones
    html = ''
    for (let i = 0; i < top10countries.length; i++) {
        const country = top10countries[i];
        html += `
            <option>${country.country}</option> 
            `
    }
}
getTop10CountryData()

function bromita(){
    Video()
}



