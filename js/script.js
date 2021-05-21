/*----- constants -----*/
let spaceXLaunches;
const BASE_URL = `https://api.spacexdata.com/v3/launches`


/*----- app's state (variables) -----*/



/*----- cached element references -----*/



/*----- event listeners -----*/



/*----- functions -----*/
$.ajax(`https://api.spacexdata.com/v3/launches?limit=9&order=desc`).then(function (data) {
    spaceXLaunches = data;
    renderData(spaceXLaunches)
    console.log(spaceXLaunches)

})

function renderData(data) {
    let html = spaceXLaunches.map(function (launch) {
        return `
        <article>
        <h2>${launch.mission_name}</h2>
        <p>${launch.launch_year}</p>
        </article>`

    })
    $(`main`).html(html)

}