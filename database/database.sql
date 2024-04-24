--create database called "weekend-to-do-app"
CREATE TABLE "ToDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(80),
	"complete" BOOLEAN DEFAULT false
);

INSERT INTO "ToDoList"
("task", "complete")
VALUES
('create database', false),
('create GET route', false),
('create POST route', false),
('create PUT route', false),
('create DELETE route', false);
