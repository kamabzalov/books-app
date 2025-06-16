# 📚 Books Application

Приложение для поиска книг и просмотра информации о них. Реализовано на **Angular 19** с использованием **Angular Material** и **Standalone компонентов**.

## 🚀 Возможности

- 🔍 Поиск книг по названию или автору
- 📄 Просмотр подробной информации о книге
- 🎨 Библиотека компонентов Angular Material
- ⚙️ Архитектура с использованием Standalone компонентов

## 🛠️ Технологии

- Angular 19
- Angular Material
- Standalone Components
- RxJS
- TypeScript

## 🗂️ Структура проекта

- `src/app/components/` — Переиспользуемые UI-компоненты
- `src/app/components/book-card/` — Компонент карточки книги
- `src/app/pages/` — Страницы приложения
- `src/app/pages/home/` — Главная страница с поиском книг
- `src/app/pages/book-details/` — Страница с деталями книги
- `src/app/services/` — Сервисы для взаимодействия с API
- `src/app/services/books.service.ts` — Сервис получения данных о книгах
- `src/app/models/` — Интерфейсы и типы данных
- `src/app/models/book.model.ts` — Модель книги
- `src/app/app.routes.ts` — Конфигурация маршрутов
- `src/app/app.config.ts` — Конфигурация приложения
- `src/environments/` — Файлы переменных окружения
- `src/environments/environment.ts` — Конфигурация окружения (dev)
- `src/environments/environment.prod.ts` — Конфигурация окружения (prod)
- `src/assets/` — Статические файлы
- `src/main.ts` — Точка входа в приложение

## ⚙️ Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск приложения в режиме разработки
ng serve

# Сборка для продакшена
ng build

# Запуск линтера
ng lint

# Запуск prettier
npm run prettier


```
