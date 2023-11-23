require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) =>{
    res.send('Welcome')
});

app.get('/about', (req, res) =>{
    res.send('Saurabh')
});

app.get('/login', (req, res) =>{
    res.send('<div><label>Hello Saurabh</label> <input type="text" ></div>')
});

app.get('/github', (req, res) =>{
    res.send('<a href="https://github.com/saurabhm02">Saurabh Github</a>')
})
 

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`);
});



