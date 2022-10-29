# Note-Taker

## Deployed Link
This is a deployed link of our application.
![site](https://proffesional-note-taker20.herokuapp.com/notes)

## Example image 
![site](/Screenshot%202022-10-28%20at%209.10.21%20PM.png)


## Techonologies Used 
Express.js was used to back end, save and retrieve note data from a JSON file.
Heroku- this was our first use of heroku in order to deploy our website and not display our backend technology.

## Summary 
Through this application you wil be able to save notes, and adding them to a small library within the app. You are able to click through any note that was taken.

## Code Snippet 
``` JavaScript
fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully created a note')
        );
```
## Author Links

[LinkedIn](https://www.linkedin.com/in/angel-matias-01120b251/)
[GitHub] (https://github.com/robogf)