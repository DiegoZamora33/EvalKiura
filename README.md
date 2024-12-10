# EvalKiura

![App Icon](src/assets/icons/icon.webp)

## Descripción

EvalKiura es una aplicación móvil desarrollada en React Native con el objetivo de demostrar habilidades clave en el desarrollo de aplicaciones móviles. La aplicación implementa navegación, una promesa que simula el consumo de una API, soporte para temas claro y oscuro, y cuenta con un ícono personalizado para ofrecer una experiencia visual completa.

---

## Características

- **Navegación**: Uso de navegación entre pantallas para mejorar la estructura de la app.
- **Simulación de API**: Se utiliza una promesa para simular el consumo de datos de una API.
- **Soporte de temas**: Integración de modo oscuro y claro que se adapta automáticamente al tema del sistema.
- **Ícono personalizado**: La aplicación incluye un ícono único para mejorar la presentación visual.
- **Demostración de capacidades**: Todo esto fue implementado para evitar que la aplicación se viera vacía y para resaltar habilidades de desarrollo móvil.

---

## Estructura del Proyecto

```
EvalKiura/
├── android/               # Archivos específicos para la plataforma Android
├── ios/                   # Archivos específicos para la plataforma iOS
├── src/                   # Código fuente de la aplicación
│   ├── assets/            # Recursos estáticos como imágenes, fuentes, etc.
│   │   └── icons/         # Ícono de la aplicación
│   ├── components/        # Componentes reutilizables de la aplicación
│   ├── navigation/        # Configuración de la navegación de la aplicación
│   ├── screens/           # Pantallas principales de la aplicación
│   ├── utils/             # Funciones y utilidades auxiliares
│   └── themes/            # Configuración de temas claro y oscuro
├── .eslintrc.js           # Configuración de ESLint para el linting del código
├── .gitignore             # Archivos y directorios ignorados por Git
├── .prettierrc.js         # Configuración de Prettier para el formateo del código
├── App.tsx                # Componente raíz de la aplicación
├── app.json               # Configuración de la aplicación
├── babel.config.js        # Configuración de Babel para la transpilación del código
├── index.js               # Punto de entrada de la aplicación
├── jest.config.js         # Configuración de Jest para pruebas unitarias
├── metro.config.js        # Configuración de Metro Bundler
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación del proyecto
```

---

## Instalación y Ejecución

### Requisitos Previos

- Tener instalado **Node.js** y el entorno configurado para React Native.
- Contar con **Android Studio** y/o **Xcode** para ejecutar la app en los emuladores correspondientes.

### Pasos para ejecutar

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/DiegoZamora33/EvalKiura.git
   cd EvalKiura
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar en Android**:

   ```bash
   npx react-native run-android
   ```

4. **Ejecutar en iOS**:

   ```bash
   npx react-native run-ios
   ```

---

## Detalles Técnicos

- **Navegación**: Implementada con `@react-navigation` para ofrecer transiciones entre pantallas de manera fluida.
- **Promesa simulada**: Empleada para demostrar el consumo de datos en la app mediante una simulación del comportamiento de una API.
- **Temas dinámicos**: Uso de `useTheme` para detectar y aplicar automáticamente el tema del sistema (oscuro o claro).
- **Ícono**: Se agregó un ícono ubicado en `src/assets/icons/icon.webp` para personalizar la identidad visual de la aplicación.

---

## Propósito del Proyecto

Este proyecto fue creado para demostrar mis capacidades como desarrollador móvil, incluyendo:

1. Integración de navegación y lógica básica.
2. Personalización de la interfaz mediante temas y recursos visuales.
3. Simulación de interacción con una API externa.
4. Buenas prácticas en la estructura y organización del código.

---

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en este repositorio.
