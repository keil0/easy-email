# Adonis backend

## Run migration
```bash
docker exec -it easy-email-auth node ace migration:run
```

## Connect to the DB
```bash
docker exec -it easy-email-mysql mysql -u easy_email -p easy_email_users
```

## Insert a user
```sql
INSERT INTO users (email) VALUES ('contact@pierrecruz.com');
```

## Delete a user
```sql
DELETE FROM users WHERE email = 'contact@pierrecruz.com';
```