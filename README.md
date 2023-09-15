# How to set it up
Use https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/ for the backend.

For the frontend, post the username and password to your backend login url. NB - if using localhost, the url needs to be the ip address of your computer. Then you can set the jwtoken/username as a context and pass it wherever you want. After login, navigate to wherever you want to be. See LoginPage.jsx.

To make requests using the jwtoken, include it in:
```
headers: {
  Authorization: `Bearer ${token}`
}
```
See HomePage.jsx.

Also, the tutorial has a section about protecting urls behind auth, so you can't get to places without logging in. I'm not sure if this applies but hey we  might need to consider it.