drop database if exist blog;

create database blog;

use blog;

create table post (
    id serial primary key,
    message text not null
);

insert into post (post) values ('Test');
insert into post (post) values ('Another test');

