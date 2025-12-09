# Rakawi Dodo (Wibu Theme) 🌸

A personal website refactored with a "Sakura & Isekai" aesthetic. Built with Angular 19+ and Tailwind CSS.
Featuring a dynamic content engine backed by a JSON-like structure, separate component architecture, and full Docker deployment support.

## 🚀 Live Demo
**[https://rakawi-dodo.my.id/](https://rakawi-dodo.my.id/)**

## 🐳 Docker Hub
**[https://hub.docker.com/r/agungdh/rakawi-dodo.my.id](https://hub.docker.com/r/agungdh/rakawi-dodo.my.id)**

## Features

- **Theme**: Sakura Pink & Dark Purple (Isekai Vibe).
- **Core Components**:
  - **Home**: Hero section with anime stats.
  - **Anime, Manga, Manhwa, Manhua**: Dynamic lists with Search, Filter & Pagination.
  - **Biodata**: Profile with stats and favorites.
- **Tech Stack**:
  - Angular 19 (Standalone Components)
  - Tailwind CSS v4
  - Docker (Multi-stage build)
  - Nginx (Alpine based)

## Development

### Run Locally
```bash
npm start
# Opens at http://localhost:4200
```

### Docker Build (Local)
```bash
docker build -t raka-widodo-weebs .
docker run -p 80:80 raka-widodo-weebs
# Opens at http://localhost:80
```

## Deployment

The project is configured to auto-deploy to Docker Hub via GitHub Actions when pushing to `master`.

1. **Tag**: `agungdh/rakawi-dodo.my.id:latest`
2. **Secrets**: Requires `DOCKER_USERNAME` and `DOCKER_PASSWORD` in your GitHub Repository Secrets.

---
*Vibe Code by Antigravity ✨*
