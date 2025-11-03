# Use Node.js 20
FROM node:20

# Set working directorye
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite port
EXPOSE 5173

# Start dev server with HMR
CMD ["npm", "run", "dev", "--", "--host"]