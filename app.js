

const url = "https://api.openweathermap.org/data/2.5/";

const api_key = "5bb1e360c88ace5e3a7f0c8cfe9a34d7"

const setQuery =(e)=> {
    if(e.keyCode ="13") {
      getResult(searchBar.value)
    }
}







const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener("keydown",setQuery)