# Comandos

### Dev

Ejecuta los entornos de desarrollo de api (bakcend) y de client (frontend). Tener en cuenta que cada uno se ejecuta en puertos distintos

```sh
npm run dev
```

### Production Build

Compila los entornos de producción de api y client. En cada uno se crea una carpeta de 'dist'

```sh
npm run build
```

### Production Start

Ejecuta el entorno de producción de la api. A su vez, la api sirve los estáticos de producción de client

```sh
npm run start
```

# Otros comandos

```sh
# Ejecuta el pipeline 'dev' de turbo
# El pipeline ejecuta los 'npm run dev' de apps/api y apps/client
npx turbo run dev

# Instalar un paquete en una de las apps, en este caso en Api
npm install @nestjs/serve-static --workspace api
```
