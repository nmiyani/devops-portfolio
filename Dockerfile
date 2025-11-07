# Stage 1 - build
FROM node:20-bullseye AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Stage 2 - serve with nginx (small image)
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
# Optional: copy a custom nginx.conf if you need SPA fallback, headers, gzip, etc.
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
