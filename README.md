# Biolink Vue

A lightweight, highly customizable biolink profile page built with Vue 3, TypeScript, and Tailwind CSS.

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.2-blue.svg" />
  <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6.svg" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## Description

Biolink Vue offers a sleek and fast solution for managing personal or brand profile links. Designed as a modern alternative to traditional link-in-bio services, it empowers creators, professionals, and brands to host their own customizable landing pages. By decoupling the links configuration into a clean JSON structure, users can rapidly add, remove, or modify links. It also natively supports multi-page (nested folders via Vue Router) and single-page (direct links) modes depending on how you structure the JSON.

## Features

- **Multi-page & Single-page Support** - Organize your links into categories (slugs) or just use direct external links.
- **Media Embed Support** - Easily embed YouTube videos, Spotify songs, SoundCloud tracks, TikToks, and Instagram posts directly in your biolink.
- **Centralized Link Management** - Update all profile links dynamically through a single JSON configuration file.
- **Responsive Design** - Deliver a seamless browsing experience across mobile and desktop interfaces using Tailwind CSS 4.
- **Instant Loading & Clean UI** - Minimalist aesthetic with absolutely zero forced entrance animations for lightning-fast loads.
- **Dynamic SEO** - Automatically updates the document title based on the profile name and active category.
- **High Performance & Type Safety** - Built with Vue 3 Composition API, Vite, and strict TypeScript types.
- **Integrated Iconography** - Utilize built-in FontAwesome support for precise brand representation across social links.

## Tech Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Language**: TypeScript
- **Routing**: Vue Router
- **Styling**: Tailwind CSS 4
- **Icons**: FontAwesome 7
- **Build Tool**: Vite 8
- **Linting & Formatting**: ESLint & Prettier

## Installation

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Steps

1. Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/reynaldiarya/Biolink-Vue.js.git
cd Biolink-Vue.js
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

## Configuration

Link details are managed entirely within a JSON configuration file. Navigate to `src/collections/biolink.json` to customize your links.

## Usage

### Updating Links

Modify the array of objects in `src/collections/biolink.json`. You can create a direct external link by providing a `url`, or a nested category folder by providing a `slug` and a `links` array.

```json
[
  {
    "name": "Social Media",
    "slug": "social-media",
    "links": [
      {
        "name": "Facebook",
        "icon": "fa-brands fa-facebook",
        "url": "https://www.facebook.com/"
      }
    ]
  },
  {
    "name": "Steam",
    "icon": "fa-brands fa-steam",
    "url": "https://store.steampowered.com/"
  }
]
```

_(Make sure to import and register any new FontAwesome icons in `src/main.ts`!)_

### Profile Image Customization

To update the profile image, replace the `logo.png` file located in the `public/assets/images/` directory with your preferred avatar. Maintain a square aspect ratio for optimal display.

## Project Structure

```text
/
├── public/
│   └── assets/images/       # Static assets including the profile image
├── src/
│   ├── collections/         # JSON data files for dynamic content (biolink.json)
│   ├── components/          # Reusable UI components (LinkButton.vue, MediaEmbed.vue, ProfileHeader.vue, ProfileFooter.vue)
│   ├── router/              # Vue Router configuration
│   ├── types/               # TypeScript interfaces (index.ts, BiolinkItem.ts, ProfileData.ts)
│   ├── views/               # Page views (Biolink.vue, BiolinkPageDetail.vue)
│   ├── App.vue              # Main application layout
│   └── main.ts              # Application entry point
├── eslint.config.mjs        # ESLint flat config
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and script definitions
└── vite.config.js           # Vite build and plugin configuration
```

## Scripts / Commands

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Start the local development server                           |
| `npm run build`   | Compile and bundle the application for production deployment |
| `npm run preview` | Serve the production build locally for validation            |
| `npm run lint`    | Check code for ESLint errors and warnings                    |
| `npm run format`  | Auto-format codebase using Prettier                          |

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
