# Flux AI Image Generator

Flux Image AI is an AI-powered image generation platform built using Next.js and the Flux.1 AI model. The platform allows users to create high-quality images from text prompts quickly and easily. It also features a prompt generator to help optimize image creation prompts.

visit it ☞: [fluximage.org](https://fluximage.org)


## Features

- AI Image Generation: Generate high-quality images based on text prompts using the Flux.1 AI model.
- Prompt Generator: Improve and refine your prompts to get the best results from the AI.
- i18n Support: Full internationalization support for multilingual audiences.
- Responsive Design: Built with TailwindCSS to ensure a responsive and clean user interface on all devices.
- High Performance: Hosted on Vercel with Cloudflare CDN for fast, secure, and reliable performance.

## Tech Stack

Framework: Next.js
Hosting: Vercel
Domain: Dynadot
CDN: Cloudflare
Styling: TailwindCSS
Template: Radix UI & Preline UI


## Quick Started

Deploy on Vercel (Don't forget to setup env)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/volume988/flux-ai-image-webui.git&project-name=flux-ai-image&repository-name=flux-ai-image)

#### 1. Clone project

```
git clone https://github.com/volume988/flux-ai-image-webui.git
```

#### 2. Install dependencies

```
cd imagetoprompt-ai
pnpm i
```

#### 3. Init database

create your database use [local postgres](https://wiki.postgresql.org/wiki/Homebrew) or [supabase](https://supabase.com/)

create tables and migrate:

```
npx prisma generate
prisma migrate dev
```

#### 4. copy .env.example and rename it to .env

```
GOOGLE_ID=
GOOGLE_SECRET=
NODE_ENV=development

GITHUB_ID=
GITHUB_SECRET=

EMAIL_SERVER=
EMAIL_FROM=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

REPLICATE_API_URL=https://api.replicate.com/v1/predictions
REPLICATE_API_TOKEN=
REPLICATE_API_VERSION=


R2_ACCOUNT_ID=
R2_BUCKET=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_DOMAIN_URL=


POSTGRES_DATABASE="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="xxxxx"
POSTGRES_PRISMA_URL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL_NON_POOLING="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL_NO_SSL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_USER="postgres"
```


#### 5. Run it

```
pnpm dev
```

#### 6. open http://localhost:3000 for preview

![fluximage.org](https://pub-f5fc00c4ca7b445d95004c53d4b77e82.r2.dev/images/%E6%88%AA%E5%B1%8F2024-08-16%2011.42.05.png "Flux AI Image Generator")



## Link Me

Twitter: [https://x.com/candytools118](https://x.com/candytools118)

if this project is helpful to you, buy me a coffee.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/wuyasong)