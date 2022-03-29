const scoreDiv = document.querySelector("div.scoreboard") // Find the scoreboard div in our html
let tableHeaders = ["Id", "isDisplayed", "Title1", "Title2", "URL", "ImageName", "isImgDownloaded", "ImageURL"]
const createScoreboardTable = () => {
    while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild) // Remove all children from scoreboard div (if any)
    let scoreboardTable = document.createElement('table') // Create the table itself
    scoreboardTable.className = 'scoreboardTable'
    let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
    scoreboardTableHead.className = 'scoreboardTableHead'
    let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
    // Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
    tableHeaders.forEach(header => {
        let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
    })
    scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
    scoreboardTable.append(scoreboardTableHead)
    let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
    scoreboardTableBody.className = "scoreboardTable-Body"
    scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
    scoreDiv.append(scoreboardTable) // Appends the table to the scoreboard div
}
// The function below will accept a single score and its index to create the global ranking
const appendScores = (singleScore, singleScoreIndex) => {
    console.log("singleScoreIndex", singleScore, singleScoreIndex);
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    // Lines 72-85 create the 5 column cells that will be appended to the current table row
    let scoreRanking = document.createElement('td')
    scoreRanking.innerText = singleScoreIndex
    let usernameData = document.createElement('td')
    usernameData.innerText = singleScore.isDisplayed
    let scoreData = document.createElement('td')
    scoreData.innerText = singleScore.Title1
    let timeData = document.createElement('td')
    timeData.innerText = singleScore.Title2
    let accuracyData = document.createElement('td')
    accuracyData.innerText = singleScore.URL

    let ImageName = document.createElement('td')
    ImageName.innerText = singleScore.ImageName

    let isImgDownloaded = document.createElement('td')
    isImgDownloaded.innerText = singleScore.isImgDownloaded

    let ImageURL = document.createElement('td')
    ImageURL.innerText = singleScore.ImageURL

    scoreboardTableBodyRow.append(scoreRanking, usernameData, scoreData, timeData, accuracyData,ImageName,isImgDownloaded,ImageURL) // Append all 5 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
}
const getScores = () => {
    var scores = {
        products: {
            "1": {
                "Id": "1",
                "isDisplayed": "Yes",
                "Title1": "Microsoft",
                "Title2": "India",
                "URL": "abc",
                "ImageName": "Microsoft Logo",
                "isImgDownloaded": "Yes",
                "ImageURL": "xyz"
            },
            "2": {
                "Id": "2",
                "isDisplayed": "Yes",
                "Title1": "Google",
                "Title2": "India",
                "URL": "abc",
                "ImageName": "Google Logo",
                "isImgDownloaded": "Yes",
                "ImageURL": "xyz"
            },
            "3": {
                "Id": "3",
                "isDisplayed": "Yes",
                "Title1": "Facebook",
                "Title2": "India",
                "URL": "abc",
                "ImageName": "Facebook Logo",
                "isImgDownloaded": "Yes",
                "ImageURL": "xyz"
            },
            "4": {
                "Id": "4",
                "isDisplayed": "Yes",
                "Title1": "Twitter",
                "Title2": "India",
                "URL": "abc",
                "ImageName": "Twitter Logo",
                "isImgDownloaded": "Yes",
                "ImageURL": "xyz"
            }
        }
    }
    createScoreboardTable() // Clears scoreboard div if it has any children nodes, creates & appends the table
    // Iterates through all the objects in the scores array and appends each one to the table body
    // console.log("scores.products", scores.products);
    const scoreProd = scores.products
    for (object in scoreProd) {
        console.log("scores.products inner", scores.products, object);
        appendScores(scoreProd[object], object) // Creates and appends each row to the table body

    }

}

getScores()