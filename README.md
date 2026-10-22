# APV Backend — Administrador de Pacientes de Veterinaria

API REST para una aplicación de administración de pacientes de veterinaria. Permite a cada veterinario registrarse, confirmar su cuenta por email, iniciar sesión y gestionar sus propios pacientes (crear, listar, editar y eliminar).

**API en línea (Render):** `https://veterinarios-backend.onrender.com`

> El backend está en el plan gratuito de Render: si lleva un rato sin uso, la primera petición puede tardar entre 30 y 60 segundos mientras el servicio se reactiva.

Proyecto realizado como parte de un curso FullStack con JavaScript (Udemy), desplegado por mi cuenta como parte de mi portafolio. El cliente está en [veterinarios-frontend](https://github.com/developer-ortega/veterinarios-frontend).

## Funcionalidades

- Registro de veterinarios con confirmación de cuenta por email
- Autenticación con JWT y rutas protegidas
- Recuperación de contraseña por email (token de un solo uso)
- Edición de perfil y cambio de contraseña
- CRUD de pacientes, donde cada veterinario solo accede a los suyos
- Contraseñas hasheadas con bcrypt

## Stack técnico

- **Node.js** + **Express 5** — servidor y enrutamiento
- **MongoDB** (Atlas) + **Mongoose** — base de datos y modelado
- **JWT** (jsonwebtoken) — autenticación
- **bcrypt** — hash de contraseñas
- **Nodemailer** — envío de emails (confirmación y recuperación de contraseña)
- **CORS** — acceso restringido al dominio del frontend
- **Render** (API) y **MongoDB Atlas** (base de datos) — despliegue

## Endpoints

### Veterinarios — `/api/veterinarios`

| Método | Ruta | Acceso | Descripción |
|--------|------|--------|-------------|
| POST | `/` | Público | Registrar un veterinario |
| GET | `/confirmar/:token` | Público | Confirmar cuenta |
| POST | `/login` | Público | Iniciar sesión (devuelve JWT) |
| POST | `/olvide-password` | Público | Solicitar recuperación de contraseña |
| GET / POST | `/olvide-password/:token` | Público | Validar token / definir nueva contraseña |
| GET | `/perfil` | Privado | Obtener perfil |
| PUT | `/perfil/:id` | Privado | Actualizar perfil |
| PUT | `/actualizar-password` | Privado | Cambiar contraseña |

### Pacientes — `/api/pacientes` (todas privadas)

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/` | Agregar paciente |
| GET | `/` | Listar pacientes del veterinario |
| GET | `/:id` | Obtener un paciente |
| PUT | `/:id` | Actualizar un paciente |
| DELETE | `/:id` | Eliminar un paciente |

Las rutas privadas requieren el header `Authorization: Bearer <token>`.

## Estructura del proyecto

```
├── config/        # Conexión a MongoDB
├── controllers/   # Lógica de veterinarios y pacientes
├── helpers/       # Generación de JWT/ids y plantillas de email
├── middleware/    # Verificación de autenticación (checkAuth)
├── models/        # Esquemas Veterinario y Paciente
├── routes/        # Definición de rutas
└── index.js       # Punto de entrada
```

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/developer-ortega/veterinarios-backend.git
   cd veterinarios-backend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz (usar `.env.example` como referencia) con tus propias credenciales:
   ```
   MONGO_URI=tu_conexion_de_mongodb
   JWT_SECRET=una_clave_larga_y_aleatoria
   EMAIL_HOST=
   EMAIL_PORT=
   EMAIL_USER=
   EMAIL_PASS=
   FRONTEND_URL=http://localhost:5173
   PORT=4000
   ```

4. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `MONGO_URI` | Cadena de conexión a MongoDB |
| `JWT_SECRET` | Clave secreta para firmar los tokens |
| `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` | Credenciales del servicio SMTP para los emails |
| `FRONTEND_URL` | URL del frontend (CORS y enlaces en los emails) |
| `PORT` | Puerto del servidor (por defecto 4000) |
