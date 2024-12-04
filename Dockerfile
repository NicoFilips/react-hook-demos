# Schritt 1: Baue die React-Anwendung
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


EXPOSE 80

CMD ["npm", "run", "preview", "--", "--host", "--port", "80"]