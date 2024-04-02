FROM node:lts-bullseye-slim

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy app source code
COPY . .

# Build app
RUN npm run build --omit=dev

# Expose port
EXPOSE 3333

# Start app
CMD ["node", "./build/server.js"]