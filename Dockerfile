FROM node:lts-alpine3.20 AS build-stage

# Get the arguments from the command line
ARG NG_APP_BACKEND_URL

# Set the environment variables
ENV NG_APP_BACKEND_URL=$NG_APP_BACKEND_URL

# Create a Virtual directory inside the docker image
WORKDIR /app
# Copy files to virtual directory
COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .

RUN npx ng add @ngx-env/builder --skip-confirmation
RUN npm add @ngx-env/core
RUN npx ng config projects.ng-app.architect.build.options.ngxEnv.prefix 'NG_APP_'
RUN npm ci
RUN echo 'console.log("NG_APP_BACKEND_URL", import.meta.env["NG_APP_BACKEND_URL"])' >>src/main.ts

RUN npm run build

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:stable-alpine3.19-slim AS production-stage
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY --from=build-stage /app/dist/my-stock-app/browser /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/nginx.conf

RUN echo "mainFileName=\"\$(ls /usr/share/nginx/html/main*.js)\" && \
          envsubst '\$NG_APP_BACKEND_URL ' < \${mainFileName} > main.tmp && \
          mv main.tmp  \${mainFileName} && nginx -g 'daemon off;'" > run.sh
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
