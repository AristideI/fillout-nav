# Fillout Engineering: Take-Home Assessment

This project implements a **page navigation component** inspired by the Fillout form builder design. The goal is to bring the design to life with a modern, smooth user experience and fully interactive state management, all in memory, no backend required.

---

## Tech Stack

- **React** (with functional components + hooks)
- **TailwindCSS** (for styling & layout)
- **React DnD** / **DndKit** (for drag-and-drop interactions)

---

## Features

### Core Requirements

- **Page Navigation**

  - Displays a sequence of pages (e.g., `Info`, `Details`, `Other`, `Ending`).
  - Highlights the **active page**.
  - Allows selecting and switching between pages.

- **Drag to Re-order**

  - Users can **rearrange pages** via drag-and-drop.
  - Order updates in real-time with smooth animations.

- **Add New Page**

  - Hovering between two pages shows a **“+” button**.
  - Clicking adds a new page in that position.

- **Context Menu**

  - Each page has a context menu with:
    - `Rename`
    - `Duplicate`
    - `Delete`  
      _(buttons are non-functional, as per spec)_

- **Modern UI/UX**
  - Smooth hover effects.
  - Subtle transitions.
  - Responsive layout.

### Extra Features

- **Bulk Add Pages**
  - A `Bulk Add` button allows adding multiple pages at once.
  - Useful for quickly setting up longer forms.

---

## 🛠️ Running Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/aristidei/fillout-nav.git
   cd fillout-nav
   ```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## Deployment

The project is deployed on Vercel (or any other service).
👉 Live demo: https://your-demo-link.vercel.app
