# Gunakan Node.js 24 (official image)
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json dulu (biar cache optimal)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build Next.js (untuk production)
RUN npm run build

# Expose port Next.js
EXPOSE 3000

# Jalankan Next.js
CMD ["npm", "run", "start"]
