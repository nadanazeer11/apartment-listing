# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest and build
COPY . .
RUN npm run build

# Stage 2: Serve with next start
FROM node:18

WORKDIR /app

# Only copy needed output files
COPY --from=builder /app ./

EXPOSE 3001

CMD ["npm", "run", "start"]
