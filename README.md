# 💻 macOS Style Developer Portfolio  
🎨 An interactive desktop-inspired portfolio built with modern frontend technologies, replicating the smooth macOS experience inside the browser.

---

## 🚀 Project Overview

This project is a fully interactive macOS-style portfolio designed to showcase projects, experience, skills, and contact information in a creative and immersive way.

Instead of a traditional scrolling portfolio, users interact with draggable windows, folders, text files, images, and a dock — just like a real macOS desktop.

It demonstrates:

- Advanced UI/UX implementation  
- Component-based architecture  
- Window state management  
- Smooth animations  
- Scalable project structure  
- Modern frontend tooling  

---

## ✨ Key Features

- 🖥️ macOS-inspired desktop interface  
- 📂 Interactive Finder-style project explorer  
- 📝 Clickable `.txt` files that open project descriptions  
- 🖼️ Image preview windows  
- 🧲 Draggable and layered windows (z-index control)  
- 🎞️ Smooth animations with GSAP  
- ⚡ Fast development build using Vite  
- 🎨 Clean responsive design using TailwindCSS  
- 📦 Modular and reusable components  

---

## 🏗️ Architecture

```
User Interaction
        ↓
Desktop Layout
        ↓
Window Manager (Zustand Store)
        ↓
Window Components
   ├── Finder
   ├── Text Window
   ├── Image Preview
   ├── Terminal (Skills)
   ├── Safari (Experience)
   └── Contact
```

The application uses centralized window state management to control:

- Open/close behavior  
- Window layering (z-index)  
- Active window focus  
- Dynamic content injection  

---

## 🖥️ TECH STACK

### 🎨 Frontend
- React  
- JavaScript (ES6+)  
- TailwindCSS  
- Vite  

### 🎞️ Animation
- GSAP  

### 🧠 State Management
- Zustand  

### 🧰 Tools
- Git  
- GitHub  
- VSCode  

---

## ⚙️ How It Works

### 🖱️ Step 1 — Desktop Interaction  
Users interact with icons on a macOS-style desktop interface.

### 📂 Step 2 — Finder Navigation  
Clicking a folder opens a Finder-style window displaying projects.

### 📝 Step 3 — Text File Rendering  
Clicking a `.txt` file dynamically renders project descriptions in a new window.

### 🖼️ Step 4 — Image Preview  
Images open inside a dedicated preview window component.

### 🔄 Step 5 — Window Management  
All window behavior is managed through a centralized store, ensuring smooth layering and interactions.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Dharvipatel10/your-portfolio-repo.git
cd your-portfolio-repo
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── hoc/
 ├── store/
 ├── data (index.js)
 ├── windows/
 └── styles/
public/
 ├── images/
 └── icons/
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Advanced UI system design  
- Custom window management logic  
- Desktop-style web application architecture  
- Reusable component patterns  
- Performance optimization with Vite  
- Tailwind utility-first styling  
- Clean, scalable folder structure  

---

## 🌟 Why This Portfolio Is Different

Most portfolios are simple scroll-based websites.

This portfolio:

- Feels like a desktop OS  
- Encourages interaction  
- Makes project exploration engaging  
- Demonstrates frontend architecture depth  
- Shows creativity beyond templates  

It is both a showcase and a technical demonstration.

---

## 👨‍💻 Author

**Dharvi Rakeshkumar Patel**  
Full-Stack Software Developer  

GitHub: https://github.com/Dharvipatel10  
LinkedIn: https://www.linkedin.com/in/dharvi-patel10/  

---
