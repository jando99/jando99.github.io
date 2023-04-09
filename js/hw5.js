//js for hw5
//part1
//gets data from user
function hw5p1Form() {
    let nameInput = document.getElementById("nameInput").value;
    let ageGroup = document.querySelector('input[name="ageGroup"]:checked');
    let browserInputs = document.querySelectorAll('input[name="browser[]"]:checked');
    let movieSelect = document.getElementById("movieSelect").value;
    let ansData = document.getElementById("ansData");
    //if no data entered then error message appears
    //else data is saved
    if (nameInput === "" || ageGroup === null || browserInputs.length === 0 || movieSelect === "") 
    {
        ansData.innerHTML = "Error! Please fill in all required fields!";
    } 
    else 
    {
        ansData.innerHTML = "Thanks, your data was submitted!";
    }
}

//part2
//if site is clicked then opens new tab with new website
function externalSite1() 
{
    let website = document.getElementById("menu1").value;
    if (website !== "") 
    {
        window.open(website, "_blank");
    }
}

//if site is clicked then opens new tab with new website
function externalSite2() 
{
    let website = document.getElementById("menu2").value;
    if (website !== "") 
    {
        window.open(website, "_blank");
    }
}

//part3

//array containing data
var stateData = 
[
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"]
];

function census() 
{
    //transforming user input to uppercase
    let userInput = document.getElementById("userInput").value.toUpperCase();
    let stateInfo = "";
    let foundState = false;

    //searching for vaild state in array
    for (let i = 0; i < stateData.length; i++) 
    {
      let stateAbbr = stateData[i][0].toUpperCase();
      let stateName = stateData[i][1].toUpperCase();
      let capital = stateData[i][2];
      let population = stateData[i][3];
      
      if (userInput === stateAbbr || userInput === stateName) 
      {
        stateInfo = "Thanks for your inquiry, here is the information you requested:<br>";
        stateInfo += "State abbr = " + stateAbbr + "<br>";
        stateInfo += "State Name = " + stateName + "<br>";
        stateInfo += "Capital = " + capital + "<br>";
        stateInfo += "Population = " + population + "<br>";
        foundState = true;
      }
    }

    //if not valid state then user is reminded to input vaild entry
    if (!foundState) 
    {
      stateInfo = "Sorry, we do not have information about this state! We only have information about: ";
      for (var i = 0; i < stateData.length; i++) 
      {
        stateInfo += stateData[i][0] + " - " + stateData[i][1];
        if (i !== stateData.length - 1) 
        {
          stateInfo += ", ";
        }
      }
    }
    //output ans
    document.getElementById("ansCensus").innerHTML = stateInfo;
}
