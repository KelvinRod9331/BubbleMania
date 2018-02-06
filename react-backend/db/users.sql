DROP DATABASE IF EXISTS userlist_bubblemania;
CREATE DATABASE userlist_bubblemania;

\c userlist_bubblemania;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR
);

/* tyler, password: 123456 */

INSERT INTO users (username, password_digest)
  VALUES ('Tyler21', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq');


CREATE TABLE scores (
  ID SERIAL PRIMARY KEY,
  high_score INT, 
  current_score INT,
  user_ID SERIAL REFERENCES users
);

INSERT INTO scores (high_score, current_score, user_ID)
  VALUES (123, 12, 1);