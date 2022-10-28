const express = require('express');
const path = require('path');
const fs = require('fs');
let notes = require('./db/db.json');
const uniqid = require('uniqid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) =>
  res.json(notes)
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post('/api/notes', (req, res) =>{
  const {title,text}=req.body
  if (title && text) {
    const newNotes = {
      title,
      text: uniqid(),
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
      
        const parsedNotes = JSON.parse(data);

        parsedNotes.push(newNotes);
        notes = parsedNotes;
       
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully created a note')
        );
      }
    });

    const response = {
      status: 'success',
      body: newNotes,
    };

    console.log(response);
    res.json(response);
  } else {
    res.json('there are no notes here');
  }
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
