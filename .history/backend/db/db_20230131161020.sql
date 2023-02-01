create table users(
id serial primary key not null,
  name varchar(50) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  img varchar(255) not null,
  created_at date default current_date
);
create table posts(
   id SERIAL  not null auto_increment,
  title varchar(50) not null,
  description varchar(1050)  not null,
  img varchar(255) not null,
  created_at date default current_date,
   uid INTEGER not null, primary key (id),
   index uid_idx (uid ASC) visible,
   constraint uid foreign key (uid) references users(id) on delete cascade on update restrict
); 
 

   CREATE UNIQUE INDEX uid_idx ON posts (uid);

ALTER TABLE orders
     ALTER TABLE users ADD index fk_posts_users ( uid_idx) REFERENCES users (user_id) on delete cascade
   on update cascade;

  