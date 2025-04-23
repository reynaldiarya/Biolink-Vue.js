# Biolink-Vue.js

**Biolink** is a versatile solution to maximize the use of bio links on Instagram and TikTok. Built with Vue.js, this project allows you to easily create attractive and responsive bio pages.

## ✨ Key Features

- 🔗 **Static Bio Links**: Link data is retrieved from a static JSON file.  
- 🎨 **Responsive Design**: Optimized display for both mobile and desktop devices.  
- ⚡ **High Performance**: Powered by Vite for fast and lightweight builds.  
- 💡 **Easy Customization**: Edit the JSON file to change content and links.

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/reynaldiarya/Biolink-Vue.js.git
   cd Biolink-Vue.js
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

## 🌿 Available Branches

- `main`: Main branch with a single-page structure.
- `spa`: Branch with a multi-page SPA (Single Page Application) implementation/

## 📁 Project Structure

```tree
Biolink-Vue.js/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/       # Public images (can be accessed directly via URL)
├── src/
│   ├── assets/           # Static assets (processed by the bundler)
│   ├── collection/       # JSON files containing link data
│   ├── components/       # Vue components (Biolink)
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Technologies Used

- [Vue.js 3](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Contribution

Contributions are very welcome! Feel free to fork this repository and submit a pull request for any features or fixes you add.
