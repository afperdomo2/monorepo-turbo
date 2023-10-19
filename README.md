```sh
# Ejecuta el comando 'npm run dev', que se encuentra en apps/api y en apps/client
npx turbo run dev

# Instalar un paquete en una de las apps, en este caso en Api
npm install @nestjs/serve-static --workspace api

# Comandos

# Ejecuta los entornos de desarrollo de api (bakcend) y de client (frontend). Tener en cuenta que cada uno se ejecuta en puertos distintos
npm run dev

# Compila los entornos de producción de api y client. En cada uno se crea una carpeta de 'dist'
npm run build

# Se debe ejecutar antes build
# Ejecuta el entorno de producción de la api. A su vez, la api sirve los estáticos de producción de client
npm run start
```
