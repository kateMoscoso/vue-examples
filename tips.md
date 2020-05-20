h1. Tipo, MOdelo Vista, Al cambiar los modelos, se cambian las vista

**v-show** no se puede utilizar con templates - con div funciona, se uss para mostrar y cambiar cosas según la iteración del usuario. Usar cuando la propiedad se va a cambia constantemente, ya que, se evita cambiar el estado del DOM. Esta propiedad hace uso de `display: none`
**v-if** sepuede usar con templates - Se usa cuando se tienen que mostrar cosas en el renderizado principal. Usar cuando no se va a cambiar la propiedad constantemente.
**v-on** se puede quitar y poner un @

**v-model** bind del modelo  para poder ser procesado
**v-on:submit.prevent** que no haga el evento del navegador
**template** sirve para que vue los interprete pero no aparecen en el navegador

**Componentes** Para pasarle parametros se usa pa propieddad *props*

Los atrbutos hay que ponerlos con - , no con mayúsculas y minúsculas.

Antipatrones:
* El padre el pasa las propiedades al hijo, esta mal pasarle las propiedades del padre, el hijo lo que tiene que hacer es emitir un evento que el padre tiene que escuchar y cambiar la propiedad.
* 

**watchers** -> a partir de una propiedad que cambia su valor, puedo cambiar otro valor

**Slot** Html desde componente padre, es una api de distribución de contenido que permite que un componente padre le inyecte html a un componente hijo

**LyfeCicle hooks**

**Created** para obtener información de una api Rest
**Mounted** ya tengo disponible el DOM por lo que puedo obtener info del DOM

**router-view**  es el que nos permite pintar las distintas vistas según navegamos por el router

**fetch** https://developer.mozilla.org/es/docs/Web/API/Fetch_API


**this.set**  Para resolver por problemas de reactividd en arrays y objetos. Esto pasa cuando se añade un valor después de que ya existan eston elementos
`this.$set(exchange, 'url', res.exchangeUrl)`
* `exchange` -> objeto
* `'url' `->string propiedad
* `res.exchangeUrl` -> valor propiedad