const options = {
    method: "GET",
    headers: {
        "X-Auth-Token": "c8ddb966abd94a59b4d2e0861d4b6b01",
        // "Content-Type": "application/json"
    },
    // mode: "no-cors",
}

//fetch("https://api.football-data.org/v4/persons/2019/matches?status=FINISHED",options)
fetch("http://api.football-data.org/v2/teams/", options)
.then((response) => response.json())
.then((json) => {
    console.log(json)
})
.catch(console.log)

