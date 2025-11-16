# Laravel React Starter Kit

Một project Laravel + React được tối ưu hóa với Docker Compose, sử dụng Inertia.js và Tailwind CSS.

## Yêu cầu hệ thống

- Docker
- Docker Compose
- Git

## Hướng dẫn cài đặt

### 1. Clone repository

```bash
git clone https://github.com/tuanha1305/laravel-react-starter-kit.git
cd laravel-react-starter-kit
```

### 2. Cấu hình environment

Copy file environment example và tạo file `.env`:

```bash
cp src/.env.example src/.env
```

**Quan trọng:** Cần cấu hình lại database connection trong file `src/.env` để hoạt động với Docker:

```env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

APP_URL=http://localhost:8000
```

### 3. Khởi động containers

Build và khởi động tất cả services với Docker Compose:

```bash
docker-compose up -d --build
```

Lệnh này sẽ khởi động 3 services:
- **app**: PHP-FPM container chạy Laravel
- **webserver**: Nginx container serve web (port 8000)
- **db**: MySQL 8.0 database (port 3306)

### 4. Cài đặt dependencies và setup database

Chạy các lệnh sau trong container `app` để cài đặt PHP dependencies và setup database:

```bash
# Cài đặt Composer dependencies
docker-compose exec app composer install

# Tạo application key
docker-compose exec app php artisan key:generate

# Chạy database migrations
docker-compose exec app php artisan migrate

# Cài đặt Node.js dependencies
docker-compose exec app npm install

# Build assets
docker-compose exec app npm run build
```

### 5. Truy cập ứng dụng

Mở trình duyệt và truy cập: **http://localhost:8000**

## Cấu trúc project

```
react-starter-kit/
├── src/                    # Laravel application
│   ├── app/               # Application logic
│   ├── config/            # Configuration files
│   ├── database/          # Database files
│   ├── resources/         # Views & assets (React components)
│   ├── routes/            # Route definitions
│   └── public/            # Public files
├── nginx/
│   └── conf.d/
│       └── default.conf   # Nginx configuration
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile            # PHP-FPM container definition
└── README.md             # This file
```

## Các lệnh hữu ích

### Quản lý containers

```bash
# Khởi động containers
docker-compose up -d

# Dừng containers
docker-compose down

# Xem logs
docker-compose logs -f

# Xem logs của service cụ thể
docker-compose logs -f app
docker-compose logs -f webserver
docker-compose logs -f db
```

### Lệnh Laravel

```bash
# Chạy Laravel Artisan commands
docker-compose exec app php artisan <command>

# Ví dụ:
docker-compose exec app php artisan migrate:fresh --seed
docker-compose exec app php artisan make:controller TestController
docker-compose exec app php artisan tinker
```

### Lệnh Node.js

```bash
# Chạy npm commands
docker-compose exec app npm <command>

# Ví dụ:
docker-compose exec app npm run dev
docker-compose exec app npm run build
docker-compose exec app npm run lint
```

### Database

```bash
# Kết nối đến MySQL database
docker-compose exec db mysql -u root -p

# (Nhấn Enter khi được yêu cầu password vì đang để trống)
```

## Ports mặc định

- **Web Server**: 8000 (Nginx)
- **Database**: 3306 (MySQL)

## Trouleshooting

### Container không khởi động được

```bash
# Xóa tất cả containers và volumes
docker-compose down -v
docker-compose up -d --build
```

### Permission issues

Nếu gặp lỗi permission trên Linux/Mac:

```bash
sudo chown -R $USER:$USER src/
```

### Database connection failed

Kiểm tra lại file `src/.env` đảm bảo các cấu hình database đúng:

```env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

### Assets không load được

Chạy lại lệnh build assets:

```bash
docker-compose exec app npm run build
```

## Development mode

Để chạy development mode cho frontend:

```bash
# Trong terminal 1: Khởi động containers
docker-compose up -d

# Trong terminal 2: Chạy Vite development server
docker-compose exec app npm run dev
```

## Production deployment

Để deploy lên production:

1. Cập nhật biến môi trường trong `src/.env`
2. Build assets cho production:
   ```bash
   docker-compose exec app npm run build
   ```
3. Chạy production optimizations:
   ```bash
   docker-compose exec app php artisan config:cache
   docker-compose exec app php artisan route:cache
   docker-compose exec app php artisan view:cache
   ```

## Hỗ trợ

Nếu gặp vấn đề trong quá trình cài đặt, hãy kiểm tra:

1. Docker và Docker Compose đã được cài đặt đúng phiên bản
2. Ports 8000 và 3306 không bị占用 bởi ứng dụng khác
3. File `src/.env` được cấu hình đúng

---

**Happy Coding! 🚀**
