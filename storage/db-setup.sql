CREATE DATABASE IF NOT EXISTS events-storage;

-- create table for users
CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(28) NOT NULL,
  surname     VARCHAR(28) NOT NULL,
  email       VARCHAR(64) NOT NULL
);

-- create table for events
CREATE TABLE IF NOT EXISTS events (
  id          SERIAL PRIMARY KEY,
  owner_id    INTEGER REFERENCES users(id),
  date        TIMESTAMP NOT NULL
);
