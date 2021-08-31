CREATE TABLE games (
	game_id int AUTO_INCREMENT,
    game_name varchar(255),
    CONSTRAINT PK_games Primary Key (game_id),
    UNIQUE (game_name)
);

CREATE TABLE users (
	user_id int AUTO_INCREMENT,
    first_name varchar(255),
    username varchar(255),
    user_password varchar(16),
    CONSTRAINT PK_users PRIMARY KEY (user_id),
    UNIQUE (username, user_password)
);

CREATE TABLE answers (
	game_id int, 
    user_id int,
    date_added DATE NOT NULL DEFAULT (DATE(CURRENT_TIMESTAMP)),
    answer_1 int not null,
    answer_2 int not null,
    answer_3 int not null,
    answer_4 int not null,
    answer_5 varchar(255),
    CONSTRAINT PK_answers PRIMARY KEY (game_id, user_id, date_added),
    CONSTRAINT FK_answers_game_id FOREIGN KEY (game_id) REFERENCES games(game_id),
    CONSTRAINT FK_answers_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);
    