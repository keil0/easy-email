FROM node:20

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3333

# Start app
CMD ["node", "./build/server.js"]