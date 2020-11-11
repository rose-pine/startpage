window.onload = function() {
    this.initSearchBar()
}

function initSearchBar() {
    const searchBarInput = document.getElementById("search-bar-input")
    
    searchBarInput.value = ""
    searchBarInput.focus()

    searchBarInput.addEventListener("keypress", (event) => {
        if (event.key !== 'Enter') return

        const searchEnginer = "https://www.duckduckgo.com/?q="
        const endQuery = "&atb=v225-7&ia=web"
       
        document.location = searchEnginer + searchBarInput.value.replace(/\ /g, "+") + endQuery
    })
}
