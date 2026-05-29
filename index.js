// const express = require("express");

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({
//         message: "zametki api works"
//     });
// });

// app.listen(3000, () => {
//     console.log("server started");
// });

const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.json({
        message: "zametki api works"
    });
});

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.post("/notes", (req, res) => {

    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    notes.push(newNote);

    res.json({
        message: "note created",
        note: newNote
    });
});

app.listen(3000, () => {
    console.log("server started");
});