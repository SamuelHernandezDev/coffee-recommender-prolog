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

| Campo                  | Detalle                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| **ID**                 | TC-01                                                                     |
| **Descripción**        | Verificar que el chatbox se muestre correctamente al cargar la aplicación |
| **Precondición**       | Aplicación desplegada y accesible                                         |
| **Pasos**              | 1. Abrir la aplicación web                                                |
| **Resultado esperado** | El chatbox aparece visible y listo para interacción                       |
| **Resultado real**     | Pendiente                                                                 |
| **Estado**             | No ejecutado                                                              |
| **Severidad**          | Alta                                                                      |

---

### TC-02 – Envío de respuesta del usuario

| Campo                  | Detalle                                                            |
| -----------------------| ------------------------------------------------------------------ |
| **ID**                 | TC-02                                                              |
| **Descripción**        | Verificar que el usuario pueda enviar una respuesta por el chatbox |
| **Precondición**       | Chatbox iniciado                                                   |
| **Pasos**              | 1. Escribir una respuesta, 2. Presionar enviar                     | 
| **Resultado esperado** | El mensaje del usuario se muestra                                  |
| **Resultado real**     | Pendiente                                                          |
| **Estado**             | No ejecutado                                                       |
| **Severidad**          | Media                                                              |

---

### TC-03 – Recepción de pregunta siguiente

| Campo                  | Detalle                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| **ID**                 | TC-03                                                                 |
| **Descripción**        | Validar que el sistema envíe la siguiente pregunta tras una respuesta |
| **Precondición**       | Respuesta enviada                                                     |
| **Pasos**              | 1. Enviar respuesta válida                                            |
| **Resultado esperado** | El sistema responde con una nueva pregunta                            |
| **Resultado real**     | Pendiente                                                             |
| **Estado**             | No ejecutado                                                          |
| **Severidad**          | Alta                                                                  |

---

### TC-04 – Flujo completo de recomendación

| Campo                  | Detalle                                                 |
| ---------------------- | ------------------------------------------------------- |
| **ID**                 | TC-04                                                   |
| **Descripción**        | Verificar que el sistema genere una recomendación final |
| **Precondición**       | Usuario responde todas las preguntas                    |
| **Pasos**              | 1. Responder todas las preguntas del chat               |
| **Resultado esperado** | El sistema muestra una recomendación de café            |
| **Resultado real**     | Pendiente                                               |
| **Estado**             | No ejecutado                                            |
| **Severidad**          | Crítica                                                 |

---

### TC-05 – Manejo de respuesta inválida

| Campo                  | Detalle                                                    |
| ---------------------- | ---------------------------------------------------------- |
| **ID**                 | TC-05                                                      |
| **Descripción**        | Validar el comportamiento ante una respuesta no esperada   |
| **Precondición**       | Chat activo                                                |
| **Pasos**              | 1. Ingresar texto inválido                                 |
| **Resultado esperado** | El sistema solicita una respuesta válida o maneja el error |
| **Resultado real**     | Pendiente                                                  |
| **Estado**             | No ejecutado                                               |
| **Severidad**          | Media                                                      |

---

## 5. Notas

* Estos test cases serán actualizados conforme se agreguen nuevas funcionalidades.
* Los resultados reales se llenarán durante la ejecución de pruebas.
* Los defectos encontrados se documentarán mediante GitHub Issues.
