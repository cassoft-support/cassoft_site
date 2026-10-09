# Хранение и публикация материалов

Новости и статьи хранятся в PostgreSQL в общей таблице `publications`. Отдельная запись определяет тип материала, а страницы строятся общими шаблонами: `/blog` выводит опубликованный список, `/blog/[slug]` отображает одну запись. Новая публикация не требует создания нового Vue-файла.

## Модель публикации

- `kind`: `article` или `news`;
- `status`: `draft`, `published` или `archived`;
- `slug`: уникальный адрес публикации;
- `title`, `excerpt`, `body`, `category`;
- `cover_image`, `reading_minutes`;
- `published_at`, `created_at`, `updated_at`.

Черновики, архивные записи и публикации с датой в будущем не выдаются публичным API.

## Подключение

Для Docker используйте `.env.example` как основу локального `.env`. Compose подключает приложение к PostgreSQL по внутренней сети Docker и при первом создании volume применяет начальную SQL-схему автоматически. Для доступа к БД используйте `docker compose exec db psql -U cassoft -d cassoft`. Для отдельного запуска задайте `DATABASE_URL` (или `NUXT_DATABASE_URL`) в окружении сервера; сам URL и секреты нельзя коммитить.

Локальная команда `docker compose up --build --detach` автоматически применяет `compose.override.yaml` и запускает Nuxt в dev-режиме с hot reload. Production-образ собирается отдельно, без override: `docker compose -f compose.yaml up --build --detach`.

Для локальной разработки после установки зависимостей схема синхронизируется из Drizzle:

```sh
pnpm db:push
```

Для контролируемого обновления схемы создавайте и применяйте миграции Drizzle:

```sh
pnpm db:generate
pnpm db:migrate
```

SQL-скрипт `server/database/migrations/0001_publications.sql` можно использовать для ручного первоначального развёртывания вместо Drizzle migrations. Не применяйте этот SQL и начальную миграцию Drizzle повторно к одной и той же пустой БД. Веб-админка для редакторов не входит в текущую основу: записи можно наполнять через защищённый CMS/API-интерфейс следующим этапом; публичные GET endpoints не позволяют менять контент.

## Публичные endpoints

- `GET /api/publications?kind=article&limit=20` — опубликованный список; `kind` необязателен, лимит ограничен 100 записями.
- `GET /api/publications/:slug` — опубликованный материал по slug; для отсутствующего материала возвращается 404.