create table users(
  user_id serial primary key,
  name VARCHAR(50) NOT NULL,
  email varchar(255) unique not null,
  password varchar(255) not null,
  im
  created_at date default current_date

);