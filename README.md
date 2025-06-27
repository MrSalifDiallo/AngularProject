# 🚀 AngularProject - Full Stack Web Application

[![Laravel](https://img.shields.io/badge/Laravel-12.x-red.svg)](https://laravel.com/)
[![Angular](https://img.shields.io/badge/Angular-17.x-red.svg)](https://angular.io/)
[![PHP](https://img.shields.io/badge/PHP-8.2+-blue.svg)](https://php.net/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue.svg)](https://typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Languages:** [🇺🇸 English](#english) | [🇫🇷 Français](#français)

---

## English

> A modern full-stack web application built with Laravel backend and Angular frontend for managing job offers (offres).

### 📋 Table of Contents

- [🌟 Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📱 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [📝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🌟 Features

- ✅ **User Authentication** - Complete auth system with registration, login, and password reset
- ✅ **Job Offers Management** - CRUD operations for job offers (offres)
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap and PrimeNG
- ✅ **Real-time Validation** - Form validation on both frontend and backend
- ✅ **RESTful API** - Clean API architecture with Laravel Sanctum
- ✅ **Modern UI Components** - Vue.js components with Tailwind CSS in backend admin
- ✅ **Database Migrations** - Version-controlled database schema
- ✅ **Testing Suite** - Comprehensive testing with PHPUnit and Jasmine

---

## 🏗️ Project Structure

```
AngularProject/
├── backend/                 # Laravel Backend
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   ├── Api/         # API Controllers
│   │   │   ├── Auth/        # Authentication Controllers
│   │   │   └── OffresController.php
│   │   ├── Models/
│   │   │   ├── User.php
│   │   │   └── Offre.php
│   │   └── Providers/
│   ├── database/
│   │   ├── migrations/
│   │   ├── factories/
│   │   └── seeders/
│   ├── resources/
│   │   ├── js/             # Vue.js components
│   │   └── css/
│   └── routes/
├── frontend/               # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── layouts/        # Layout components for app structure
│   │   │   ├── services/       # Business logic and API communication
│   │   │   ├── model/          # TypeScript interfaces and data models
│   │   │   ├── offre/          # Job offers feature module
│   │   │   │   ├── add-offre/  # Form component for CRUD operations
│   │   │   │   ├── modal-offre/ # Reusable modal component
│   │   │   │   └── offre.component # Main offers listing component
│   │   │   ├── user/           # User management components
│   │   │   ├── welcome/        # Welcome page component
│   │   │   └── primeng/        # PrimeNG configuration
│   │   └── assets/
│   └── package.json
└── README.md
```

---

## 📁 Frontend Architecture Analysis

### 🎯 Services Directory (`/services/`)
**Purpose**: Handles business logic and API communication

- **`offre.service.ts`** - Complete CRUD service for job offers management
    - ✅ **GET** `/api/offres` - Fetch all job offers with sorting
    - ✅ **POST** `/api/offres` - Create new job offer
    - ✅ **PUT** `/api/offres/{id}` - Update existing offer
    - ✅ **DELETE** `/api/offres/{id}` - Remove job offer
    - 🔧 Uses **Axios** for HTTP requests with RxJS conversion
    - 🌐 Configurable API base URL via environment variables
    - 📊 Error handling and logging for debugging

### 🏗️ Models Directory (`/model/`)
**Purpose**: TypeScript interfaces and data models

- **`offre.ts`** - Job Offer data model
  ```typescript
  interface Offre {
    id?: number;        // Optional for new offers
    title: string;      // Job title (required)
    description: string; // Job description (required)
    date: string;       // Application deadline
    lieu: string;       // Job location (required)
  }
  ```
  - 🎯 **Type Safety** - Ensures data consistency across components
  - ✨ **Optional ID** - Supports both create and update operations
  - 📝 **Required Fields** - Form validation alignment

### 🎨 Layouts Directory (`/layouts/`)
**Purpose**: Reusable layout components for consistent UI structure

- **`main-layout/`** - Primary application layout
  - 🧭 **Bootstrap Navigation** - Responsive navbar with routing
  - 🔗 **Router Outlet** - Dynamic content rendering
  - 📱 **Mobile-First** - Collapsible navigation for mobile devices
  - 🎯 **Active Link Highlighting** - Visual feedback for current route
  - Navigation includes:
    - 📋 Offres management
    - 👥 User management
    - 🏠 Welcome page

### 🧩 Components Analysis (`/offre/`)
**Purpose**: Feature-specific components for job offers management

#### 📋 `offre.component.ts` - Main Listing Component
- **Features**:
  - 📊 **Data Display** - Sortable job offers table
  - 🗑️ **Delete Operations** - With confirmation and feedback
  - ➕ **Add/Edit Modal** - Integrated CRUD operations
  - 🔔 **Toast Notifications** - PrimeNG message service integration
  - 🔄 **Real-time Updates** - Automatic list refresh after operations

#### ✏️ `add-offre.component.ts` - Form Component
- **Features**:
  - 📝 **Reactive Forms** - Angular FormGroup with validation
  - ✅ **Dual Mode** - Supports both create and update operations
  - 🎯 **Form Validation** - Required fields, minimum length, date validation
  - 📅 **Date Handling** - Proper ISO date formatting for forms
  - 🔄 **Dynamic Button Text** - "Valider" vs "Modifier" based on mode
  - 📤 **Event Emitters** - Parent-child communication for success callbacks

#### 🪟 `modal-offre.component.ts` - Reusable Modal
- **Features**:
  - 🎭 **Two-way Binding** - Visibility state management
  - 🎨 **Customizable Title** - Dynamic modal headers
  - 🔧 **Event Handling** - Close dialog with proper state management
  - 📱 **PrimeNG Integration** - Professional modal styling

### 🎨 UI Component Libraries
- **PrimeNG** - Professional Angular UI components
  - 🪟 Dialog/Modal components
  - 🔔 Toast notification system
  - 📝 Form input components
  - 🎨 Consistent theme and styling
- **Bootstrap 5.3** - Responsive CSS framework
  - 📱 Mobile-first responsive design
  - 🧭 Navigation components
  - 📊 Grid system for layouts

---

## 🛠️ Technologies Used

### Backend
- **Laravel 12.x** - PHP Framework
- **Laravel Sanctum** - API Authentication
- **Laravel Breeze** - Authentication scaffolding
- **Inertia.js** - Modern monolith approach
- **Vue.js 3** - Frontend framework for admin
- **Tailwind CSS** - Utility-first CSS framework
- **MySQL** - Database
- **PHPUnit** - Testing framework

### Frontend
- **Angular 17.x** - Frontend framework
- **TypeScript 5.4+** - Programming language
- **PrimeNG** - UI component library
- **Bootstrap 5.3** - CSS framework
- **Axios** - HTTP client
- **RxJS** - Reactive programming

---

## ⚙️ Installation

### Prerequisites
- **PHP 8.2+**
- **Composer**
- **Node.js 18+**
- **MySQL/PostgreSQL**

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/MrSalifDiallo/AngularProject.git
cd AngularProject/backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env file
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=angularproject
# DB_USERNAME=your_username
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Seed the database (optional)
php artisan db:seed

# Install Node dependencies
npm install

# Build assets
npm run build
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
ng serve
```

---

## 🚀 Usage

### Development Mode

1. **Start Backend Server:**
   ```bash
   cd backend
   php artisan serve
   ```
   Backend will be available at `http://localhost:8000`

2. **Start Frontend Server:**
   ```bash
   cd frontend
   ng serve
   ```
   Frontend will be available at `http://localhost:4200`

### Production Build

```bash
# Backend
cd backend
npm run build
php artisan optimize

# Frontend
cd frontend
ng build --prod
```

---

## 📱 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout

### Offres Management
- `GET /api/offres` - Get all offers
- `POST /api/offres` - Create new offer
- `PUT /api/offres/{id}` - Update offer
- `DELETE /api/offres/{id}` - Delete offer

### Example API Usage

```javascript
// Get all offers
const response = await axios.get('http://localhost:8000/api/offres');

// Create new offer
const newOffer = {
  title: 'Frontend Developer',
  description: 'Looking for an experienced Angular developer',
  date: '2024-12-31',
  lieu: 'Paris, France'
};
await axios.post('http://localhost:8000/api/offres', newOffer);
```

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
php artisan test
```

### Frontend Tests
```bash
cd frontend
ng test
```

---

## 📝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Salif Diallo**
- GitHub: [@MrSalifDiallo](https://github.com/MrSalifDiallo)
- LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile)

---

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

*Made with ❤️ by [Salif Diallo](https://github.com/MrSalifDiallo)*

---

## Français

A modern full-stack web application built with Laravel backend and Angular frontend to manage job offers (offres).

### 📋 Table des Matières

- [🌟 Fonctionnalités](#-fonctionnalités)
- [🏗️ Structure du Projet](#️-structure-du-projet)
- [🛠️ Technologies Utilisées](#️-technologies-utilisées)
- [⚙️ Installation](#️-installation)
- [🚀 Utilisation](#-utilisation)
- [📱 Points de terminaison de l'API](#-points-de-terminaison-de-lapi)
- [🧪 Tests](#-tests)
- [📝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)
- [👨‍💻 Auteur](#-auteur)

### 🌟 Fonctionnalités

- ✅ **Authentification Utilisateur** - Système complet d'authentification avec enregistrement, connexion et réinitialisation de mot de passe
- ✅ **Gestion des Offres d'Emploi** - Opérations CRUD pour les offres d'emploi (offres)
- ✅ **Design Responsive** - Approche mobile-first avec Bootstrap et PrimeNG
- ✅ **Validation en Temps Réel** - Validation des formulaires à la fois frontend et backend
- ✅ **API RESTful** - Architecture API propre avec Laravel Sanctum
- ✅ **Composants UI Modernes** - Composants Vue.js avec Tailwind CSS dans l'admin
- ✅ **Migrations de Base de Données** - Schéma de base de données versionné
- ✅ **Suite de Tests** - Tests complets avec PHPUnit et Jasmine

---

### 🏗️ Structure du Projet

Identique à la version anglaise.

---

### 🛠️ Technologies Utilisées

#### Backend
- **Laravel 12.x** - Framework PHP
- **Laravel Sanctum** - Authentification API
- **Laravel Breeze** - Échafaudage d'authentification
- **Inertia.js** - Approche monolithique moderne
- **Vue.js 3** - Framework frontend pour l'admin
- **Tailwind CSS** - Framework CSS utilitaire
- **MySQL** - Base de données
- **PHPUnit** - Framework de tests

#### Frontend
- **Angular 17.x** - Framework frontend
- **TypeScript 5.4+** - Langage de programmation
- **PrimeNG** - Bibliothèque de composants UI
- **Bootstrap 5.3** - Framework CSS
- **Axios** - Client HTTP
- **RxJS** - Programmation réactive

---

### ⚙️ Installation

Identique à la version anglaise.

---

### 🚀 Utilisation

Identique à la version anglaise.

---

### 📱 Points de terminaison de l'API

Identique à la version anglaise.

---

### 🧪 Tests

Identique à la version anglaise.

---

### 📝 Contribuer

Identique à la version anglaise.

---

### 📄 Licence

Ce projet est sous licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

### 👨‍💻 Auteur

**Salif Diallo**
- GitHub: [@MrSalifDiallo](https://github.com/MrSalifDiallo)
- LinkedIn: [Connectez-vous](https://linkedin.com/in/votreprofil)

---

### 🌟 Montrez votre soutien

Donnez une ⭐️ si ce projet vous a aidé!

---

### 📞 Contact

N'hésitez pas à me contacter si vous avez des questions ou des suggestions!

---
