# Biolink Vue

A lightweight, highly customizable biolink profile page built with Vue 3 and Tailwind CSS.

<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg" />
  <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## Description

Biolink Vue offers a sleek and fast solution for managing personal or brand profile links. Designed as a modern alternative to traditional link-in-bio services, it empowers creators, professionals, and brands to host their own customizable landing pages. By decoupling the links configuration into a clean JSON structure, users can rapidly add, remove, or modify links without diving deep into the application source code.

## Features

- **Centralized Link Management** - Update all profile links dynamically through a single JSON configuration file
- **Responsive Design** - Deliver a seamless browsing experience across mobile and desktop interfaces using Tailwind CSS 4
- **High Performance** - Ensure instant page loads and minimal overhead with the Vite build engine and Vue 3 reactivity
- **Integrated Iconography** - Utilize built-in FontAwesome support for precise brand representation across social links
- **Static Site Ready** - Deploy directly to any static hosting environment with zero backend infrastructure requirements

## Tech Stack

- **Frontend Framework**: Vue.js 3
- **Styling**: Tailwind CSS 4
- **Icons**: FontAwesome 7
- **Build Tool**: Vite 8

## Installation

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Steps

1. Clone the repository and navigate into the project directory

```bash
git clone https://github.com/reynaldiarya/Biolink-Vue.js.git
cd Biolink-Vue.js
```

2. Install the required dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

## Configuration

Link details are managed entirely within a JSON configuration file. There are no environment variables required for standard usage. Navigate to `src/collections/biolink.json` to customize your links.

## Usage

### Updating Links

To update your biolink profile, modify the array of objects in `src/collections/biolink.json`. Each object requires a `name`, a FontAwesome `icon` class, and a target `url`.

```json
[
  {
    "name": "GitHub",
    "icon": "fa-brands fa-github",
    "url": "https://github.com/reynaldiarya"
  },
  {
    "name": "Personal Website",
    "icon": "fa-solid fa-globe",
    "url": "https://yourwebsite.com"
  }
]
```

### Profile Image Customization

To update the profile image, replace the `logo.png` file located in the `public/assets/images/` directory with your preferred avatar. Maintain a square aspect ratio for optimal display.

## Project Structure

```text
/
├── public/
│   └── assets/images/       # Static assets including the profile image
├── src/
│   ├── collections/         # JSON data files for dynamic content (biolink.json)
│   ├── components/          # Reusable Vue components (Biolink.vue)
│   ├── App.vue              # Main application component
│   └── main.js              # Application entry point
├── package.json             # Project dependencies and script definitions
└── vite.config.js           # Vite build and plugin configuration
```

## Scripts / Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Compile and bundle the application for production deployment |
| `npm run preview` | Serve the production build locally for validation |

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add specific feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for detailed terms and conditions.

## Author

Reynaldi Arya