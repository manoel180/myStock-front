FROM node:lts-alpine3.20 AS build-stage
# Create a Virtual directory inside the docker image
WORKDIR /app
# Copy files to virtual directory
COPY package.json package-lock.json ./
# Install the Angular CLI 
RUN npm install -g @angular/cli
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .

RUN npm ci
# Build the Angular app with production configuration
RUN ng build --configuration=production

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:stable-alpine AS production-stage
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY --from=build-stage /app/dist/my-stock-app/browser /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/nginx.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
