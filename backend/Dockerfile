FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]