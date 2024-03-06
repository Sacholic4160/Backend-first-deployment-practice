// console.log("sacholic is making its first ever backend project and deploying it"
// )
const express = require('express');
const dotenv =  require('dotenv').config()

const app = express();

//const port = 2000;
const githubdata={
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  }
 app.get('/', (req,res) => {
res.send("hii, can you see my request");
 });

app.get('/twitter',(req,res)=>{
    res.send("hii,can you see my twitter handle request");
});

app.get('/github',(req,res) => {
    res.json(githubdata);
})
 
app.get('/login', (req,res)=> {
    res.send('<h1> hii , this is heading style 1</h1>')
})

// app.listen(port,()=>{
//     console.log(`hii, i am listening on this port: ${port}`)
// })

app.listen(process.env.PORT,() =>{
    console.log(`hii, the server is listening on this port number: ${process.env.PORT}`)
})
