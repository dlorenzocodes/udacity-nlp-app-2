const path = require('path');
const express = require('express');
const app = express();


app.use(express.static('src/client'));

app.get('/', (req, res) => {
    res.sendFile('/client/view/template.html', {root : __dirname + '/..' } );
});





const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));