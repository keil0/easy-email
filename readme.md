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

