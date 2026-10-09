CREATE TYPE publication_kind AS ENUM ('article', 'news');
CREATE TYPE publication_status AS ENUM ('draft', 'published', 'archived');

CREATE TABLE publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar(180) NOT NULL UNIQUE,
  kind publication_kind NOT NULL,
  status publication_status NOT NULL DEFAULT 'draft',
  title varchar(240) NOT NULL,
  excerpt text NOT NULL,
  body text NOT NULL,
  category varchar(100) NOT NULL,
  cover_image text,
  reading_minutes integer,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX publications_status_published_at_idx
  ON publications (status, published_at DESC);
CREATE INDEX publications_kind_published_at_idx
  ON publications (kind, published_at DESC);