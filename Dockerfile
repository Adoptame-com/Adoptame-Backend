FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:22
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:staging"]