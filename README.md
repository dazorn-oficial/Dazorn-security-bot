<div align="center">
  <h1>👮 Dazorn Security Bot</h1>
  <p>Un bot de máxima seguridad para blindar tu servidor de Discord. Construido con <a href="https://discord.js.org/">Discord.js v14</a>.</p>
  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  [![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg)](https://discord.js.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.9.0-green.svg)](https://nodejs.org/)
  
  <p>
    <a href="#-características">Características</a> •
    <a href="#-instalación">Instalación</a> •
    <a href="#-uso-y-configuración">Configuración</a> •
    <a href="#-comandos">Comandos</a> •
    <a href="#-estructura-del-proyecto">Estructura</a> •
    <a href="#-contribución">Contribución</a>
  </p>
</div>

---

## ✨ Características

* **Filtro Automático Antilink:** Bloqueador inteligente de enlaces externos (HTTP/HTTPS y Discord Invites) para prevenir spam o scams (activable y desactivable por servidor).
* **Control de Emergencias:** Cierre total de canales (`lock`) para paralizar el chat durante raideos, y apertura rápida (`unlock`).
* **Nuke (Purga Extrema):** Elimina por completo un canal infectado de spam y crea un clon idéntico al instante con todos sus permisos intactos, pero con el historial limpio.
* **Soporte Dual de Comandos:** Soporta tanto comandos Slash (`/`) nativos como comandos de prefijo clásicos (`!`).
* **Datos en JSON Local:** Almacenamiento rápido de la configuración de seguridad por servidor sin depender de una base de datos pesada (`config.json`).

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el bot de seguridad en tu entorno:

1. **Clona el repositorio**
   ```bash
   gh repo clone dazorn-oficial/Dazorn-security-bot
   cd Dazorn-security-bot
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura el entorno**
   Crea un archivo `.env` en la raíz del proyecto y añade la siguiente información:
   ```env
   TOKEN=TU_TOKEN_DEL_BOT
   CLIENT_ID=ID_DE_LA_APLICACION_DEL_BOT
   GUILD_ID=ID_DE_TU_SERVIDOR
   PREFIX=!
   USE_SLASH=true
   USE_PREFIX=true
   ```

4. **Inicia el bot**
   ```bash
   npm start
   ```

## ⚙️ Uso y Configuración

* **Sistema Antilink Automático:** Cuando un administrador activa el `antilink`, el bot comenzará a leer todos los mensajes y eliminará de forma silenciosa aquellos que contengan invitaciones u URLs, enviando un mensaje disuasorio temporal.
* **Privilegios:** Los administradores ignoran los filtros del bot de forma automática.
* **Configuración del Servidor:** La configuración (ej. si el antilink está On u Off) se guarda de forma persistente en `src/data/config.json`.

## 📝 Comandos

> **Nota:** Todos los comandos de seguridad están estrictamente reservados para usuarios con permisos de `Administrador` o `Gestionar Canales`.

* `/antilink <true/false>` o `!antilink <on/off>` - Activa o desactiva el filtro automático de borrado de enlaces en el servidor.
* `/lock` o `!lock` - Bloquea instantáneamente el canal actual retirando los permisos de escritura del rol `@everyone`.
* `/unlock` o `!unlock` - Restaura los permisos de escritura del canal bloqueado.
* `/nuke` o `!nuke` - Botón rojo nuclear. Destruye el canal actual y crea un clon en su misma posición para limpiarlo de la manera más agresiva posible.

## 📂 Estructura del Proyecto

```text
/
├── package.json
├── index.js              # Entry point y Lógica de Filtros Automáticos (Antilink)
├── README.md
└── src/
    ├── data/             # Almacenamiento local JSON
    │   └── config.json
    ├── utils/            # Utilidades generales
    │   └── db.js         # Handler de base de datos para la configuración
    └── commands/         # Módulos de comandos
        ├── slash/        # Lógica de Slash Commands (/)
        └── prefix/       # Lógica de Message Commands (!)
```

## 🤝 Contribución

¡Las contribuciones y peticiones de funcionalidades son muy bienvenidas! 
Siéntete libre de clonar el código y enviar tus Pull Requests.

## 🐛 Bugs & Sugerencias

Si encuentras errores o quieres sugerir mejoras, hemos preparado plantillas estructuradas (Issue Templates) para que sea súper fácil y organizado.

Puedes abrir un issue seleccionando la opción adecuada a continuación:
* 🐛 **[Reportar un Error (Bug)](https://github.com/dazorn-oficial/Dazorn-security-bot/issues/new?template=bug_report.md)** — ¿Algo no funciona bien? ¡Cuéntanos!
* 💡 **[Sugerir una Funcionalidad](https://github.com/dazorn-oficial/Dazorn-security-bot/issues/new?template=feature_request.md)** — ¿Tienes una idea increíble? Nos encantaría leerla.

👉 **[Ver todos los Issues Activos](https://github.com/dazorn-oficial/Dazorn-security-bot/issues)**

## 💬 Contacto

Si tienes alguna duda más específica, necesitas ayuda para configurarlo, o simplemente quieres contactar conmigo para un bot personalizado, puedes hablarme por mensaje directo en Discord:

* **Discord:** `dazorn_oficial`

## ☕ Apoyo al Proyecto

Este bot se ha desarrollado con mucha dedicación y tiempo para garantizar la mejor experiencia de usuario posible y ofrecer un recurso de código abierto limpio y estructurado. Si este proyecto te ha resultado útil y deseas apoyar las horas invertidas en su creación, puedes considerar hacer una donación. 

No es obligatorio en absoluto, pero cualquier gesto es inmensamente apreciado y ayuda a mantener la motivación para futuras actualizaciones. ❤️

[<img src="https://img.shields.io/badge/Ko--fi-Apoyar_el_proyecto-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Ko-Fi" />](https://ko-fi.com/dazorn) 
[<img src="https://img.shields.io/badge/PayPal-Donar-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />](https://paypal.me/Danielzp24)

---
<div align="center">
  <i>"Si se puede pensar, se puede construir."</i><br>
  <b>Developed by Dazorn</b>
</div>