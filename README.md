# Events service app

This project is a demonstration app. Implemented for BrainHUB recruitment process purposes.
It is a simple React app that connects with Node.js API to create an event in the PostgreSQL database.
Getting everything should be simple, since the app is contenerized with the help of Docker.

# Usage

### Prerequisites
In order to setup the app you have to have `docker` installed with its `docker compose` plugin.

### Download the source code
Clone the repository with:
```
git clone git@github.com:mateusz-sz/events-service.git
```

### Setup containers
```
cd event-service && docker compose up --detach --build
```

### Setup database

```
docker exec --user postgres -it events-storage bash -c "psql"
```

In Postgres cli execute:
```
\i scripts/db-setup.sql
```
This should setup the database, tables and relations between them. 

---

Now everything should be working.
The frontend React app is listening on `localhost:3000`. From there you can create events.

# Running tests

### Backend app
To test the backend Node.js app navigate to `api` directory and execute:
```
npm install && npm run test
```

### Frontend app
To test the frontend React app navigate to `events-ui` directory and execute:
```
npm run test
```

# Troubleshooting
You may encounter some problems with running the app if one of the following ports is already taken on your machine:
* `3000`
* `8080`
* `5432`

These ports are meant to be used by React, Node.js and PostgreSql respectively. So if you have them occupied, the app won't run. You can either free up these ports and try again or rewrite `docker-compose.yml` file to make the app use other ports.
