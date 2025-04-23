FROM node:22-alpine
WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package*.json ./

# Instala las dependencias de la aplicación con pnpm
RUN pnpm install
COPY . .

# Construye la aplicación
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "run", "start:dev"]
