# Sử dụng Node.js base image
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build NestJS app
RUN npm run build

# Kiểm tra xem dist/ có tồn tại không (Debug)
RUN ls -l dist

# Expose port để NestJS có thể chạy
EXPOSE 3001

# Command để chạy ứng dụng
CMD ["npm", "run", "start:prod"]
