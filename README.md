# Inicializacion del proyecto

create-react-app netflix --redux

## Available Scripts

Limpieza

### Importar las librerias

npm install @material-ui/core
npm install firebase
npm install axios
npm install react-router-dom
npm install uuid
npm i styled-components

### App.js Layout inicial

-Creamos las rutas
-Renderizamos login el resto del app condicionando a la existencia de un usuario

### Estilos

- Utilizamos useSyles para crear un infraestrucctura que nos permita asignar estilos a cada uno de los componentes

### Crear las carpetas de componentes : componets , pages

-creamos la infraestructura basica de los componentes que representan una pagna : Home , Login , Paypal , Profile , SignUp

## Estilos en los componentes de pages

--Patron para anadir la infraestructura de estilos a todos los componentes paginas

## Crear la carpeta components, con componentes mas secundarios

--creamos la infraestructura basica de resto de componente

## Estilos en los componentes de la carpeta component

--Patron para anadir la infraestructura de estilos a todos los componentes Banner Header Rows Plan

## Trabajar en el Header

-- Importarmos el logo
-- Anadimos al AppBar una clase transparent condicional. Esta clase se activa si la variable show = true.

- La variable show se convierte en true , cuando hacemos un scroll vertical de mas de 100 px.
  -- Para escuchar cucando el usuario hace un scroll verticla, anadimos un eventListener al objeto window.
  -- El evenlistener esta activo una sola vez cada vez que refrescamos la pagina.
  --Una vez montado el componente, hay que limparlo para que no nos quede colgado el Event listener.
  --Anadimos la rutas tanto al logo como al avatar

## COmenzamos a trabajar en el Banner

--Hemos importado una imagen de backgroundImage
--En react, tememos que acompanar las backgroundImages con estilos objetc-fit , background-site y background-position
--Hemnos posicionado el titulo de la peli , unos botones, y la descripcion
--Como la descripcion viene de la APi, tenemos que truncala para aseguranos de que nos cabe. Para ello , hemos declarado la funcion truncate.
--Hemos anadido un div vacio, que oscurece la imagen hasta fusionarla con el resto del UI, que es oscuro.

## Comenzamos a trabajar en el Login

-- Hemos creado un boton con styled components y le hemos llamado netflix button . Este boton esta totalmente customizado y podemos variar su cualquier coas pasandole props
-Styled components para variar los estilos del input o del boton , pero para su posicionamiento , le damos una clase normal.
-Hemos creado un input personalizado en Styled components. Le hemos llamado NetflixInput. Como InputBase era ya un componente de material ui, pues lo hemos llamado styled(InputBase). Si hubiera sido un input de base serial styled.input.

## Componente Profile

--Hemos trabajado en la distribucion
-- <plans>texto</plans>
--const Plants= ({childres})=>{
return()
}
--Pasar props a los styled components
--en el caso de que el componente no sea binario , p.ej que el tamano sea pequeno , grande , o mediano, netonces lop solucionamos con un funcion

## SignUp

--Renderizado condicional. hemos crado una variable signin
-- si la variable es falsa, desplegamos el formulario
--

## Proceso de Registro / SignIn

--Habilitado una cuenta en firabesa
--Inicial;izado el objeto auth
-- capturado los datos teclados por el usuario dentro del formulario
--registrado email y password con auth.creat...
--- signin con auth.signinwithemail


# Redux
-- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos
--

### Persistencia
--Hemos anadido como un un event listener en app.js este event listener lo trae el objeto auth, escucha cada vez que cambia el usuario en firabase. 
-- cada vez que cambia , vuelve a inyectar el usuario en la cpaa de datos de user Slicer ( redux)
de esta manera recordamos que estamos dentro aunto refresquemos la pagina.


## request
--vamos a construir el componetne row
-- hemos gabilitado todos los endpoints para acceder a endmovie y accedemos a la informacion clasificada por eso

## Llamadas a la api
--Con useeffect , hacemos llamas asyncronas mediante una funcion , a la que hemos llamdo fetchData
-- esta funcion devuelve request.results.data, que es un array con todas las peliculas
-- las desplegamos en el UI