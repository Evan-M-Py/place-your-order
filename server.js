const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(express.static(path.join(__dirname, '/public')));


//Routes

require('./routes/dinnerAPI')(app);
require("./routes/dessertAPI")(app);
require('./routes/lunchAPI')(app);
require('./routes/appetizerAPI')(app);
require('./routes/sidesAPI')(app)
require('./routes/miscAPI')(app);


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
})





db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {
        console.log(`Listening on port ${PORT}`)
    });
}); 
