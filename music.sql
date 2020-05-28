CREATE DATABASE music;

CREATE USER 'music'@'localhost' IDENTIFIED WITH mysql_native_password BY 'M3$!c';

GRANT ALL MUSIC.* TO 'music'@'localhost';

USE music;

CREATE TABLE genres (
    id INT auto-increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    createdAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)

);

CREATE TABLE artists (
    id INT auto-increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    createdAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE album (
    id INT auto-increment,
    title VARCHAR(255) NOT NULL,
    artistId INT
    createdAt DATETIME DEFAULT NOW(),
    createdAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
    FOREIGN KEY(authorId) REFERENCES artists(id)
);

CREATE TABLE albumGenres (
    albumId INT,
    genreId INT,
    createdAt DATETIME DEFAULT NOW(),
    createdAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(albumId, genreId),
    FOREIGN KEY(albumId) REFERENCES albumId(id)
    FOREIGN KEY(genreId) REFERENCES genres(id)
);


 INSERT INTO genres (name) VALUES  ('Dance');
 INSERT INTO genres (name) VALUES  ('Pop');
 INSERT INTO genres (name) VALUES  ('Pop Rock');
 INSERT INTO genres (name) VALUES  ('R & B');
 INSERT INTO genres (name) VALUES  ('Rap');
 INSERT INTO genres (name) VALUES  ('Reggae');



 INSERT INTO artists (name) VALUES  ('Michael Jackson');
 INSERT INTO artists (name) VALUES  ('Drake');
 INSERT INTO artists (name) VALUES  ('Madonna');
 INSERT INTO artists (name) VALUES  ('Bob Marley');
 INSERT INTO artists (name) VALUES  ('Kanye West');

INSERT INTO albums (title, artistId) VALUES ('Thriller', 1);
INSERT INTO albums (title, artistId) VALUES ('TaKe Care', 2);
INSERT INTO albums (title, artistId) VALUES ('True Blue', 3);
INSERT INTO albums (title, artistId) VALUES ('Catch A Fire', 4);
INSERT INTO albums (title, artistId) VALUES ('College Dropout',	5);

1	2	3	1
2	5	4	2
3	1	2	3
4	6	4	3
5	5	2	4

