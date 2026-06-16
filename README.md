<h1 align="center">📦 Cypress E2E-Automation Suite</h1>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square&logo=github-actions" alt="Build Status" />
  <img src="https://img.shields.io/badge/cypress-v13.0+-00bf8a?style=flat-square&logo=cypress&logoColor=white" alt="Cypress Version" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node Version" />
  <img src="https://img.shields.io/badge/licence-MIT-blue?style=flat-square" alt="License" />
</p>

### 💻 Stack Tecnológico & Arquitectura

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Test Runner** | Cypress v13+ | Ejecución de pruebas E2E e interacción con UI |
| **Language** | JavaScript (ES6) | Scripts de automatización dinámicos |
| **Estrategia** | Data-Driven Testing | Manejo de selectores mediante atributos `data-*` |


---

# 🧪 Cypress E2E Automation Project - Registro & Autenticación

Este repositorio contiene el framework de automatización de pruebas de extremo a extremo (E2E) desarrollado para validar los flujos de negocio clave de la aplicación [Nombre de la app si la tiene, o "Aplicación de Prácticas"]. 

Como QA Funcional, diseñé este proyecto con el objetivo de demostrar la transición de Historias de Usuario funcionales hacia scripts automatizados estables y eficientes.

## 📋 Historias de Usuario Automatizadas
* **HU-01: Registro de Usuario Exitoso:** Validación de creación de cuentas rellenando campos obligatorios, manejo de selectores dinámicos y aserción de modales de éxito (`#swal2-title`).
* **HU-02: Flujo de Login e Integración API:** Validación de inicio de sesión monitoreando las peticiones de red (`POST /api/v1/auth/signup`).

## 🛠️ Tecnologías y Herramientas
* **Framework principal:** Cypress 13+
* **Lenguaje de Programación:** JavaScript / Node.js
* **Buenas Prácticas:** Uso de atributos personalizados (`data-at`, `data-cy`) para garantizar selectores robustos que no se rompan con cambios de diseño.

## 🚀 Cómo ejecutar las pruebas localmente

### 1. Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/).

### 2. Instalación de dependencias

Clona este proyecto y ejecuta en tu terminal:
```bash
npm install
```
### 3. Ejecutar Cypress

Para abrir la interfaz gráfica de Cypress (Test Runner) y ejecutar los casos interactivamente:
```bash
npx cypress open
```

### 3. Ejecutar Cypress , para abrir la interfaz gráfica de Cypress (Test Runner)
```bash 
npx cypress run
```

Para ejecutar las pruebas en modo consola (Headless):
```bash 
npx cypress run
```

📬 Contacto

LinkedIn: [Enrique Castillo Pérez](https://www.linkedin.com/in/enriquecastilloperez/)


