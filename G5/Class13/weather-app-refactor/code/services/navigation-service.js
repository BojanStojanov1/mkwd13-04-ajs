class NavigationService {
    // **** SINGLE PAGE APPLICATION IMPLEMENTATION ****
    constructor(html) {
        this.html = html
    };

    activateItem = (item) => {
        for (const element of this.html.navLinks) {
            element.classList.remove("active")
        }
        item.classList.add("active")
    }

    showPage = (pageElement) => {
        for (let page of this.html.pages) {
            page.style.display = "none"
        }

        pageElement.style.display = "flex"
    }

    toggleTheme() {
        const theme = this.html.themeElement;
        theme.setAttribute('data-bs-theme', theme === "dark" ? 'light' : 'dark')
    }

}

export { NavigationService }