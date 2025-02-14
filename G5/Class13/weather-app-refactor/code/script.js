import { ApiService } from "./services/api-service.js";
import { UIService } from "./services/ui-service.js";
import { NavigationService } from "./services/navigation-service.js";

const html = {
    navLinks: document.getElementsByClassName('nav-link'),
    pages: document.getElementsByClassName('page'),
    searchBtn: document.getElementById("searchBtn"),
    forecastResult: document.getElementById("forecastResult"),
    tableResult: document.getElementById("tableResult"),
    searchInput: document.getElementById('searchInput'),
    themeElement: document.documentElement.getAttribute('data-bs-theme')
};



class App {
    constructor(html) {
        this.html = html;
        this.apiService = new ApiService();
        this.navigationService = new NavigationService(html);
        this.uiService = new UIService(html);
    }

    #_registerListeners = () => {
        for (let i = 0; i < this.html.navLinks.length; i++) {
            const element = this.html.navLinks[i];

            element.addEventListener("click", () => {
                this.navigationService.showPage(this.html.pages[i]);
                this.navigationService.activateItem(element);
            })
        };

        html.searchBtn.addEventListener("click", async (event) => {
            event.preventDefault();
            const searchValue = this.html.searchInput.value;
            const results = await this.apiService.searchForecast(searchValue);
            this.uiService.printResult(results.forecast)
            this.uiService.printHourlyData(results.forecast.list)
        });
    };

    async init() {
        this.#_registerListeners();

        const results = await this.apiService.searchForecast();
        this.uiService.printResult(results.forecast);
        this.uiService.printHourlyData(results.forecast.list)
    }

};

const app = new App(html);

app.init()
    .then(() => { console.info('App is initialized and ready to be used! 🚀🚀🚀') })
    .catch((error) => { console.error('App failed to initilize ❌❌❌', error) })





