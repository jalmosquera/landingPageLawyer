# 🏛️ Landing Page - Law Firm

[English](#english) | [Español](#español)

---

<a name="english"></a>

## 📋 Description

Professional landing page for a law firm built with React, Vite, and TailwindCSS, following a Feature-Based Architecture. This project replicates the design from [testalawfirmpc.com](https://testalawfirmpc.com/).

## ✨ Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Responsive Header** | Navigation menu with mobile support and call-to-action button | ✅ |
| **Hero Section** | Full-screen hero with background image and main call-to-action | ✅ |
| **About Section** | Firm introduction, attorney profile, and values showcase | ✅ |
| **Contact Form** | Validated contact form with multiple fields | ✅ |
| **Practice Areas** | 7 practice area cards with hover effects | ✅ |
| **Testimonials Carousel** | Interactive client testimonials with navigation | ✅ |
| **Responsive Footer** | Complete footer with links, contact info, and social media | ✅ |
| **Custom Theme** | Configurable colors from tailwind.config.js | ✅ |
| **Testing Suite** | Unit tests with Vitest and React Testing Library | ✅ |
| **CI/CD Pipeline** | Automated testing and deployment with GitHub Actions | ✅ |

## 🎨 Design

- **Primary Color:** `#013048` (Configurable in `tailwind.config.js`)
- **Accent Color:** `#fbb03c`
- **Responsive:** Mobile-first design
- **Placeholder Content:** Lorem ipsum with section identifiers

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jalmosquera/landingPageLawyer.git

# Navigate to project directory
cd landingPageLawyer

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run tests
npm run test:coverage # Run tests with coverage report
```

## 📁 Project Structure

```
src/
├── features/           # Feature-based components
│   ├── header/        # Navigation header
│   ├── hero/          # Hero section
│   ├── about/         # About section
│   ├── contact-form/  # Contact form
│   ├── practice-areas/# Practice areas
│   ├── testimonials/  # Testimonials carousel
│   └── footer/        # Footer
├── components/        # Shared components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── test/             # Test setup
```

## 🧪 Testing

This project uses Vitest and React Testing Library for testing.

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

## 🌐 Deployment

This project is configured for deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jalmosquera/landingPageLawyer)

## 🔄 Git Workflow

- **Main Branch:** `main`
- **Development Branch:** `dev`
- **Feature Branches:** Created from `dev` with descriptive names (e.g., `feat/hero-section`, `fix/navbar`)
- **Commit Convention:** Conventional Commits with emojis

### Commit Examples

```bash
feat: ✨ add contact form validation
fix: 🐛 correct navigation menu alignment
docs: 📝 update README
test: ✅ add header component tests
style: 💄 improve mobile responsiveness
```

## 🛠️ Technologies

- **React** 18.3.1
- **Vite** 5.4.2
- **TailwindCSS** 3.4.13
- **Vitest** 2.0.5
- **React Testing Library** 16.0.1

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

1. Fork the project
2. Create your feature branch from `dev`
3. Commit your changes following Conventional Commits
4. Push to the branch
5. Open a Pull Request

---

<a name="español"></a>

## 📋 Descripción

Landing page profesional para un bufete de abogados construida con React, Vite y TailwindCSS, siguiendo una arquitectura Feature-Based. Este proyecto replica el diseño de [testalawfirmpc.com](https://testalawfirmpc.com/).

## ✨ Funcionalidades

| Funcionalidad | Descripción | Estado |
|---------------|-------------|--------|
| **Header Responsivo** | Menú de navegación con soporte móvil y botón de llamada a la acción | ✅ |
| **Sección Hero** | Hero de pantalla completa con imagen de fondo y CTA principal | ✅ |
| **Sección Acerca de** | Introducción de la firma, perfil del abogado y valores | ✅ |
| **Formulario de Contacto** | Formulario validado con múltiples campos | ✅ |
| **Áreas de Práctica** | 7 tarjetas de áreas de práctica con efectos hover | ✅ |
| **Carrusel de Testimonios** | Testimonios interactivos de clientes con navegación | ✅ |
| **Footer Responsivo** | Footer completo con enlaces, info de contacto y redes sociales | ✅ |
| **Tema Personalizado** | Colores configurables desde tailwind.config.js | ✅ |
| **Suite de Testing** | Tests unitarios con Vitest y React Testing Library | ✅ |
| **Pipeline CI/CD** | Testing y despliegue automatizado con GitHub Actions | ✅ |

## 🎨 Diseño

- **Color Primario:** `#013048` (Configurable en `tailwind.config.js`)
- **Color de Acento:** `#fbb03c`
- **Responsivo:** Diseño mobile-first
- **Contenido Placeholder:** Lorem ipsum con identificadores de sección

## 🚀 Comenzar

### Prerrequisitos

- Node.js >= 18.0.0
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jalmosquera/landingPageLawyer.git

# Navegar al directorio del proyecto
cd landingPageLawyer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm test             # Ejecutar tests
npm run test:coverage # Ejecutar tests con reporte de cobertura
```

## 📁 Estructura del Proyecto

```
src/
├── features/           # Componentes basados en funcionalidades
│   ├── header/        # Header de navegación
│   ├── hero/          # Sección hero
│   ├── about/         # Sección acerca de
│   ├── contact-form/  # Formulario de contacto
│   ├── practice-areas/# Áreas de práctica
│   ├── testimonials/  # Carrusel de testimonios
│   └── footer/        # Footer
├── components/        # Componentes compartidos
├── hooks/            # Hooks personalizados de React
├── utils/            # Funciones utilitarias
└── test/             # Configuración de tests
```

## 🧪 Testing

Este proyecto usa Vitest y React Testing Library para testing.

```bash
# Ejecutar todos los tests
npm test

# Ejecutar con cobertura
npm run test:coverage
```

## 🌐 Despliegue

Este proyecto está configurado para desplegarse en Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jalmosquera/landingPageLawyer)

## 🔄 Flujo de Git

- **Rama Principal:** `main`
- **Rama de Desarrollo:** `dev`
- **Ramas de Feature:** Creadas desde `dev` con nombres descriptivos (ej: `feat/hero-section`, `fix/navbar`)
- **Convención de Commits:** Conventional Commits con emojis

### Ejemplos de Commits

```bash
feat: ✨ agregar validación de formulario de contacto
fix: 🐛 corregir alineación del menú de navegación
docs: 📝 actualizar README
test: ✅ agregar tests del componente header
style: 💄 mejorar responsividad móvil
```

## 🛠️ Tecnologías

- **React** 18.3.1
- **Vite** 5.4.2
- **TailwindCSS** 3.4.13
- **Vitest** 2.0.5
- **React Testing Library** 16.0.1

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## 👥 Contribuir

1. Haz fork del proyecto
2. Crea tu rama de feature desde `dev`
3. Haz commit de tus cambios siguiendo Conventional Commits
4. Push a la rama
5. Abre un Pull Request
