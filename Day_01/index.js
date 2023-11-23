require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

const githubData = {
    "login": "saurabhm02",
    "id": 138717117,
    "node_id": "U_kgDOCESnvQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/138717117?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/saurabhm02",
    "html_url": "https://github.com/saurabhm02",
    "followers_url": "https://api.github.com/users/saurabhm02/followers",
    "following_url": "https://api.github.com/users/saurabhm02/following{/other_user}",
    "gists_url": "https://api.github.com/users/saurabhm02/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/saurabhm02/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/saurabhm02/subscriptions",
    "organizations_url": "https://api.github.com/users/saurabhm02/orgs",
    "repos_url": "https://api.github.com/users/saurabhm02/repos",
    "events_url": "https://api.github.com/users/saurabhm02/events{/privacy}",
    "received_events_url": "https://api.github.com/users/saurabhm02/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Saurabh Mahapatra",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": " MERN Stack Developer | Techie Nerd🧑‍💻 | Gamer🎮🎧",
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 16,
    "following": 7,
    "created_at": "2023-07-05T19:06:36Z",
    "updated_at": "2023-11-23T12:31:19Z"
    }

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
    res.json(githubData);
})
 

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`);
});



