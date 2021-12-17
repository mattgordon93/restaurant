// alert("Hi")

// const { render } = require("ejs")



const divRest = document.querySelector("#divRest")
const btnRest = document.querySelector("#btnRest")
const h2Name = document.querySelector("#h2Name")
const address = document.querySelector("#address")
const city = document.querySelector("#city")
const zip = document.querySelector("#zip")
const h3grades = document.querySelector("#h3grades")

const prevBtn = document.querySelector("prevBtn")
const nextBtn = document.querySelector("nextBtn")

let pageNumber = 0;

prevBtn.onclick = ()=>{
    if (pageNumber > 2)
        pageNumber--;
    fetch("restaurant?pageSize=numListings?pageNumber=pageNumber")
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
}

nextBtn.onclick = ()=>{
    pageNumber++;
    fetch("restaurant?pageSize=numListings?pageNumber=pageNumber")
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
}


btnRest.onclick = ()=>{
    fetch("restaurant?pageSize=numListings?pageNumber=pageNumber")
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
}


function render(data)
{
    //divRest.innerText = JSON.stringify(data)
    h2Name.innerText = data.name
    address.innerText = data.address.building + " " + data.address.street + ","
    city.innerText = data.borough + ","
    zip.innerText = data.address.zipcode
    h3grades.innerText = "Grades"
    var table = document.createElement("table")

    divRest.appendChild(table)

    var heading = document.createElement("tr")
    table.appendChild(heading)

    var headingDate = document.createElement("th")
    headingDate.innerText = "Date"
    heading.appendChild(headingDate)

    var headingGrade = document.createElement("th")
    headingGrade.innerText = "Grade"
    heading.appendChild(headingGrade)

    var headingScore = document.createElement("th")
    headingScore.innerText = "Score"
    heading.appendChild(headingScore)


    

    let length = data.grades.length
    let counter = 0
    
    while (counter < length)
    {
        var tableRow = document.createElement("tr")

        var tableCellDate = document.createElement("td")
        tableCellDate.innerText = data.grades[counter].date.substring(0,10)
        tableRow.appendChild(tableCellDate)

        var tableCellGrade = document.createElement("td")
        tableCellGrade.innerText = data.grades[counter].grade
        tableRow.appendChild(tableCellGrade)

        var tableCellScore = document.createElement("td")
        tableCellScore.innerText = data.grades[counter].score
        tableRow.appendChild(tableCellScore)
        table.appendChild(tableRow)

        counter++
    }
    
}
