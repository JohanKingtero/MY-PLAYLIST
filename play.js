"use strict" // Modo estricto para un código más seguro

// Agregar elementos
const bgBody = ["#ba7177", "#a8a8c6", "#f8ded3", "#95aeb8", "#f5eda6", "#ffcbdc", "#dcf3f3"]; // Colores de fondo para el cuerpo
const body = document.body; // Referencia al elemento body del documento
const player = document.querySelector(".player"); // Referencia al elemento con la clase "player"
const playerHeader = player.querySelector(".player__header"); // Referencia al elemento con la clase "player__header" dentro del reproductor
const playerControls = player.querySelector(".player__controls"); // Referencia al elemento con la clase "player__controls" dentro del reproductor
const playerPlayList = player.querySelectorAll(".player__song"); // Referencia a todos los elementos con la clase "player__song" dentro del reproductor
const playerSongs = player.querySelectorAll(".audio"); // Referencia a todos los elementos con la clase "audio" dentro del reproductor
const playButton = player.querySelector(".play"); // Referencia al botón de reproducción
const nextButton = player.querySelector(".next"); // Referencia al botón de siguiente
const backButton = player.querySelector(".back"); // Referencia al botón de retroceso
const playlistButton = player.querySelector(".playlist"); // Referencia al botón de lista de reproducción
const slider = player.querySelector(".slider"); // Referencia al elemento de slider
const sliderContext = player.querySelector(".slider__context"); // Referencia al contexto del slider
const sliderName = sliderContext.querySelector(".slider__name"); // Referencia al nombre del slider
const sliderTitle = sliderContext.querySelector(".slider__title"); // Referencia al título del slider
const sliderContent = slider.querySelector(".slider__content"); // Referencia al contenido del slider
const sliderContentLength = playerPlayList.length - 1; // Longitud del contenido del slider (cantidad de canciones)
const sliderWidth = 100; // Ancho del slider en porcentaje
let left = 0; // Valor inicial para la posición del slider
let count = 0; // Contador para llevar el seguimiento de la canción actual
let song = playerSongs[count]; // Referencia a la canción actual
let isPlay = false; // Bandera para verificar si se está reproduciendo una canción
const pauseIcon = playButton.querySelector("img[alt = 'pause-icon']"); // Referencia al ícono de pausa
const playIcon = playButton.querySelector("img[alt = 'play-icon']"); // Referencia al ícono de reproducción
const progres = player.querySelector(".progres"); // Referencia al elemento de progreso
const progresFilled = progres.querySelector(".progres__filled"); // Referencia al elemento de progreso lleno
let isMove = false; // Bandera para verificar si se está moviendo el progreso

// Funciones

function openPlayer() {
    playerHeader.classList.add("open-header"); // Agregar la clase "open-header" al header del reproductor
    playerControls.classList.add("move"); // Agregar la clase "move" a los controles del reproductor
    slider.classList.add("open-slider"); // Agregar la clase "open-slider" al slider
  }
  function closePlayer() {
    playerHeader.classList.remove("open-header"); // Eliminar la clase "open-header" del header del reproductor
    playerControls.classList.remove("move"); // Eliminar la clase "move" de los controles del reproductor
    slider.classList.remove("open-slider"); // Eliminar la clase "open-slider" del slider
  }

  // Funcion siguiente cancion  el contador me busca la cancin que esta sonando la puedo adelantar con el condicoan finsada
  function next(index) {
    count = index || count; // Establecer el valor del contador al índice proporcionado o al valor actual
    if (count == sliderContentLength) {
      count = count; // Si el contador es igual a la longitud del contenido, mantener el valor actual
      return;
    }
    left = (count + 1) * sliderWidth; // Calcular la posición del slider para la siguiente canción
    left = Math.min(left, (sliderContentLength) * sliderWidth); // Asegurarse de que la posición no supere el límite
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`; // Aplicar la transformación CSS para desplazar el slider
    count++; // Incrementar el contador
    run(); // Ejecutar la función run() para actualizar la canción actual y el contexto del slider
  }
  function back(index) {
    count = index || count; // Establecer el valor del contador al índice proporcionado o al valor actual
    if (count == 0) {
      count = count; // Si el contador es igual a 0, mantener el valor actual
      return;
    }
    left = (count - 1) * sliderWidth; // Calcular la posición del slider para la canción anterior
    left = Math.max(0, left); // Asegurarse de que la posición no sea menor que 0
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`; // Aplicar la transformación CSS para desplazar el slider
    count--; // Decrementar el contador
    run(); // Ejecutar la función run() para actualizar la canción actual y el contexto del slider
  }
  function changeSliderContext() {
    sliderContext.style.animationName = "opacity"; // Establecer la animación de opacidad en el contexto del slider
    sliderName.textContent = playerPlayList[count].querySelector(".player__title").textContent; // Establecer el nombre del slider basado en el título de la canción actual
    sliderTitle.textContent = playerPlayList[count].querySelector(".player__song-name").textContent; // Establecer el título del slider basado en el nombre de la canción actual
    if (sliderName.textContent.length > 16) {
      const textWrap = document.createElement("span");
      textWrap.className = "text-wrap";
      textWrap.innerHTML = sliderName.textContent + " " + sliderName.textContent; // Envolver el texto en un span adicional para animaciones de desplazamiento
      sliderName.innerHTML = "";
      sliderName.append(textWrap);
    }
    if (sliderTitle.textContent.length >= 18) {
      const textWrap = document.createElement("span");
      textWrap.className = "text-wrap";
      textWrap.innerHTML = sliderTitle.textContent + " " + sliderTitle.textContent; // Envolver el texto en un span adicional para animaciones de desplazamiento
      sliderTitle.innerHTML = "";
      sliderTitle.append(textWrap);
    }
  }
  function changeBgBody() {
    body.style.backgroundColor = bgBody[count]; // Cambiar el color de fondo del cuerpo basado en el valor del contador
  }
  function selectSong() {
    song = playerSongs[count]; // Establecer la canción actual basada en el valor del contador
    for (const item of playerSongs) {
      if (item != song) {
        item.pause(); // Pausar las canciones que no sean la actual
        item.currentTime = 0; // Reiniciar el tiempo de reproducción de las canciones que no sean la actual
      }
    }
    if (isPlay) song.play(); // Si la canción está en reproducción, iniciar la reproducción de la canción actual
  }
  function run() {
    changeSliderContext(); // Actualizar el contexto del slider
    changeBgBody(); // Cambiar el color de fondo del cuerpo
    selectSong(); // Seleccionar la canción actual y administrar la reproducción
  }
  function playSong() {
    if (song.paused) {
      song.play(); // Si la canción está en pausa, iniciar la reproducción
      playIcon.style.display = "none"; // Ocultar el ícono de reproducción
      pauseIcon.style.display = "block"; // Mostrar el ícono de pausa
    } else {
      song.pause(); // Si la canción está en reproducción, pausarla
      isPlay = false;  // Actualizar la bandera de reproducción a falso
      playIcon.style.display = ""; // Mostrar el ícono de reproducción
      pauseIcon.style.display = ""; // Mostrar el ícono de reproducción
    }
  }
  function progresUpdate() {
    const progresFilledWidth = (this.currentTime / this.duration) * 100 + "%"; // Calcular el ancho del progreso lleno en base al tiempo actual de reproducción
    progresFilled.style.width = progresFilledWidth; // Establecer el ancho del progreso lleno
    if (isPlay && this.duration == this.currentTime) {
      next(); // Si la canción ha terminado y hay una siguiente canción, reproducir la siguiente canción
    }
    if (count == sliderContentLength && song.currentTime == song.duration) {
      playIcon.style.display = "block"; // Mostrar el ícono de reproducción
      pauseIcon.style.display = ""; // Ocultar el ícono de pausa
      isPlay = false; // Actualizar la bandera de reproducción a falso
    }
  }
  function scurb(e) {
    // Si usamos e.offsetX, tenemos problemas para establecer el tiempo de la canción, cuando el mousemove se está ejecutando
    const currentTime = ((e.clientX - progres.getBoundingClientRect().left) / progres.offsetWidth) * song.duration; // Calcular el tiempo actual de reproducción en base a la posición del puntero
    song.currentTime = currentTime; // Establecer el tiempo actual de reproducción de la canción
  }
  function durationSongs() {
    let min = parseInt(this.duration / 60); // Calcular los minutos de duración de la canción
    if (min < 10) min = "0" + min; // Agregar un cero inicial si los minutos son menores a 10
    let sec = parseInt(this.duration % 60); // Calcular los segundos de duración de la canción
    if (sec < 10) sec = "0" + sec; // Agregar un cero inicial si los segundos son menores a 10
    const playerSongTime = `${min}:${sec}`; // Formatear el tiempo de duración de la canción
    this.closest(".player__song").querySelector(".player__song-time").append(playerSongTime); // Agregar el tiempo de duración a la canción correspondiente en la lista de reproducción
  }

  changeSliderContext(); // Actualizar el contexto del slider

  // Agregar eventos
  sliderContext.addEventListener("click", openPlayer); // Abrir el reproductor al hacer clic en el contexto del slider
  sliderContext.addEventListener("animationend", () => sliderContext.style.animationName = ''); 
  playlistButton.addEventListener("click", closePlayer); // Cerrar el reproductor al finalizar la transición del contexto del slider
  nextButton.addEventListener("click", () => {
    next(0)
  }); // Reproducir la siguiente canción al hacer clic en el botón de siguiente
  backButton.addEventListener("click", () => {
    back(0)
  }); // Reproducir la canción anterior al hacer clic en el botón de retroceso
  playButton.addEventListener("click", () => {
    isPlay = true;
    playSong();
  }); // Reproducir o pausar la canción al hacer clic en el botón de reproducción
  
  // Agregar eventos a cada canción del reproductor
  playerSongs.forEach(song => {
    song.addEventListener("loadeddata", durationSongs); // Escuchar el evento "loadeddata" para obtener la duración de la canción
    song.addEventListener("timeupdate", progresUpdate); // Escuchar el evento "timeupdate" para actualizar el progreso de reproducción de la canción
  });
  progres.addEventListener("pointerdown", (e) => {
    scurb(e); // Llamar a la función "scurb" al hacer clic en el progreso
    isMove = true; // Establecer la bandera de movimiento a true
  });
  document.addEventListener("pointermove", (e) => {
    if (isMove) {
      scurb(e);  // Llamar a la función "scurb" al mover el puntero si la bandera de movimiento está activada
      song.muted = true; // Silenciar la canción mientras se está moviendo el progreso
    }
  });
  document.addEventListener("pointerup", () => {
    isMove = false; // Establecer la bandera de movimiento a false al soltar el puntero
    song.muted = false; // Activar el sonido de la canción después de mover el progreso
  });
  playerPlayList.forEach((item, index) => {
    item.addEventListener("click", function () {
      if (index > count) {
        next(index - 1); // Reproducir la siguiente canción si se hace clic en una canción más adelante en la lista
        return;
      }
      if (index < count) {
        back(index + 1); // Reproducir la canción anterior si se hace clic en una canción anterior en la lista
        return;
      }
    });
  });
