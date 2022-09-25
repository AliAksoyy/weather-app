
const api_key = "5bb1e360c88ace5e3a7f0c8cfe9a34d7";
const url = "https://api.openweathermap.org/data/2.5/"



const setQuery =(e)=> {
    if(e.keyCode ="13") {
      getResult(searchBar.value)
    }
}

const getResult = (cityname) => {
  let query = `${url}weather?q=${cityname}&appid=${api_key}$unit=metric$lang=tr`
  console.log(query)

  fetch(query).then((res)=> {
    return res.json()
  })
  .then((data)=> dispalyResult(data))
}

const dispalyResult = (result)=> {
  let city =document.querySelector(".city")
  city.innerText = `${result.name}, ${result.sys.country}`

  let temp = document.querySelector(".temp")
  temp.innerText = `${Math.round(result.main.temp)} °C`;

  let desc = document.querySelector(".desc")
  desc.innerText = result.weather[0].description

  let minmax = document.querySelector(".minmax")
  minmax.innerText = `${Math.round(result.main.temp_min)} °C /
  ${Math.round(result.main.temp_max)} ° C `
}





const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener("keydown",setQuery)