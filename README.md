# 💼 Frontend Assessment – Job Details Page

This project is a **Job Details Dashboard Page** built using **React.js**, developed as part of the Frontend Assignment. The objective is to closely replicate the UI/UX provided via screenshot and Figma, and implement routing with placeholder pages.

## 🎯 Objective

Replicate the given design (Figma/screenshot) into a working React application with:
- Clean layout and styling
- Routing between pages
- Component-based architecture
- Screenshot comparison support

---

## 🖼️ UI/UX Design Reference

- Match your implementation with the **Figma file** and **reference screenshot** sent via email.
- Layout should match:
  - Header, sidebar
  - Typography
  - Sections (Job Info, Skills, Salary, etc.)
  - Grid and spacing
  - Colors and shadows

---

## 📂 Project Structure

frontend-assignment/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── JobPreview.jsx
│ │ ├── Applicants.jsx
│ │ ├── Match.jsx
│ │ ├── Messages.jsx
│ │ └── JobDetails.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── README.md


---

## 🚀 Live Routes

| Route Path       | Description                        |
|------------------|------------------------------------|
| `/job-preview`   | Placeholder - Page yet to be implemented |
| `/applicants`    | Placeholder - Page yet to be implemented |
| `/match`         | Placeholder - Page yet to be implemented |
| `/messages`      | Placeholder - Page yet to be implemented |
| `/job-details/:id` | Job Details Page (main design)      |

Each unimplemented route will display a **"Page Yet To Be Implemented"** message.

---

## 🧩 Features

✅ React Functional Components  
✅ TailwindCSS Styling  
✅ React Router DOM v6+  
✅ Screenshot diff-ready layout  
✅ Responsive design up to 1440px width

---

## 📸 Screenshot Comparison Steps

1. Install [GoFullPage](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl) Chrome extension.
2. Capture your full webpage screenshot.
3. Upload both the provided screenshot and your screenshot to [DiffChecker](https://www.diffchecker.com/image-diff/).
4. Select **"Difference"** tab, export the result as PNG.
5. Upload this PNG in the Google Form along with your GitHub repo link.

---

## 📝 Evaluation Criteria

| Criteria                          | Points |
|----------------------------------|--------|
| 🎨 UI/UX Match (Figma accuracy)   | 20     |
| 🔁 Routing (/job-details/:id)     | 6      |
| 📌 Sidebar & Header Layout        | 6      |
| 🧾 Job Details Section Accuracy   | 8      |
| 🖼️ Screenshot Difference Uploaded | 4      |
| 🧱 Code Structure & Cleanliness   | 3      |
| 📱 Responsiveness (mobile scaling)| 3      |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm installed
- Git

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/frontend-assignment.git
cd frontend-assignment
npm install
npm run dev
