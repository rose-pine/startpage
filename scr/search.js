window.onload = function() {
    this.initSearchBar()
}

function initSearchBar() {
    document.getElementById("search-bar-input").value = ""
    document.getElementById("search-bar-input").focus()

    document.getElementById("search-bar-input").addEventListener("keypress", (event) => {
        if (event.key != 'Enter') return

        googleSearchUrl = "https://www.duckduckgo.com/?q="
        otherThing = "&atb=v225-7&ia=web"
        query = document.getElementById("search-bar-input").value.replace(/\ /g, "+")
        document.location = googleSearchUrl + query + otherThing
    })
}
