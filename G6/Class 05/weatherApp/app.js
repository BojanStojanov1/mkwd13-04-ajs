document.getElementById("header").innerText = "Weather Alert App";
document.getElementById("greetingResult").innerText = "Welcome to the most accurate weather app!";

//navigation service is responsible for everything connected to the navigation of our app. This is why we keep all the properties and methods here
//we want everything that is connected to the navigation to be in one place
let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    activateItem: function(item){
        for(let navItem of this.navItems){
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function(index){
        for(let page of this.pages){
            page.style.display="none";
        }
        this.pages[index].style.display="block";
    },
    registerEventListeners: function(){
        for(let i=0; i<this.navItems.length;i++){
            this.navItems[i].addEventListener("click", function(){
                navigationService.activateItem(this); //this=> target of the event in our case navItems[i]
                navigationService.displayPage(i);
            })
        }
    }
}
navigationService.registerEventListeners(); //we need to call the function of the object to tell the listener to start listening

let weatherApiService = {
    apiKey: "31b3375edaaf1a0b94cb96483eb94296",
    getWeatherData: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`) //promise
        .then(function(response){ //response is a complex Response that contains the content itself
            response.json() //promise
            .then(function(data){
                console.log(data); //here we have the js objects 
            })
            .catch(function(errorParse){
                console.log(errorParse);
            })

        })
        .catch(function(error){
            console.log(error);
        })
    }
}


let aboutInfo = {
    creator: "G6",
    academy: "Qinshift Academy",
    year: 2025
}
//the uiService contains the logic about everyhing that needs to be shown on the user interface (ui)
let uiService = {
    showAboutInfo: function(){
        document.getElementById("aboutResult").innerHTML=`<h2>This app is created by ${aboutInfo.creator} from the ${aboutInfo.academy}</h2>
        <p><b>${aboutInfo.year}</b></p>`
    }
}

uiService.showAboutInfo();
weatherApiService.getWeatherData("Skopje");