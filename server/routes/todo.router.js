const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const sqlText = `SELECT * From "ToDoList" ORDER BY id ASC;`;
    pool
        .query(sqlText)
        .then((result) => {
            console.log(`Got list back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});
// POST
router.post('/', (req, res) => {
    const toDo = req.body;
    const sqlText = `INSERT INTO "ToDoList" (task)
                        VALUES ($1)`;
    pool
        .query(sqlText, [toDo.task])
        .then((result) => {
            console.log(`Added task to the database`, toDo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});
// PUT
router.put('/:id', (req, res) => {
    const taskID = req.params.id;
    const queryText = `UPDATE "ToDoList" SET "complete" = NOT "complete"
        WHERE "id" = $1;`;

    pool
        .query(queryText, [taskID])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});
// DELETE
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const queryText = `DELETE FROM "ToDoList" WHERE "id" = $1;`;

    pool
        .query(queryText, [taskId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const sqlText = `TRUNCATE TABLE "ToDoList";`;

    pool
        .query(sqlText)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});


module.exports = router;
