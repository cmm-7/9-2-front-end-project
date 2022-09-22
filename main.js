const options = {
    method: "GET",
    headers: {
        "X-Auth-Token": "c8ddb966abd94a59b4d2e0861d4b6b01",
        // "Content-Type": "application/json"
    },
    // mode: "no-cors",
}

getApi();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const startDate = document.querySelector("input#start");
    const endDate = document.querySelector("input#end");


    console.log(startDate.value);
    getApi("/",startDate.value, endDate.value);

})

const aside = document.querySelectorAll("section ul");
for(let league of aside){
    league.addEventListener("click", (event) => {
        event.preventDefault();
        let leagueClicked = ""
        //console.log(league.textContent);
        switch(league.textContent){
            case "FIFA World Cup":
            leagueClicked = "/competitions/WC/"
            //console.log(leagueClicked);
            getApi(leagueClicked);
            break;
            case "UEFA Champions League":
            leagueClicked = "/competitions/CL/"
            getApi(leagueClicked);
            break;
            case "Bundesliga":
            leagueClicked = "/competitions/BL1/"
            getApi(leagueClicked);
            break;
            case "Eredivisie":
            leagueClicked = "/competitions/DED/"
            getApi(leagueClicked);
            break;
            case "Campeonato Brasileiro Série A":
            leagueClicked = "/competitions/BSA/"
            getApi(leagueClicked);
            break;
            case "Primera Division":
            leagueClicked = "/competitions/PD/"
            getApi(leagueClicked);
            break;
            case "Ligue 1":
            leagueClicked = "/competitions/FL1/"
            getApi(leagueClicked);
            break;
            case "Championship":
            leagueClicked = "/competitions/ELC/"
            getApi(leagueClicked);
            break;
            case "Primeira Liga":
            leagueClicked = "/competitions/PPL/"
            getApi(leagueClicked);
            break;
            case "European Championship":
            leagueClicked = "/competitions/EC/"
            getApi(leagueClicked);
            break;
            case "Serie A":
            leagueClicked = "/competitions/SA/"
            getApi(leagueClicked);
            break;
            case "Premier League":
            leagueClicked = "/competitions/PL/"
            getApi(leagueClicked);
            break;
            case "Copa Libertadores":
            leagueClicked = "/competitions/CLI/"
            getApi(leagueClicked);
            break;
        }
    })}




function descript(match, homeImg, awayImg){

    console.log(match.status);
    
    let matchDate = match.utcDate.split("T")
    let time = matchDate[1].replace("Z","");
    console.log(matchDate);
    console.log(time);
    matchDate = matchDate[0].split("-");
    matchDate = `${matchDate[1]}/${matchDate[2]}/${matchDate[0]}`
    console.log(matchDate);
    
    // The idea for this if statement is that if a user searches a match, then we search for the match status so that we can see if the match either started, finished, or will happen at a certain time and date. It should display in the hover: what league the match is from, score if any, whatever else you can think of 
    let hoverDescript = "";
    if(match.status === "SCHEDULED"){
        hoverDescript = `
            <p> ${match.status}: ${matchDate} </p>
        `
    }
    else if(match.status === "FINISHED" || match.status === "IN_PLAY"){
        
        hoverDescript = `
        <p> ${match.score.fullTime.homeTeam} </p>
        <p> ${match.score.fullTime.awayTeam} </p>
        `
    }
    else if(match.status === "POSTPONED"){
        hoverDescript= `<p> Date: TBD </p>`
    }


    let displayBox = `
      <div class="card">
        <h2 class="card-title"><span>${match.homeTeam.name} (HOME)</span> VS <span>${match.awayTeam.name} (AWAY)</span></h2>
        <div class="content">
            <img src="${homeImg}" alt="">
            
            <div class="centerDescrip">
            <p class="matchDate">${matchDate} </p>

            <p class="matchTime">${time}</p>
            
            <p class=matchStatus">${match.status}</p>
            </div>
            
            <img src="${awayImg}" alt="">
        </div>
        <div class="card-desc"> 
            ${hoverDescript}
        </div>
      </div>`;
      return displayBox;
}

async function getApi(id, startDate, endDate) {
    console.log(startDate);
    if(!id){
        if(!startDate && !endDate){
        let date = new Date();
        console.log(date);
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        id = "/"
        startDate = `${year}-0${month}-${day}`;
        endDate = `${year}-0${month}-${day}`; // I had to input the 0 in order for this to work. An issue would happen if the month and day are single digits
        }
    }
    
    if(!startDate && !endDate){
        let date = new Date();
        console.log(date);
        let year = date.getFullYear().toString(); 
        let day = date.getDate().toString();
        let month = date.getMonth() + 1;
        month = month.toString();
        if(day.length === 1){
            day = `0${day}`;
        }
        if(month.length === 1){
            month = `0${month}`;
        }
        startDate = `${year}-${month}-${day}`;
        endDate = `${year}-${month}-${day}`; // I had to input the 0 in order for this to work. An issue would happen if the month and day are single digits
        }
        console.log(id);
    console.log(id, startDate, endDate);
    const main = document.querySelector("main");
    const fetchApi = await fetch(`https://api.football-data.org/v2${id}matches?dateFrom=${startDate}&dateTo=${endDate}`, options)
    const response = await fetchApi.json()
    if(response.errorCode){
        if(response.message.includes("10")){
            return main.innerText = response.message;
        }
        else{
            return main.innerText = "Argument 'Start Date' must be dated before the one specified in 'End Date'"
        }
    } 

    if(response.count === 0){
        return main.innerText = "No games today!"
    }
    const homeTeam = document.createElement("div")
    homeTeam.setAttribute("class", "cards");
    
    main.innerHTML = "";
    main.append(homeTeam);
    

    for(let i=0; i<=Math.min(4,response.matches.length-1);i++){
        console.log(i,response.matches.length, response.matches);
        let homeImg = await getTeamLogo(response.matches[i].homeTeam.id);
        let awayImg = await getTeamLogo(response.matches[i].awayTeam.id);
        
        homeTeam.innerHTML += descript(response.matches[i], homeImg, awayImg);
    }

}


async function getTeamLogo(id) {
    console.log(id);
    const fetchApi = await fetch(`https://api.football-data.org/v2/teams/${id}`, options) 
    const response = await fetchApi.json()

    return response.crestUrl;
}


