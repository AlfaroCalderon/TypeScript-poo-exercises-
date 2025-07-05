# TypeScript POO Exercises

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

A collection of Object-Oriented Programming (OOP) exercises built with TypeScript and Vite, showcasing fundamental OOP concepts including classes, inheritance, abstract classes, and interactive web applications.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Exercises Overview](#exercises-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Exercise Details](#exercise-details)
- [Contributing](#contributing)

## ✨ Features

- **Interactive Web Interface**: Navigate through different exercises using a dynamic menu system
- **TypeScript Classes**: Implementation of various OOP concepts including classes, inheritance, and abstract classes
- **Real-time Calculations**: Interactive calculator with multiple mathematical operations
- **Banking System**: Simple ATM simulation with deposit and withdrawal functionality
- **Dynamic UI**: Forms and interfaces that update dynamically based on user interactions
- **Type Safety**: Full TypeScript implementation ensuring code reliability

## 📁 Project Structure

```
TypeScript-poo-exercises/
├── public/
│   └── vite.svg
├── src/
│   ├── abstractClass.ts      # Abstract classes and inheritance
│   ├── cabeceraPagina.ts     # Page header customization
│   ├── cajero.ts             # ATM/Banking system
│   ├── calculadora.ts        # Calculator functionality
│   ├── cancion.ts            # Song management system
│   ├── main.ts               # Main application entry point
│   ├── menu.ts               # Navigation menu
│   ├── style.css             # Application styles
│   └── vite-env.d.ts         # TypeScript declarations
├── index.html                # Main HTML file
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🚀 Exercises Overview

### Exercise 1: Page Header (`cabeceraPagina.ts`)
- **Concept**: Basic class implementation with methods
- **Features**: Customizable page headers with title, color, font, and alignment properties
- **OOP Concepts**: Encapsulation, method chaining

### Exercise 2: Calculator (`calculadora.ts`)
- **Concept**: Class with mathematical operations
- **Features**: Addition, subtraction, multiplication, division, power, and factorial operations
- **OOP Concepts**: Private properties, public methods, constructor initialization

### Exercise 3: Song Manager (`cancion.ts`)
- **Concept**: Getters and setters implementation
- **Features**: Song creation with title, genre, and author management
- **OOP Concepts**: Encapsulation, accessor methods, data validation

### Exercise 4: ATM System (`cajero.ts`)
- **Concept**: Real-world application simulation
- **Features**: Account creation, deposits, withdrawals, balance checking
- **OOP Concepts**: State management, method validation, user interaction

### Exercise 5: Abstract Classes (`abstractClass.ts`)
- **Concept**: Inheritance and abstract classes
- **Features**: Person base class with Employee implementation
- **OOP Concepts**: Abstract classes, inheritance, method overriding, polymorphism

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TypeScript-poo-exercises.git
   cd TypeScript-poo-exercises
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

### Development Mode
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build for Production
```bash
npm run build
```
Compiles TypeScript and builds the project for production.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## 🔧 Technologies Used

- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **HTML5** - Modern web markup
- **CSS3** - Styling and layout
- **DOM Manipulation** - Dynamic web interactions

## 📚 Exercise Details

### 1. CabeceraPagina Class
```typescript
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'center' | 'right' | 'left';
    
    // Methods for setting properties and generating HTML
}
```

### 2. Calculadora Class
```typescript
class Calculadora {
    private number1: number;
    private number2: number;
    
    // Mathematical operations: suma, resta, multiplicar, dividir, potencia, factorial
}
```

### 3. Cancion Class
```typescript
class Cancion {
    private titulo: string;
    private genero: string;
    private autor: string;
    
    // Getter/setter methods for author management
}
```

### 4. Cuenta Class (ATM System)
```typescript
class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;
    
    // Banking operations: depositar, retirar, mostrarDatos
}
```

### 5. Abstract Persona Class
```typescript
abstract class Persona {
    // Base properties for person
    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    // Employee-specific implementation
}
```

## 🌐 Navigation

The application features a dynamic routing system that allows navigation between exercises:

- **Home** (`/`) - Welcome page
- **Exercise 1** (`/ejercicio1`) - Page Header Customization
- **Exercise 2** (`/ejercicio2`) - Calculator
- **Exercise 3** (`/ejercicio3`) - Song Manager
- **Exercise 4** (`/ejercicio4`) - ATM System
- **Exercise 5** (`/ejercicio5`) - Abstract Classes Demo

## 🎯 Learning Objectives

This project demonstrates:

- ✅ **Class Creation** - Defining classes with properties and methods
- ✅ **Encapsulation** - Using private/public access modifiers
- ✅ **Inheritance** - Extending classes and method overriding
- ✅ **Abstract Classes** - Creating base classes with abstract methods
- ✅ **Polymorphism** - Different implementations of the same interface
- ✅ **Type Safety** - Leveraging TypeScript's type system
- ✅ **DOM Manipulation** - Creating interactive web interfaces
- ✅ **Event Handling** - Managing user interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-exercise`)
3. Commit your changes (`git commit -am 'Add new exercise'`)
4. Push to the branch (`git push origin feature/new-exercise`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rodrigo Javier**
- Course: Kodigo TypeScript Development

---

⭐ **Star this repository if it helped you learn TypeScript OOP concepts!**
