# Test Cases – QA Manual Testing

## Proyecto: Coffee Recommender System ☕

### 1. Información general

* **Tipo de pruebas:** Manual Testing
* **Técnica principal:** Black Box Testing
* **Nivel:** Functional Testing
* **Estado del proyecto:** En desarrollo
* **Módulo probado:** Chatbox de recomendación de café

---

## 2. Alcance de los test cases

### En alcance (In Scope)

* Flujo principal de recomendación
* Interacción usuario–chatbox
* Envío y recepción de respuestas
* Integración Frontend ↔ Backend ↔ Prolog
* Manejo de entradas del usuario

### Fuera de alcance (Out of Scope)

* Menú de navegación (no implementado)
* Diseño UI final
* Accesibilidad
* Cross-browser testing
* Pruebas de rendimiento

---

## 3. Suposiciones

* El servidor backend está en ejecución
* El motor Prolog está correctamente integrado
* El usuario interactúa desde un navegador moderno

---

## 4. Test Cases

### TC-01 – Inicio correcto del chatbox

| Campo                  | Detalle                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------|
| **ID**                 | TC-01                                                                                                         |
| **Descripción**        | Verificar que el chatbox se muestre correctamente al cargar la aplicación                                     |
| **Precondición**       | Aplicación ejecutándose en localhost                                                                          |
| **Pasos**              | 1. Abrir la aplicación web                                                                                    |
| **Expected Result**    | The chatbox is visible and ready for interaction                                                              |
| **Actual Result**      | Pendiente                                                                                                     |
| **Status**             | Not Executed                                                                                                  |
| **Severity**           | High                                                                                                          |
| **Nota**               |                                                                                                               |

---

### TC-02 – Selección de respuesta del usuario

| Campo                  | Detalle                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------|
| **ID**                 | TC-02                                                                                 |
| **Descripción**        | Verificar que el usuario pueda seleccionar una opción de respuesta                    |
| **Precondición**       | Chatbox iniciado y pregunta visible                                                   |
| **Pasos**              | 1. Visualizar las opciones mostradas 2. Seleccionar una opción                        |
| **Expected Result**    | The selected option is displayed as a user message and sent automatically             |
| **Actual Result**      | Pendiente                                                                             |
| **Status**             | Not Executed                                                                          |
| **Severity**           | Medium                                                                                |
| **Nota**               |                                                                                       |

---

### TC-03 – Recepción de pregunta siguiente

| Campo                  | Detalle                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| **ID**                 | TC-03                                                                 |
| **Descripción**        | Validar que el sistema envíe la siguiente pregunta tras una respuesta |
| **Precondición**       | Respuesta enviada                                                     |
| **Pasos**              | 1. Enviar respuesta válida                                            |
| **Expected Result**    | The system displays the next question in the chatbox                  |
| **Actual Result**      | Pendiente                                                             |
| **Status**             | Not Executed                                                          |
| **Severity**           | High                                                                  |
| **Nota**               |                                                                       |

---

### TC-04 – Flujo completo de recomendación

| Campo                  | Detalle                                                               |
| ---------------------- | ----------------------------------------------------------------------|
| **ID**                 | TC-04                                                                 |
| **Descripción**        | Verificar que el sistema genere una recomendación final               |
| **Precondición**       | Usuario responde todas las preguntas                                  |
| **Pasos**              | 1. Responder todas las preguntas del chat                             |
| **Expected Result**    | The system displays a coffee recommendation with name and description |
| **Actual Result**      | Pendiente                                                             |
| **Status**             | Not Executed                                                          |
| **Severity**           | Critical                                                              |
| **Nota**               |                                                                       |

---

## 5. Notas

* Estos test cases serán actualizados conforme se agreguen nuevas funcionalidades.
* Los resultados reales se llenarán durante la ejecución de pruebas.
* Los defectos encontrados se documentarán mediante GitHub Issues.
* Las mejoras de UX o funcionalidades faltantes se documentarán como Enhancements, no como bugs.
