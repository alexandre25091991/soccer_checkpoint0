-- Création de la table "team"
CREATE TABLE team (
id INT PRIMARY KEY,
name VARCHAR(50),
country VARCHAR(50)
);

-- Création de la table "player" avec la clé étrangère
CREATE TABLE player (
id INT PRIMARY KEY,
last_name VARCHAR(50),
first_name VARCHAR(50),
nationality VARCHAR(50),
age INT,
position VARCHAR(50),
team_id INT,
FOREIGN KEY (team_id) REFERENCES team(id)
);

-- Insertion des données dans la table "team"
INSERT INTO team (id, name, country) VALUES
(1, 'PSG', 'France'),
(2, 'Real Madrid', 'Spain');

-- Insertion des données dans la table "player" pour le PSG
INSERT INTO player (id, last_name, first_name, nationality, age, position, team_id) VALUES
(1, 'Mbappé', 'Kylian', 'French', 22, 'Forward', 1),
(2, 'Verratti', 'Marco', 'Italian', 29, 'Midfielder', 1),
(3, 'Neymar ', 'Jr.', 'Brazilian', 29, 'Forward', 1),
(4, 'Hakimi', 'Achraf', 'Moroccan', 23, 'Defender', 1),
(5, 'Kimpembe', 'Presnel', 'French', 25, 'Defender', 1),
(6, 'Mendes', 'Nuno', 'Portuguese', 19, 'Defender', 1),
(7, 'Soler', 'Carlos', 'Spanish', 24, 'Midfielder', 1),
(8, 'Ekitike', 'Hugo', 'French', 21, 'Forward', 1),
(9, 'Sanches', 'Renato', 'Portuguese', 24, 'Midfielder', 1);

-- Insertion des données dans la table "player" pour le Real Madrid
INSERT INTO player (id, last_name, first_name, nationality, age, position, team_id) VALUES
(10, 'Camavinga', 'Eduardo', 'French', 19, 'Midfielder', 2),
(11, 'Modric', 'Luka', 'Croatian', 35, 'Midfielder', 2),
(12, 'Kroos', 'Toni', 'German', 31, 'Midfielder', 2),
(13, 'Vinicius', 'Jr.', 'Brazilian', 21, 'Forward', 2),
(14, 'Silva', 'Rodrygo', 'Brazilian', 20, 'Forward', 2),
(15, 'Tchouaméni', 'Aurélien', 'French', 21, 'Midfielder', 2),
(16, 'Militão', 'Éder', 'Brazilian', 23, 'Defender', 2),
(17, 'Alaba', 'David', 'Austrian', 29, 'Defender', 2);