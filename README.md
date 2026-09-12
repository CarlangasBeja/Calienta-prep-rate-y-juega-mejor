# ⚽ Calienta & Juega

**Aplicación web para preparación física y calentamiento previo a la práctica del fútbol.**

Calienta & Juega es una aplicación web responsive diseñada para ayudar a los jugadores a realizar rutinas de calentamiento antes de partidos y entrenamientos.

La aplicación incluye ejercicios de movilidad, activación, prevención y preparación técnico-táctica, además de un temporizador para ejecutar las rutinas directamente desde el campo.

---

## 🎯 Objetivo del proyecto

El objetivo de **Calienta & Juega** es proporcionar una herramienta sencilla, rápida y accesible que permita realizar un calentamiento estructurado antes de la actividad deportiva.

La aplicación busca facilitar:

* 🏃 Preparación física progresiva.
* ⚽ Activación específica para fútbol.
* 🦵 Movilidad y activación muscular.
* 🛡️ Prevención de lesiones.
* ⏱️ Control del tiempo de cada ejercicio.
* 📊 Registro de percepción del esfuerzo.
* 📱 Uso desde dispositivos móviles.
* 💻 Uso desde computadoras y tablets.

---

## ✨ Características principales

### 🏠 Inicio

La pantalla principal presenta información general de la aplicación y permite realizar un diagnóstico previo considerando:

* Tipo de actividad.
* Tiempo disponible.
* Condiciones climáticas.
* Tipo de superficie.

A partir de estos datos se genera una recomendación de rutina.

### 📋 Rutinas

La aplicación cuenta con diferentes tipos de rutinas:

* **Rutina completa** — 20 minutos.
* **Rutina express** — 10 minutos.
* **Rutina para clima frío** — 15 minutos.

### 🏋️ Biblioteca de ejercicios

La aplicación dispone de una biblioteca de ejercicios organizados con información sobre:

* Nombre del ejercicio.
* Objetivo.
* Dosificación.
* Técnica de ejecución.
* Grupos musculares.
* Prevención.

### ⏱️ Modo Campo

Incluye un temporizador interactivo para ejecutar los ejercicios de forma progresiva.

El usuario puede:

* Iniciar la rutina.
* Pausar el temporizador.
* Continuar la rutina.
* Reiniciar la rutina.
* Avanzar automáticamente entre ejercicios.
* Visualizar el progreso del ejercicio actual.

### 📊 Control

Permite registrar la percepción del esfuerzo mediante una escala de **Borg de 1 a 10**.

También permite indicar posibles molestias en:

* Isquiotibiales.
* Aductores.
* Rodilla.
* Tobillo.

Los datos de la última evaluación se almacenan localmente mediante `localStorage`.

### 🌙 Modo claro y oscuro

La aplicación dispone de dos temas visuales:

* ☀️ Tema claro.
* 🌙 Tema oscuro.

La preferencia del usuario se guarda automáticamente en el navegador.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando tecnologías web estándar:

| Tecnología   | Uso                                    |
| ------------ | -------------------------------------- |
| HTML5        | Estructura de la aplicación            |
| CSS3         | Diseño y responsive                    |
| JavaScript   | Lógica e interactividad                |
| JSON         | Almacenamiento de ejercicios y rutinas |
| LocalStorage | Persistencia de datos locales          |

No requiere frameworks externos para funcionar.

---

## 📁 Estructura del proyecto

```text
CALIENTA-Y-JUEGA/
│
├── index.html
│
├── css/
│   ├── styles.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── timer.js
│   ├── diagnostic.js
│   ├── exercises.js
│   └── theme.js
│
└── data/
    ├── ejercicios.json
    └── rutinas.json
```

---

## 📱 Diseño Responsive

La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla.

### 💻 Computadora

La interfaz utiliza una distribución amplia para aprovechar el espacio disponible.

### 📱 Teléfono

La interfaz se adapta a pantallas pequeñas mediante:

* Menús inferiores.
* Tarjetas adaptables.
* Formularios de una columna.
* Botones de tamaño adecuado.
* Tipografía responsive.

### 📲 Tablet

La aplicación utiliza una distribución intermedia para aprovechar mejor el espacio disponible.

---

## ▶️ Instalación y ejecución

Este proyecto no requiere instalación de dependencias.

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/calienta-y-juega.git
```

### 2. Entrar en la carpeta

```bash
cd calienta-y-juega
```

### 3. Ejecutar la aplicación

Puedes abrir directamente:

```text
index.html
```

También se recomienda utilizar **Live Server** en Visual Studio Code para ejecutar correctamente la carga de los archivos JSON.

---

## 🌐 Funcionamiento

La aplicación está organizada en cinco secciones principales:

```text
┌─────────────────────────────┐
│      ⚽ CALIENTA & JUEGA    │
├─────────────────────────────┤
│ 🏠 Inicio                   │
│ 📋 Rutinas                  │
│ 🏋️ Ejercicios              │
│ ⚽ Campo                    │
│ 📊 Control                  │
└─────────────────────────────┘
```

---

## 🎨 Interfaz

La aplicación utiliza una interfaz moderna basada en:

* Tarjetas.
* Iconografía.
* Colores relacionados con el deporte.
* Diseño responsive.
* Navegación sencilla.
* Tema claro y oscuro.
* Barra de navegación inferior en dispositivos móviles.

---

## 🧠 Arquitectura

El proyecto separa las responsabilidades en diferentes archivos:

```text
HTML
 │
 ├── Estructura de la interfaz
 │
CSS
 │
 ├── Diseño general
 ├── Componentes
 └── Responsive
 │
JavaScript
 │
 ├── Navegación
 ├── Temporizador
 ├── Diagnóstico
 ├── Ejercicios
 ├── Tema
 └── Lógica general
 │
JSON
 │
 ├── Ejercicios
 └── Rutinas
```

Esta estructura facilita el mantenimiento y permite ampliar la aplicación posteriormente.

---

## 🔮 Posibles mejoras futuras

Entre las funcionalidades que podrían incorporarse en futuras versiones se encuentran:

* 👤 Sistema de usuarios.
* ☁️ Almacenamiento de información en una base de datos.
* 📈 Historial completo de evaluaciones.
* 🏆 Estadísticas de entrenamiento.
* 🔔 Notificaciones y recordatorios.
* 🎥 Videos demostrativos de los ejercicios.
* 🧑‍🤝‍🧑 Perfiles para diferentes jugadores.
* 📲 Conversión a aplicación móvil.
* 🌐 Implementación como Progressive Web App (PWA).

---

## ⚽ Inspiración

La aplicación toma como referencia conceptos de preparación física y prevención utilizados en programas de calentamiento para fútbol, incluyendo elementos inspirados en **FIFA 11+**.

El proyecto tiene fines **educativos y académicos**.

---

## 👨‍💻 Autor

**@Carlangas - C**

Proyecto desarrollado como aplicación web para el aprendizaje y aplicación de tecnologías de desarrollo frontend.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y académicos.

**© 2026 Derechos Reservados**

**Aplicación creada por @Carlangas - C**

---

## ⭐ Proyecto

Si este proyecto te resulta útil, puedes darle una ⭐ al repositorio.
