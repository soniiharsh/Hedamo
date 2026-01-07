# HEDAMO – Frontend UI Implementation (Task 3)

This project is the **Task 3 submission** for the HEDAMO Frontend Assignment.  
It focuses exclusively on building a **polished, production-quality product disclosure interface**, demonstrating frontend craftsmanship, interaction design, and visual clarity.

This interface is intentionally designed to reflect Hedamo’s core principle of **disclosure over verification**.

---

## 🎯 Objective

To build a calm, institutional, and trustworthy user interface that presents **producer-declared product information** without implying certification, verification, or endorsement.

The UI emphasizes:
- Clarity over decoration
- Transparency over authority
- Structure over visual noise

---

## 🧩 Features Implemented

### Product List View
- Displays:
  - Product name
  - Category
  - Producer
  - Disclosure status (Draft / Submitted / Published)
  - Last updated date
- Search by product name or producer
- Filter by category and status
- Responsive grid layout
- Empty state messaging when no results are found

### Product Detail View
- Disclosure summary:
  - Declared by
  - Declaration date
  - Evidence count
- Version history with status changes
- Clear, prominent **disclosure disclaimer**
- Smooth transitions between views

### Interaction & UX
- Subtle hover and focus states
- Clean card-based layout
- Fade-in transitions for detail view
- Responsive behavior across desktop sizes

---

## 🧠 Language & System Boundaries

All language in the interface deliberately avoids authority or validation terminology.

✔ Uses:
- “Declared by”
- “Producer-reported”
- “Information provided by the producer”

✘ Avoids:
- Certified
- Verified
- Approved
- Endorsed
- Validated

A clear disclaimer is shown on product detail pages to reinforce that **Hedamo does not verify or certify disclosed information**.

---

## 🎨 Visual Design Principles

- Neutral color palette (slate / gray base)
- Status colors used sparingly and meaningfully
- Clear typographic hierarchy
- Consistent spacing and layout rhythm
- No heavy shadows, gradients, or decorative effects

The overall aesthetic is inspired by interfaces used in **institutional, regulatory, and compliance-oriented systems**.

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**

The stack was chosen for simplicity, performance, and rapid UI iteration.

---

## ▶️ Running the Project Locally

```bash
npm install
npm run dev
