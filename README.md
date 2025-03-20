# Ekstrawork

Dette er en Next.js-applikation til administration af dokumentation, materialer og brugere.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Brugeradministration med forskellige rolleniveauer
- Dokumentationsstyring for arbejdsprojekter
- Materialestyring med priser og måleenheder
- Personalestyring med kategorier og timesatser

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment. To deploy to GitHub Pages:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the app to GitHub Pages
3. View your deployed app at `https://microfix.github.io/ekstrawork`

You can also manually deploy using:

```bash
npm run export  # Build and export the app
npm run deploy  # Deploy to GitHub Pages
```

## Environment Variables

For the app to function properly, the following environment variables must be set in your GitHub repository secrets:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License.