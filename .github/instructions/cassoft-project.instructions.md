---
description: "Project-wide guidance for the CAS-soft website: Nuxt 4, Vue, Nuxt UI, Tailwind CSS v4, Russian B2B content, and responsive implementation."
applyTo: "**/*"
---

# CAS-soft Project Instructions

## Product and Content
- Treat `.github/docs/cassoft_ux_ui_prototype_multiplatform.md` as the source of truth for product positioning, site structure, UX, and visual direction.
- Position CAS-soft around the combined outcome of CRM implementation, automation, integrations, and custom development, not as a single-platform installer.
- Keep public-facing copy Russian-first and concise.
- Never fabricate customers, customer logos, metrics, certifications, case studies, contact details, or product capabilities. Use clearly marked placeholders until verified information is provided.

## Frontend
- Use Nuxt 4, Vue 3, Nuxt UI, and Tailwind CSS v4; follow the existing project setup and conventions.
- Build reusable sections and components where they serve multiple pages; avoid both duplicated page-specific UI and unnecessary abstraction.
- Make all new and changed views responsive across desktop, laptop, tablet, and mobile in the same task.
- Prefer realistic CRM interfaces, process diagrams, and product visuals over generic stock imagery or decorative effects.
- Keep interactions accessible, keyboard-operable, and respectful of reduced-motion preferences.

## Changes and Validation
- Read the relevant page and prototype section before editing; keep changes scoped to the owning feature.
- Run the narrowest useful validation for the change. If dependencies or required services are unavailable, state what remains unverified.
- Do not commit, push, deploy, install dependencies, or start long-running services unless the user requests it or the task requires it.