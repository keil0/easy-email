## Stack
- Easy Email forked from : https://github.com/m-Ryan/easy-email
- Docker for infrastructure
- Traefik for reverse proxy with auth middleware
- MySQL for database
- AdonisJS v6 for backend

## Development environment
### Prerequisites
- Docker
- Docker Compose

### Run the development environment
```bash
cd docker
docker-compose -f docker-compose.dev.yml up
```

### Run migration on docker environment
```bash
docker exec -it easy-email-auth node ace migration:run
```