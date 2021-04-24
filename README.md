# Trabajo Practico React

_Trabajo final del curso de React de CodeHouse 2021. La consigna era crear un e-commerce utilizando React y una base de datos Firebase_

## Consinga

Desarrollarás una app de un e-commerce para poder vender productos de un rubro a elección.

### User story:

- Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.
- Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
- Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
- Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

<img src="./TrabajoPractico/animation.gif" width="100%" height=auto/>

## Pre-Requisitos 📋

Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

```
$ node --version
v0.10.24
```

```
$ npm --version
1.3.21
```

##### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in ` /Applications/Utilities/Terminal.app.`

Please install Homebrew if it's not already done with the following command.

```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

If everything when fine, you should run

```
brew install node
```

##### Node installation on Linux

```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

##### Node installation on Windows

Just go on [officia node.js](https://nodejs.org/en/) website & grab the installer. Also, be sure to have `git` available in your PATH, `npm` might need it.

### Installation and Setup Instructions 🔧

```
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
$ npm install
```

_iniciar el servidor:_

```
npm start
```

_ingresar a la app:_

```
localhost:3000
```

### Languages & tools

- React is used for UI.
- Bootstrap
- firebase: que es el firebase

### Gracias 🎁

- Harol Thomas Cesar Reyes - Profesor
- Marcos Vidal - Tutor
