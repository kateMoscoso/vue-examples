h1. Tipo, MOdelo Vista, Al cambiar los modelos, se cambian las vista

**v-show** no se puede utilizar con templates - con div funciona, se uss para mostrar y cambiar cosas según la iteración del usuario
**v-if** sepuede usar con templates - Se usa cuando se tienen que mostrar cosas en el renderizado principal.
**v-on** se puede quitar y poner un @

**v-model** bind del modelo  para poder ser procesado
**v-on:submit.prevent** que no haga el evento del navegador
**template** sirve para que vue los interprete pero no aparecen en el navegador

**Componentes** Para pasarle parametros se usa pa propieddad *props*

Los atrbutos hay que ponerlos con - , no con mayúsculas y minúsculas.

Antipatrones:
* El padre el pasa las propiedades al hijo, esta mal pasarle las propiedades del padre, el hijo lo que tiene que hacer es emitir un evento que el padre tiene que escuchar y cambiar la propiedad.
* 