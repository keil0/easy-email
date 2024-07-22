# Production environment

## Install prod environment
### Prerequisites
- VPS server
- Domain linked to it
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Github CLI](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git#using-git)
- A database server (MySQL, Postgres, etc.) with a database created and user with access to it

### Create environment
1. Create a folder for the project "postcard"
2. Copy content of docker-compose.prd.yml into docker-compose.yml
3. Create .env file base from .env.example
4. [Generate a Personal Access Token (PAT) from Github](https://github.com/settings/tokens)
5. Login to Github packages
    ```bash
    echo "[PAT_TOKEN_HERE]" | docker login ghcr.io -u USERNAME --password-stdin
    ```
6. Create uploads folder to store images `mkdir uploads`
7. Run the docker-compose
    ```bash
    docker-compose up -d
    ```
8. Run migration
    ```bash
    docker exec -it postcard-auth node ace migration:run
    ```
   
### Database manual operations
#### Connect to the database
```bash
docker run --rm -it mysql bash
mysql -h 51.159.113.67 --port 10792 -p -u innocean postcard
```

#### List all users
```bash
SELECT * FROM users;
```

#### Insert a new user
```bash
INSERT INTO users (full_name, email, created_at) VALUES ('John', 'contact@example.com', NOW());
```

#### Delete a user
```bash
DELETE FROM users WHERE email = 'contact@example.com';
```

## Configure CI/CD
Define the following secrets in the repository settings:
- `GHCR_TOKEN`: Github Personal Access Token to access Github packages
And the following environment variables for staging / production in the repository settings:
- `VITE_API_BASE_URL`: Backend base URL (e.g. https://postcard.innocean.app/auth)