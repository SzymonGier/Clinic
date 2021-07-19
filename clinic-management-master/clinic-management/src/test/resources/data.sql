INSERT INTO users (id, email, password, first_name, last_name, city, street, house_number, phone_number, roles) VALUES (100, 'admin@example.org', '$2a$10$Jz4/wmKweFH.oY4Cs/Vfw.HA4L2XKwB0kS3bdqAHS7SVs.VfioB3O', 'Admin', 'Adminowski', 'Kielce', 'Swietokrzyska', '12', '+48 123 123 123', 'ROLE_USER,ROLE_ADMIN');
INSERT INTO users (id, email, password, first_name, last_name, city, street, house_number, phone_number, roles) VALUES (101, 'receptionist@example.org', '$2a$10$5qxmmT5QugYoQbKvLO9ED.KNTmsE2PuLGT7i2vgS9mpRnrMzwVp.y', 'Recepcjonista', 'Recepcjonistowski', 'Kielce', 'Kielecka', '12', '+48 123 123 123', 'ROLE_RECEPTIONIST,ROLE_USER');
INSERT INTO users (id, email, password, first_name, last_name, city, street, house_number, phone_number, roles) VALUES (102, 'doctor@example.org', '$2a$10$VW5/lfliX59PqZJgDRypf.m/INCknmySD31jKqqPXck.r073JVp3W', 'Doktor', 'Doktorowski', 'Kielce', 'Sportowa', '12', '+48 123 123 123', 'ROLE_DOCTOR,ROLE_USER');
INSERT INTO users (id, email, password, first_name, last_name, city, street, house_number, phone_number, roles) VALUES (103, 'patient@example.org', '$2a$10$cYhZKOxOmsKWI26MTrkHw.8IljVD36dJraQ3KvkcxckRpvBMuLkmO', 'Pacjent', 'Pacjentowski', 'Kielce', 'Wiejska', '12', '+48 123 123 123', 'ROLE_PATIENT,ROLE_USER');

INSERT INTO rooms (id, beds_quantity, specialization) VALUES (3, '100', 'Test room');
INSERT INTO rooms (id, beds_quantity, specialization) VALUES (2, '1', 'Brak');
INSERT INTO rooms (id, beds_quantity, specialization) VALUES (1, '20', 'Sala pooperacyjna');

INSERT INTO patients (id, born_at, user_id, room_id) VALUES (1, '2020-05-17', 103, 1);
INSERT INTO doctors (id, specialization, user_id) VALUES (2, 'cardiologist', 102);