# Developer's Paradise (Vite + React)

This project was migrated from Create React App to **Vite + React**.

## Available Scripts

In the project directory (`pro/`), you can run:

### `npm run dev`

Runs the app in development mode with Vite's HMR.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads when you make changes. You may also see lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and filenames include hashes. Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build before deploying.

## Tech Stack

**Frontend:**  
- React.js (v18)  
- Vite (build tool & dev server)  
- CSS3 / Tailwind CSS (via PostCSS)

**Routing:**  
- React Router DOM for smooth page transitions

**Other Tools:**  
- Framer Motion for animations  
- Lucide React & React Icons for icons  
- Git and GitHub for version control

## Project Structure

```
pro/
├── index.html            # Vite entry HTML
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS (Tailwind + Autoprefixer) config
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project metadata and dependencies
├── public/               # Static assets (favicon, manifest, images)
│   ├── favicon.ico
│   ├── manifest.json
│   ├── logo192.png
│   ├── logo512.png
│   └── images/
├── src/
│   ├── main.jsx          # React entry point
│   ├── index.jsx         # Legacy entry point (kept for reference)
│   ├── App.jsx           # Main application with routes
│   ├── App.css           # Global styles
│   ├── index.css         # Base CSS reset
│   ├── input.css         # Tailwind source CSS (@tailwind directives)
│   ├── components/
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       ├── Layout.jsx
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   └── Testimonials.jsx
│   └── ...
```

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/pritvasani/dev-paradise.git
   cd dev-paradise/pro
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview production build locally:
   ```bash
   npm run preview
   ```

## Deployment

The site is deployed to GitHub Pages (`gh-pages` branch) automatically via GitHub Actions on every push to `master`. The workflow builds with Vite (`npm run build`) and deploys the `pro/dist` folder.

## About the Developer

This project is crafted by **Prit Vasani**, a passionate software engineer specializing in modern web and mobile application development.

## Contact Information

- **Email:** pritvasani@example.com  
- **GitHub:** [Prit Vasani](https://github.com/pritvasani)  
- **LinkedIn:** [Prit Vasani](https://linkedin.com/in/pritvasani)
