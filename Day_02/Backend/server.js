// const express  = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
const app = express();
import env from 'env';
env.config();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Server is ready');
});

// get a list of 5 jokes
app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            "id": "1",
            "name": "A Toast To Monkey Jokes",
            "joke": "How do you make toast in the jungle? Pop your bread under a g'rilla."
          },
          {
            "id": "2",
            "name": "These Jokes Have Sunk So Low",
            "joke": "What lies on the ocean floor and shivers? A nervous wreck."
          },
          {
            "id": "3",
            "name": "Wanted For Eight Armed Robbery",
            "joke": "Who is the quickest draw in the ocean? Billy the Squid."
          },
          {
            "id": "4",
            "name": "The Incredible Mr. Dead",
            "joke": "What has twenty legs and flies? Five dead Horses."
          },
          {
            "id": "5",
            "name": "My Nephew",
            "joke": "What's brown and sticky? A stick."
          },
    ]

    res.send(jokes);

})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
