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
- Signals
- Bulma (css утилиты: сетка и пр)

## 🗂️ Структура проекта

- `src/app/shared/` — Переиспользуемые сущности (директивы, пайпы, компоненты)
- `src/app/features/books/` — Модуль приложения списка книг
- `src/app/features/book/` — Модуль приложения формы книги
- `src/app/core/services/` — Сервисы для использования во всем приложения
- `src/app/сore/models/` — Интерфейсы и типы данных
- `src/app/app.routes.ts` — Конфигурация маршрутов
- `src/app/app.config.ts` — Конфигурация приложения
- `src/assets/` — Статические файлы

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
