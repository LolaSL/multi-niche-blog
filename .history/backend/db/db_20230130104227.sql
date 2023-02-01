create table users(
  user_id serial primary key,
  name varchar(50) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  img varchar(255) not null,
  created_at date default current_date
);
create table posts(
  id serial primary key,
  title varchar(50) not null,
  description varchar(1050)  not null,
  img varchar(255) not null,
  created_at date default current_date,
  "uid" INTEGER not null,
  index "uid_idx" ("uid" ASCENDING) not nullvisible,
  constant uid FOREIGN key (uid) 
  references users(id) on delete cascade
   on update cascade;
);