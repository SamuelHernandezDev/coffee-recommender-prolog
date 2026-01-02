# Test Plan – Coffee Recommender System ☕

## 1. Introduction

Este documento describe el **Test Plan** del *Coffee Recommender System*, una aplicación web académica que recomienda tipos de café mediante un **rule-based system** implementado en **Prolog**, integrado con una arquitectura web moderna.

El objetivo de este documento es definir el **testing scope**, **test strategy**, **test environment** y **test deliverables**, asegurando el correcto comportamiento funcional del sistema.

---

## 2. Objectives

* Validar el correcto funcionamiento del **Prolog-based recommendation engine**.
* Verificar la integración entre **Frontend**, **Backend** y la lógica en **Prolog**.
* Asegurar que las entradas del usuario a través del **chatbox** generen recomendaciones esperadas.
* Detectar **functional defects** durante la etapa de desarrollo.

---

## 3. Scope

### 3.1 In Scope

* **Functional testing** de la lógica de recomendación en Prolog.
* Validación de **user inputs** ingresados en el chatbox.
* Comunicación entre **Frontend (React)** y **Backend (Node.js / Express)**.
* Respuestas de la **API** generadas por el motor Prolog.
* Flujo básico de interacción del usuario (**basic user flow**).

### 3.2 Out of Scope

* **Performance testing** y **load testing**.
* **Security testing**.
* **Cross-browser** y **cross-device testing**.
* **Accessibility testing**.

---

## 4. Test Strategy

Se utilizarán los siguientes enfoques de prueba:

* **Manual Testing** basado en **predefined test cases**.
* **Black-box testing**, enfocado en entradas y salidas del sistema.
* **Integration testing** entre Frontend, Backend y Prolog.
* **Regression testing** posterior a cambios en reglas o lógica Prolog.

---

## 5. Test Types

* Functional Testing
* Integration Testing
* Smoke Testing
* Basic User Acceptance Testing (UAT)

---

## 6. Test Environment

* **Operating System:** Windows
* **Frontend:**

  * React
  * Vite
  * Tailwind CSS
* **Backend:**

  * Node.js
  * Express.js
* **Logic Engine:**

  * Prolog
  * Prolog–JavaScript integration (Engine.js)
* **Tools:**

  * Visual Studio Code
  * Git / GitHub
  * Web Browser (Google Chrome)

---

## 7. Test Deliverables

* Test Plan (`test-plan.md`)
* Test Cases (`test-cases.md`)
* Test Report (`test-report.md`)
* Bug Report (`bug-report.md`)

---

## 8. Entry and Exit Criteria

### 8.1 Entry Criteria

* Las reglas en Prolog están definidas.
* La **Backend API** está disponible.
* El **Frontend chatbox** es funcional.
* Los **test cases** están documentados y revisados.

### 8.2 Exit Criteria

* Todos los **planned test cases** han sido ejecutados.
* Los **critical** y **major defects** han sido corregidos.
* El **test report** fue completado y revisado.

---

## 9. Roles and Responsibilities

* **Tester**

  * Ejecutar test cases.
  * Reportar defects.

* **Developer**

  * Corregir issues reportados.
  * Actualizar reglas de lógica si es necesario.

* **Reviewer**

  * Revisar resultados de pruebas y documentación.

---

## 10. Risks and Mitigation

| Risk                   | Impact | Mitigation                              |
| ---------------------- | ------ | --------------------------------------- |
| Incorrect Prolog rules | High   | Validar lógica con test cases           |
| Integration issues     | Medium | Probar endpoints de la API por separado |
| Incomplete user inputs | Medium | Agregar pruebas de validación de inputs |

---

## 11. Approval

Este **Test Plan** se considera aprobado una vez que ha sido revisado y aceptado antes de la ejecución de pruebas.

---
