CREATE DATABASE playlist;

CREATE USER 'playlist'@'localhost' IDENTIFIED WITH mysql_native_password BY 'P!@y7i$t';

GRANT ALL ON playlist.* TO 'playlist'@'localhost';

USE playlist;

CREATE TABLE artists (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);


CREATE TABLE genres (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)

);



CREATE TABLE albums (
    id INT auto_increment,
    title VARCHAR(255) NOT NULL,
    artistId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(artistId) REFERENCES artists(id)
);

CREATE TABLE albumsGenres (
    albumId INT,
    genreId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(albumId, genreId),
    FOREIGN KEY(albumId) REFERENCES albums(id),
    FOREIGN KEY(genreId) REFERENCES genres(id)
);


INSERT INTO artists (name) VALUES  ('Michael Jackson');
INSERT INTO artists (name) VALUES  ('Drake');
INSERT INTO artists (name) VALUES  ('Madonna');
INSERT INTO artists (name) VALUES  ('Bob Marley');
INSERT INTO artists (name) VALUES  ('Kanye West');
 
 
 
 INSERT INTO genres (name) VALUES  ('Dance');
 INSERT INTO genres (name) VALUES  ('Pop');
 INSERT INTO genres (name) VALUES  ('Pop Rock');
 INSERT INTO genres (name) VALUES  ('R & B');
 INSERT INTO genres (name) VALUES  ('Rap');
 INSERT INTO genres (name) VALUES  ('Reggae');


INSERT INTO albums (title, artistId) VALUES ('Thriller', 1);
INSERT INTO albums (title, artistId) VALUES ('TaKe Care', 2);
INSERT INTO albums (title, artistId) VALUES ('True Blue', 3);
INSERT INTO albums (title, artistId) VALUES ('Catch A Fire', 4);
INSERT INTO albums (title, artistId) VALUES ('College Dropout', 5);

INSERT INTO albumsGenres (albumId, genreId) VALUES (1, 2);    
INSERT INTO albumsGenres (albumId, genreId) VALUES (1, 3); 
INSERT INTO albumsGenres (albumId, genreId) VALUES (1, 1);
INSERT INTO albumsGenres (albumId, genreId) VALUES (2, 5);    
INSERT INTO albumsGenres (albumId, genreId) VALUES (2, 4); 
INSERT INTO albumsGenres (albumId, genreId) VALUES (2, 2);
INSERT INTO albumsGenres (albumId, genreId) VALUES (3, 1);    
INSERT INTO albumsGenres (albumId, genreId) VALUES (3, 2);
INSERT INTO albumsGenres (albumId, genreId) VALUES (3, 3);
INSERT INTO albumsGenres (albumId, genreId) VALUES (4, 6);     
INSERT INTO albumsGenres (albumId, genreId) VALUES (4, 4); 
INSERT INTO albumsGenres (albumId, genreId) VALUES (4, 3);
INSERT INTO albumsGenres (albumId, genreId) VALUES (5, 5);    
INSERT INTO albumsGenres (albumId, genreId) VALUES (5, 2); 
INSERT INTO albumsGenres (albumId, genreId) VALUES (5, 4);