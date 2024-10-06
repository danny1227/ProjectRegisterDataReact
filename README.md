# Proyecto de Autenticación de Usuarios con React y Express

Este proyecto implementa un sistema de registro e inicio de sesión de usuarios utilizando **React** para el frontend y **Express** para el backend. La gestión de la sesión de usuarios se maneja mediante la API de Contexto de React, y el backend simula un almacenamiento de datos de usuarios utilizando un arreglo en memoria. Además, se utiliza **Bootstrap** para dar estilo a las páginas.

## Funcionalidades

- **Registro de Usuarios**: Un formulario de registro que recolecta el nombre del usuario, DPI, correo electrónico y contraseña, y envía una solicitud POST al backend para validación y almacenamiento.
- **Inicio de Sesión de Usuarios**: Un formulario de inicio de sesión que permite a los usuarios autenticarse enviando una solicitud POST con su correo electrónico y contraseña. Si son válidos, el usuario inicia sesión y su sesión es gestionada con el Contexto de React.
- **Gestión de Sesiones**: La API de Contexto de React se utiliza para almacenar los datos de la sesión del usuario, haciendo que sean accesibles en diferentes componentes.
- **Almacenamiento en Memoria**: El backend almacena los datos de los usuarios en un arreglo simple (sin necesidad de una base de datos).
- **Estilos con Bootstrap**: Las páginas de registro e inicio de sesión están estilizadas usando Bootstrap para una interfaz moderna y responsiva.

## Estructura del Proyecto
- **login**.
- **registro**.
- **Home (al ingresar al login)**.
