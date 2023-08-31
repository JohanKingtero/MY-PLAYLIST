# Playlist-kpop
Este código de JavaScript tiene como objetivo controlar un reproductor de música en una página web. A continuación, te explicaré paso a paso cómo funciona:
1. En la primera línea, se utiliza la directiva `"use strict"` para asegurar un código más limpio y evitar errores comunes.
2. 2. Se declaran algunas variables constantes para almacenar elementos del DOM, como los botones de reproducción, avance y retroceso, la lista de reproducción, etc.
Este fragmento de código es JavaScript y define una serie de variables y constantes relacionadas con la reproducción de música en un reproductor de audio en línea. Aquí está la explicación de cada línea:

1. `const bgBody = [...]`: Se declara una constante llamada `bgBody` que es un array de colores en formato hexadecimal. Estos colores podrían ser utilizados para establecer el fondo de la página.

2. `const body = document.body;`: Se declara una constante llamada `body` que almacena una referencia al elemento `body` del documento HTML.

3. `const player = document.querySelector(".player");`: Se declara una constante llamada `player` que almacena una referencia al primer elemento con la clase CSS "player" en el documento HTML. Presumiblemente, este elemento representa el reproductor de música.

4. `const playerHeader = player.querySelector(".player__header");`: Se declara una constante llamada `playerHeader` que almacena una referencia al primer elemento con la clase CSS "player__header" dentro del elemento `player`. Esto podría referirse a la sección del encabezado del reproductor.

5. `const playerControls = player.querySelector(".player__controls");`: Se declara una constante llamada `playerControls` que almacena una referencia al primer elemento con la clase CSS "player__controls" dentro del elemento `player`. Esto podría referirse a la sección de los controles del reproductor.

6. `const playerPlayList = player.querySelectorAll(".player__song");`: Se declara una constante llamada `playerPlayList` que almacena una colección de elementos con la clase CSS "player__song" dentro del elemento `player`. Presumiblemente, estos elementos representan las canciones de la lista de reproducción.

7. `const playerSongs = player.querySelectorAll(".audio");`: Se declara una constante llamada `playerSongs` que almacena una colección de elementos con la clase CSS "audio" dentro del elemento `player`. Estos elementos podrían representar los elementos de audio asociados a cada canción.

8. `const playButton = player.querySelector(".play");`: Se declara una constante llamada `playButton` que almacena una referencia al primer elemento con la clase CSS "play" dentro del elemento `player`. Esto podría referirse al botón de reproducción.

9. `const nextButton = player.querySelector(".next");`: Se declara una constante llamada `nextButton` que almacena una referencia al primer elemento con la clase CSS "next" dentro del elemento `player`. Esto podría referirse al botón de siguiente canción.

10. `const backButton = player.querySelector(".back");`: Se declara una constante llamada `backButton` que almacena una referencia al primer elemento con la clase CSS "back" dentro del elemento `player`. Esto podría referirse al botón de canción anterior.

11. `const playlistButton = player.querySelector(".playlist");`: Se declara una constante llamada `playlistButton` que almacena una referencia al primer elemento con la clase CSS "playlist" dentro del elemento `player`. Esto podría referirse al botón de mostrar/ocultar la lista de reproducción.

12. `const slider = player.querySelector(".slider");`: Se declara una constante llamada `slider` que almacena una referencia al primer elemento con la clase CSS "slider" dentro del elemento `player`. Esto podría referirse a un control deslizante de reproducción.

13.`const sliderContext = player.querySelector(".slider__context");`: Se declara una constante llamada `sliderContext` que almacena una referencia al primer elemento con la clase CSS "slider__context" dentro del elemento `player`. Esto podría referirse al contexto o información adicional del control deslizante.

14. `const sliderName = sliderContext.querySelector(".slider__name");`: Se declara una constante llamada `sliderName` que almacena una referencia al primer elemento con la clase CSS "slider__name" dentro del elemento `sliderContext`. Esto podría referirse al nombre de la canción que se muestra en el control deslizante.

15. `const sliderTitle = sliderContext.querySelector(".slider__title");`: Se declara una constante llamada `sliderTitle` que almacena una referencia al primer elemento con la clase CSS "slider__title" dentro del elemento `sliderContext`. Esto podría referirse al título de la canción que se muestra en el control deslizante.

16. `const sliderContent = slider.querySelector(".slider__content");`: Se declara una constante llamada `sliderContent` que almacena una referencia al primer elemento con la clase CSS "slider__content" dentro del elemento `slider`. Esto podría referirse al contenido del control deslizante, como la imagen del álbum de la canción.

17. `const sliderContentLength = playerPlayList.length - 1;`: Se declara una constante llamada `sliderContentLength` que almacena la longitud de la lista de reproducción (`playerPlayList`) menos 1. Esto podría utilizarse para determinar la cantidad de contenido en el control deslizante.

18. `const sliderWidth = 100;`: Se declara una constante llamada `sliderWidth` que almacena el valor numérico 100. Esto podría referirse al ancho del control deslizante en píxeles.

19. `let left = 0;`: Se declara una variable llamada `left` e inicializa con el valor numérico 0. Esta variable podría utilizarse para rastrear la posición izquierda del control deslizante.

20. `let count = 0;`: Se declara una variable llamada `count` e inicializa con el valor numérico 0. Esta variable podría utilizarse para rastrear el índice de la canción actual en la lista de reproducción.

21. `let song = playerSongs[count];`: Se declara una variable llamada `song` y se le asigna el elemento de audio correspondiente al índice `count` en la colección `playerSongs`. Esto podría referirse a la canción actual que se está reproduciendo.

22. `let isPlay = false;`: Se declara una variable llamada `isPlay` e inicializa con el valor booleano `false`. Esta variable podría utilizarse para indicar si la reproducción está en curso o no.

23. `const pauseIcon = playButton.querySelector("img[alt='pause-icon']");`: Se declara una constante llamada `pauseIcon` que almacena una referencia al primer elemento `<img>` dentro del elemento `playButton` cuyo atributo `alt` tiene el valor "pause-icon". Esto podría referirse al ícono de pausa en el botón de reproducción.

24. `const playIcon = playButton.querySelector("img[alt='play-icon']");`: Se declara una constante llamada `playIcon` que almacena una referencia al primer elemento `<img>` dentro del elemento `play


3. Se inicializan algunas variables para llevar un seguimiento del estado del reproductor, como la posición actual en la lista de reproducción, si se está reproduciendo una canción, etc.

4. A continuación, se definen varias funciones que serán utilizadas posteriormente:

   - `openPlayer()` y `closePlayer()`: Estas funciones agregan y eliminan clases CSS para abrir y cerrar visualmente el reproductor.
     ejemplo visto en clase:
     function next(index) {
    count = index || count;
    if (count == sliderContentLength) {
      count = count;
      return;
    }
    left = (count + 1) * sliderWidth;
    left = Math.min(left, (sliderContentLength) * sliderWidth);
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
    count++;
    run();
  }
  function back(index) {
    count = index || count;
    if (count == 0) {
      count = count;
      return;
    }
    left = (count - 1) * sliderWidth;
    left = Math.max(0, left);
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
    count--;
    run();
  }

  Función línea 41 a 52 
La función `next(index)` permite cambiar a la siguiente canción en el reproductor de música. Aquí está el desglose paso a paso del código:

1. `count = index || count;`: Esta línea asigna el valor de `index` a la variable `count`, si `index` tiene un valor válido. Si `index` es `undefined` o `null`, se asigna el valor actual de `count`. Esto permite que la función acepte un índice como argumento opcional para saltar directamente a una canción específica en la lista de reproducción.

2. `if (count == sliderContentLength) { count = count; return; }`: Esta línea verifica si `count` es igual a `sliderContentLength`, que es el índice máximo de la lista de reproducción. Si es así, la función no hace nada y retorna, ya que ya se ha alcanzado el final de la lista de reproducción.

3. `left = (count + 1) * sliderWidth;`: Esta línea calcula la nueva posición del control deslizante `left` multiplicando `(count + 1)` por `sliderWidth`. Esto determina cuánto se debe desplazar el control deslizante hacia la izquierda para mostrar la siguiente canción.

4. `left = Math.min(left, (sliderContentLength) * sliderWidth);`: Esta línea asegura que el valor de `left` no exceda el ancho máximo permitido del control deslizante. Si `left` es mayor que `(sliderContentLength) * sliderWidth`, se establece en el valor máximo permitido.

5. `sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;`: Esta línea actualiza la propiedad `transform` del estilo del elemento `sliderContent` para desplazar horizontalmente el contenido del control deslizante. El valor `-left%` se utiliza para aplicar una transformación de desplazamiento hacia la izquierda.

6. `count++;`: Esta línea incrementa el valor de `count` en 1, para indicar que se ha cambiado a la siguiente canción en la lista de reproducción.

7. `run();`: Esta línea llama a la función `run()`, que presumiblemente realiza alguna lógica adicional relacionada con la reproducción de la canción. No se proporciona el código de la función `run()` en el fragmento proporcionado.


siguientes partes pistas base

- `changeSliderContext()`: Esta función actualiza la información que se muestra en el reproductor, como el título y nombre de la canción actual.

   - `changeBgBody()`: Esta función cambia el color de fondo del cuerpo de la página web según la posición actual en la lista de reproducción.

   - `selectSong()`: Esta función selecciona la canción actual y pausa todas las demás canciones en la lista de reproducción.

   - `run()`: Esta función se encarga de ejecutar las tareas necesarias cuando se cambia de canción, como actualizar la información en el reproductor, cambiar el color de fondo y seleccionar la canción adecuada.

   - `playSong()`: Esta función se encarga de reproducir o pausar la canción actual. También actualiza los iconos de reproducción/pausa según el estado de reproducción.

   - `progresUpdate()`: Esta función se ejecuta durante la reproducción de una canción y actualiza la barra de progreso de la canción. También comprueba si la canción ha finalizado y, en ese caso, pasa a la siguiente canción.

   - `scurb(e)`: Esta función se utiliza para ajustar el tiempo de reproducción de la canción cuando el usuario interactúa con la barra de progreso.

   - `durationSongs()`: Esta función se ejecuta cuando se carga una canción y muestra la duración de la canción en el reproductor.

5. Se llama a la función `changeSliderContext()` para inicializar la información del reproductor.

6. Se añaden varios eventos a diferentes elementos del DOM:

   - `sliderContext.addEventListener("click", openPlayer)`: Abre el reproductor cuando se hace clic en el contexto del reproductor.

   - `sliderContext.addEventListener("animationend", () => sliderContext.style.animationName = '')`: Elimina la animación de opacidad del contexto del reproductor una vez que finaliza.

   - `playlistButton.addEventListener("click", closePlayer)`: Cierra el reproductor cuando se hace clic en el botón de lista de reproducción.

   - `nextButton.addEventListener("click", () => { next(0) })`: Avanza a la siguiente canción cuando se hace clic en el botón de avance.

   - `backButton.addEventListener("click", () => { back(0) })`:

 Retrocede a la canción anterior cuando se hace clic en el botón de retroceso.

   - `playButton.addEventListener("click", () => { isPlay = true; playSong() })`: Inicia o pausa la reproducción de la canción actual cuando se hace clic en el botón de reproducción.

   - `playerSongs.forEach(song => { ... })`: Añade varios eventos a cada canción de la lista de reproducción, como la carga de datos, la actualización del progreso y la duración de la canción.

   - `progres.addEventListener("pointerdown", (e) => { scurb(e); isMove = true })`: Inicia el seguimiento del movimiento del ratón cuando se hace clic en la barra de progreso.

   - `document.addEventListener("pointermove", (e) => { ... })`: Actualiza el tiempo de reproducción de la canción y silencia el sonido durante el movimiento del ratón en la barra de progreso.

   - `document.addEventListener("pointerup", () => { isMove = false; song.muted = false })`: Detiene el seguimiento del movimiento del ratón y restaura el sonido una vez que se suelta el botón del ratón.

   - `playerPlayList.forEach((item, index) => { ... })`: Añade eventos a cada canción de la lista de reproducción para saltar a la posición correspondiente cuando se hace clic en ellas.
