FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm build

# Expose port 4173 (Vite preview default)
EXPOSE 4173

# Start vite preview server
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4173"]
