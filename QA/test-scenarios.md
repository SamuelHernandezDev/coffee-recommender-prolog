# Test Scenarios – QA Manual Testing

## Proyecto: Coffee Recommender System ☕

## 1. Objetivo
Definir los escenarios funcionales principales a validar en el sistema de recomendación de café desde la perspectiva del usuario final.

---

## 2. Alcance
- Interacción usuario–chatbox
- Flujo de preguntas y respuestas
- Generación de recomendación
- Manejo de errores de entrada
- Integración frontend–backend–Prolog

---

## 3. Test Scenarios

#### TS-01 – Inicio de interacción con el sistema

**Descripción:**
Verificar que el usuario pueda iniciar una conversación con el sistema de recomendación.

---

#### TS-02 – Flujo completo de preguntas

**Descripción:**
Validar que el sistema guíe al usuario a través de todas las preguntas necesarias para generar una recomendación.

---

#### TS-03 – Generación de recomendación final

**Descripción:**
Verificar que, tras completar el flujo, el sistema genere una recomendación basada en las reglas de Prolog.

---

#### TS-04 – Manejo de respuestas inválidas

**Descripción:**
Validar que el sistema maneje correctamente entradas no válidas o inesperadas del usuario.

---

#### TS-05 – Reinicio o nueva recomendación

**Descripción:**
Verificar que el usuario pueda iniciar una nueva recomendación sin recargar la aplicación (si aplica).

---

## 4. Notas
- Cada escenario puede generar múltiples test cases.
- Los escenarios se actualizarán conforme el sistema evolucione.

---