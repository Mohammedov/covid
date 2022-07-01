
let top10countriesprueba
async function getTop10CountryData() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    ${country.country}
                    ${country.cases}
            </li>
            `
    }
    document.querySelector("#topCases").innerHTML = html;
    
}
getTop10CountryData()


async function getTop10CountryTodayCase() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    
                    ${country.country}

                    ${country.todayCases}

            </li>
            `
    }
    document.querySelector("#todayCases").innerHTML = html;
    
}
getTop10CountryTodayCase()


async function getTop10CountryTodayDeaths() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    
                    ${country.country}

                    ${country.todayDeaths}

            </li>
            `
    }
    document.querySelector("#todayDeaths").innerHTML = html;
    
}
getTop10CountryTodayDeaths()

async function getTop10CountryTodayDeaths2() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    
                    ${country.country}

                    ${country.todayDeaths}

            </li>
            `
    }
    document.querySelector("#todayDeaths2").innerHTML = html;
    
}
getTop10CountryTodayDeaths2()

async function getTop10CountryTopActive() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    
                    ${country.country}

                    ${country.active}

            </li>
            `
    }
    document.querySelector("#topActive").innerHTML = html;
    
}
getTop10CountryTopActive()

async function getTop10CountryTopRecover() {
    top10countries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json());
    let html = ''
    for (let i = 0; i < 10; i++) {
        const country = top10countries[i];
        html = html + `
        
            <li class="list-group-item d-flex container_top_list ">

                    <img  class="flags"src="${country.countryInfo.flag}">
                    
                    ${country.country}

                    ${country.active}

            </li>
            `
    }
    document.querySelector("#topRecover").innerHTML = html;
    
}
getTop10CountryTopRecover()