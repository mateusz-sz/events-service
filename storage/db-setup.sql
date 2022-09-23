CREATE DATABASE events_storage;

\c events_storage;

-- create table for users
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(28) NOT NULL,
  last_name     VARCHAR(28) NOT NULL,
  email       VARCHAR(64) NOT NULL
);

-- create table for events
CREATE TABLE events (
  id          SERIAL PRIMARY KEY,
  owner_id    INTEGER REFERENCES users(id),
  date        TIMESTAMP NOT NULL
);

