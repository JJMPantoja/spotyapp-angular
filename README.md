# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.


## Para correr el proyecto 

Debes de crear en la pagina de Spotify developers una cuenta y crear un proyecto 

Una vez teniendo el proyecto debes de realizar una petición en postman para obtener el token que debes de cambiar en la ruta "src/app/services/SpotifyService".

Debes de modificar el valor que se encuentra justo enfrente de Bearer en los headers de la petición

## Para hacer la petición en Postman

Para hacer la petición en postam debes de agregar la sig URL en una petición POST
https://accounts.spotify.com/api/token

En las opciones debes de seleccionar BODY y escoger el formato x-www-form-urlencode

y deberas mandar tres parametros en el siguiente orden


|           KEY             |              Valor        |
----------------------------|---------------------------|
|       grant_type          |   client_credentials      |
|       client_id           |   leer (a)                |
|     client_secret         |   leer (b)                |
----------------------------|---------------------------|


a) En su valor debes colocar el client_id que te de tu proyecto de spotify.
b) En su valor debes colocar el client_secret que te de tu proyecto de spotify