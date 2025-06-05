# 🌍 Countries Flags — Zustand + Vite + TypeScript

Реализация REST Countries API с переключателем цветовой темы и фильтрацией стран. Проект основан на [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## 🚀 Демонстрация

🔗 [Демо на GitHub Pages](https://github.com/Leogrand20/countries-flags)

## 🧩 Стек технологий

- **React 19**
- **TypeScript**
- **Vite**
- **Zustand** — управление состоянием
- **React Router v7**
- **React Select** — для выпадающих списков
- **React Toastify** — уведомления
- **uuid** — генерация ID
- **ESLint + Prettier + Simple Import Sort** — линтинг и автоформатирование

## 📁 Структура проекта (Feature-Sliced Design)

```
src/
├── app/               # Корневые компоненты и стили
├── entities/          # Бизнес-сущности (например, Country)
├── features/          # Фичи (поиск, фильтрация)
├── pages/             # Страницы приложения
├── shared/            # Общие утилиты, хуки, типы
└── widgets/           # Составные блоки интерфейса
```

## 🛠️ Установка

```bash
git clone https://github.com/Leogrand20/countries-flags.git
cd countries-flags
npm install
```

## 🧪 Скрипты

| Команда             | Назначение                          |
|---------------------|-------------------------------------|
| `npm run dev`       | Запуск dev-сервера (`localhost:8000`) |
| `npm run build`     | Сборка проекта                      |
| `npm run preview`   | Предпросмотр прод-сборки            |
| `npm run lint`      | Проверка линтером                   |
| `npm run lint:fix`  | Автоматическая фиксация ошибок      |

## 🧪 Дизайн

Макеты доступны в папке `design/`:
- Desktop & Mobile
- Светлая и тёмная тема

## 👤 Автор

- Денис Леоненко — [leograndprix.ru](https://leograndprix.ru)
- [GitHub](https://github.com/Leogrand20)

## 📝 Лицензия

Проект создан в обучающих целях. Лицензия отсутствует.
