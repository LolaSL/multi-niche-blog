create table users(
  user_id serial primary key,
  name varchar(50) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  img varchar(255) not null,
  created_at date default current_date
);
create table posts(
   id SERIAL PRIMARY KEY,
  title varchar(50) not null,
  description varchar(1050)  not null,
  img varchar(255) not null,
  created_at date default current_date,
   uid INTEGER REFERENCES users(user_id)
); 
 index "uid_idx" ("uid" ASCENDING) visible,
  constant uid FOREIGN key (uid) 
  references users(id) on delete cascade
   on update cascade;

   CREATE UNIQUE INDEX uid_idx ON posts (uid);
ALTER TABLE orders
     ALTER TABLE users ADD index fk_posts_users FOREIGN KEY ( uid_idx) REFERENCES users (user_id) on delete cascade
   on update cascade;

  