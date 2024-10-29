# Innocean - Postcard
## Stack
- Easy Email forked from : https://github.com/m-Ryan/easy-email
- Docker for infrastructure
- Traefik for reverse proxy with auth middleware
- MySQL for database
- AdonisJS v6 for backend

## Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Node.js v20.12.0 (or use NVM)

## Setup local dev environment
1. Clone the repository
2. Copy the `.env.example` file to `.env`
3. Copy the `backend/.env.example` file to `backend/.env` and update the values
4. Install all dependencies
```bash
cd <project_root>
npm run install-all
cd backend
npm i
```
5. Start the development server
```bash
cd <project_root>
cd docker
docker compose -f docker-compose.localhost.yml up
```
6. Create the database by running the following command
```bash
cd <project_root>
cd backend
node ace migration:run
```
7. Add one user into the database by running the following command
```bash
docker exec -it easy_email_mysql mysql -u easy_email -peasy_email easy_email_users
```
```sql
INSERT INTO users (email, full_name) VALUES ('example@example.com', 'John Doe');
```
8. Copy the default images to the public folder
```bash
cd <project_root>
cp -r backend/uploads backend/public
```

## Run the project locally (frontend and backend)
1. Start frontend & backend in two terminals
```bash
# In first terminal
cd <project_root>
npm run dev
# In second terminal
cd <project_root>
cd backend
npm run dev
```
2. Go to [http://localhost:3333](http://localhost:3333)
3. Put the email you added in the database
4. Go to your email and click on the magic link (if you are using mailtrap, you can see the email in the mailtrap.io inbox)
5. You can now go to [http://localhost:3000](http://localhost:3000) and see the postcard app

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

## Configure CI/CD & deploy automation
### Define the following secrets in the repository settings:
- `GHCR_TOKEN`: Github Personal Access Token to access Github packages
  And the following environment variables for staging / production in the repository settings:
- `VITE_API_BASE_URL`: Backend base URL (e.g. https://postcard.innocean.app/auth)

### Setup autopull
1. SSH into the VPS
2. Create folder to store the config
```bash
mkdir -p ~/watchtower
cd ~/watchtower
```
3. Create a .env file with the following content
```txt
REPO_USER=INNOCEAN-FRANCE
REPO_PASS=[PAT_TOKEN_HERE]
WATCHTOWER_INCLUDE_RESTARTING=true
```
4. Run this following command
```sh
docker run -d --name watchtower-registr --env-file ~/watchtower/.env -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --interval 30 --cleanup
```

Now each time a new image is available, watchtower will pull it and restart the containers