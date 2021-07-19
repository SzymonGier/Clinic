create table users
(
    id           bigserial    not null
        constraint users_pk
            primary key,
    email        varchar(50)  not null,
    password     varchar(200) not null,
    first_name   varchar(30),
    last_name    varchar(50)  not null,
    city         varchar(40),
    street       varchar(50),
    house_number varchar(60),
    phone_number varchar(50),
    roles        varchar(255)
);

alter table users
    owner to root;

create unique index users_email_uindex
    on users (email);

create unique index users_email_uindex_2
    on users (email);

create unique index users_id_uindex
    on users (id);






INSERT INTO users (id, email, password, first_name, last_name, city, street, house_number, phone_number, roles) VALUES (1, 'admin@example.org', '$2a$10$JNB3xDzToT/XNH6LgJU.lOREp8pN5q4x07p66LrBXHoIt1GEgqW0S', 'Admin', 'Adminowski', 'Kielce', 'Wiejska', '11', '+48 123 222 999', 'ROLE_USER,ROLE_ADMIN');

