let botonEnviar = document.querySelector("button")
let ciudad = document.querySelector("#input")
let nombreCiudad = document.querySelector("#ciudad")
let temperatura = document.querySelector("#temperatura")
let descripcion = document.querySelector("#descripcion")
let grados = document.querySelector("#grados")
let icon = document.querySelector("#wicon")


function borrarInput(){ciudad.value = ""}

function cargarCiudad() {$.getJSON ("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value +"&appid=95176c8edea30e33338e0eaddd53a916&units=metric",
    function (data)
      {document.querySelector(".container").style.visibility = "visible",
      nombreCiudad.textContent = data.name,
      temperatura.textContent = data.main.temp,
      grados.textContent = "°C",
      descripcion.textContent = data.weather[0].description,
      icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png", borrarInput()
    }
  )
    .fail(function(){alert("El nombre está mal escrito o no existe"), borrarInput()}
    )
  }

function clima()
  {if ((ciudad.value == "") == true)
    {alert("escribe el nombre de una ciudad")
  }
  else cargarCiudad()
}

botonEnviar.addEventListener("click", clima)
