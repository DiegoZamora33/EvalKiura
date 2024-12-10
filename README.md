
# Developer Screen App

![App Icon](src/assets/icons/icon.webp)

## Descripción

Esta aplicación muestra un `WebView` para cargar la página `https://diegozamora.com.mx/`, con un `ActivityIndicator` que se muestra mientras la página está cargando. Es un proyecto básico para demostrar el uso de `WebView`, `useTheme` y gestión de carga en React Native.

---

## Características

- **Carga de contenido web** utilizando `WebView`.
- **Indicador de actividad** mientras el contenido se carga.
- **Compatibilidad con temas** utilizando `useTheme` para cambiar dinámicamente el color del `ActivityIndicator`.

---

## Requisitos

1. **Node.js**: Instalar desde [Node.js](https://nodejs.org/).
2. **React Native CLI**: Configura tu entorno de desarrollo de acuerdo con la [documentación oficial de React Native](https://reactnative.dev/docs/environment-setup).

---

## Instalación y Ejecución

### Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en Android

```bash
npx react-native run-android
```

### Ejecutar en iOS

```bash
npx react-native run-ios
```

> Asegúrate de tener configurado correctamente tu entorno para desarrollar en iOS o Android antes de ejecutar estos comandos.

---

## Estructura del Proyecto

```
src/
├── assets/
│   └── icons/
│       └── icon.webp
├── components/
│   └── post/
│       └── PostComponent.tsx
├── screens/
│   └── DeveloperScreen.js
```

---

## Captura de Pantalla

> *(Puedes agregar una captura de pantalla de la aplicación aquí más adelante si lo deseas.)*

---

## Licencia

Este proyecto es de uso personal o educativo. No está destinado para uso comercial.
