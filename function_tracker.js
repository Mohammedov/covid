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
}
getDataGlobal()

async function getDataTop10() {
    const covidTop10= await fetch("https://disease.sh/v3/covid-19/countries",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const covidObj = await covidTop10.json();
    console.log(covidObj);


}
getDataTop10()
