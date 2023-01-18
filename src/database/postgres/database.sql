-- Create DB 
CREATE DATABASE test_db;

-- Create table 
CREATE TABLE author_tb(
  author_id SERIAL PRIMARY KEY,
  author_name VARCHAR(255),
  author_age VARCHAR(255),
  author_type VARCHAR(255),
  author_email VARCHAR(255),
);

-- Create table 
CREATE TABLE author_portfolio_tb(
  portfolio_id SERIAL PRIMARY KEY,
  posts VARCHAR(255),
  author_id SERIAL NOT NULL REFERENCES authors_tb (author_id)
);

-- Create table 
CREATE TABLE post_tb(
  post_id SERIAL PRIMARY KEY,
  post_type VARCHAR(255),
  post_title VARCHAR(255),
  post_description VARCHAR(255),
  author_id SERIAL NOT NULL REFERENCES authors_tb (author_id)
);
