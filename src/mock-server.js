const express = require('express');
const app = express();

app.get('/fr/login', (req, res) => {
    res.send('<div class="mainContent">Mock login page</div>');
});

const server = app.listen(3000, () => {
    console.log('Mock server is running on port 3000');
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Mock server is closed');
        process.exit(0);
    });
});
