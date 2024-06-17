FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY public ./public
COPY src ./src

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]