# electron-react-app

An Electron application with React

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
# Ejercicios de Introducción a React (Parte 1)

Este proyecto contiene una serie de ejercicios prácticos diseñados para aprender los conceptos fundamentales de React, tal como se describen en los apuntes de la unidad.

## 🚀 Conceptos Clave Practicados

Estos ejercicios cubren los pilares de React:
* **Creación de Componentes:** Definir componentes funcionales en archivos `.jsx` separados.
* **Props (Propiedades):** Pasar datos de un componente padre a un componente hijo (ej. `SaludoPersonalizado`).
* **Estado (`useState`):** Manejar estado interno interactivo en un componente (ej. `BotonEstado`).
* **Renderizado Condicional:** Cambiar la apariencia de un componente basándose en su estado o props (ej. `BotonEstado`).
* **Eventos (`onClick`):** Hacer que los componentes respondan a la interacción del usuario.
* **Renderizado de Listas (`.map()`):** Mostrar un array de datos como una lista en HTML, usando la prop `key`.

---

## 📋 Ejercicios Resueltos

### Ejercicio 1: `DatosPersonales`
* **Objetivo:** Crear un componente básico que muestra información estática (nombre, edad, ciudad).
* **Concepto:** Creación y exportación de un componente funcional simple.

### Ejercicio 2: `SaludoPersonalizado`
* **Objetivo:** Crear un componente que recibe `props` (`nombre` y `hora`) y muestra un saludo diferente (`Buenos días`, `Buenas tardes`, `Buenas noches`) basado en la hora.
* **Concepto:** Uso de `props` para pasar datos y lógica condicional (`if/else`) dentro de un componente.

### Ejercicio 3: `BotonEstado` (Versión Interactiva)
* **Objetivo:** Crear dos botones ("Conectar" y "Desconectar") que funcionan como un interruptor (toggle). Solo uno está activo a la vez.
    * "Conectar" es verde y clicable cuando está desconectado.
    * "Desconectar" es rojo y clicable cuando está conectado.
* **Concepto:** Manejo de estado (`useState`) en el componente padre (`App.jsx`) para controlar el estado de componentes hijos, paso de funciones (`onClick`) como props y renderizado condicional.

### Ejercicio 4: `ListaTareas`
* **Objetivo:** Crear un componente que recibe un array de tareas como `prop` y lo muestra como una lista numerada (`<ul>`/`<li>`).
* **Concepto:** Renderizado de listas usando el método `.map()` y la importancia de la prop `key` para la optimización de React.