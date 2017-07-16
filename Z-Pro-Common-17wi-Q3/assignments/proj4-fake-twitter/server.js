const express = require('Z:/npm/express');
const sqlite3 = require('Z:/npm/sqlite3');
const bodyParser = require('Z:/npm/body-parser');
const morgan = require('Z:/npm/morgan');

const db = new sqlite3.Database('databases/fake-twitter.db');

const port = 8585;
var app = express();

// creates req.body for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// serves the files from the public directory
app.use(express.static(__dirname + '/public'));

// Logs info about each incoming request
app.use(morgan('tiny'));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get('/query', (req, res) => {
    db.all(req.query.sql, (err, rows) => {
        if (err) {
            res.json({ ok: false, message: err });
        } else {
            res.json({ ok: true, rows: rows });
        }
    });
});

app.use(confirmLogin);

app.post('/login', (req, res) => {
    res.json({ ok: true });
});

app.post('/fetch', (req, res) => {
    const fetchTweetsFor = `SELECT DISTINCT post_time, message, user
FROM Tweet
JOIN Following ON feed = user
WHERE user = ? OR follower = ?
ORDER BY post_time DESC`;

    db.all(fetchTweetsFor, req.body.login, req.body.login, (err, rows) => {
        if (err) {
            res.json({ ok: false, message: err });
        } else {
            res.json({ ok: true, rows: rows });
        }
    });
});

app.post('/subscribe', confirmFeed, confirmNotFollowing, (req, res) => {
    console.log('Hello from /subscribe');
    res.send('My middleware route');
});

function confirmLogin(req, res, next) {
    const findUser = `SELECT * FROM User WHERE login = ? AND password = ?`;

    db.all(findUser, req.body.login, req.body.passwd, (err, rows) => {
        if (err) {
            res.json({ ok: false, message: err });
        } else if (rows.length == 0) {
            res.json({ ok: false, message: 'Incorrect username/password' });
        } else {
            next();
        }
    });
}

// confirms that req.body.feed is a real user
function confirmFeed(req, res, next) {
    console.log('Hello from confirmFeed');
    db.all(`SELECT * FROM User WHERE login = ?`, req.body.feed, (err, rows) => {
        if (err) {
            res.json({ ok: false, message: JSON.stringify(err) });
        } else if (rows.length === 0) {
            res.json({ ok: false, message: 'Feed does not exist' });
        } else {
            next();
        }
    });
}

// confirms that req.body.login is following req.body.feed
function confirmFollowing(req, res, next) {
    console.log('Hello from confirmFollowing');
    next();
}

// confirms that req.body.login is NOT following req.body.feed
function confirmNotFollowing(req, res, next) {
    console.log('Hello from confirmNotFollowing');
    next();
}



/*

db.run(SELECT * FROM USer whe, (err, rows) => {
    
    if the user exists:
        db.run(MAKE SURE User is NOT SUBD, (err, rows) => {
            if (err) {
    
            } else if (IS Subd) {
                send ok false
            } else {
                db.run(INSERT INTO FOLLOWING, (err) => {
                    if 

                    else

                })
            }
        })


    else (user doesn't exist):
        send ok false

})



*/