const TwitterUser={
    //Perfil del usuario
    user:{
        name:"MonserratAl",
        username:"@MoHtceppaT",
        bio:"El nivel de conocimiento no siempre hace a una persona con criterio...",
        birthday:"17/Noviembre/1990",
        location:"CDMX,México",
        userCreate:"marzo/2011",
        following:401,
        followers:63,
    },
    tweet:{
        Message:"✨🤞",
        url:"https://twitter.com/MoHtceppaT/status/1500945182191144966?t=lDTxyEUZnBATU_i9B0tYGQ&s=19",
        date:"15:23:05 p.m. · 07 mar. 2022",
        retweets:0,
        comments:0,
        likes:1,
    },

    get getName(){
        return `Usuario ${this.user.username} con nombre ${this.user.name}`
    },
    get tweetData(){
        return `Tweet:"${this.tweet.Message}" con \n ${this.tweet.retweets} retweets, ${this.tweet.comments} comentarios y ${this.tweet.likes} likes`
    },
    get getUserData(){
        return `Cuenta creada el ${this.user.userCreate}, con ${this.user.followers} followers, sigue a ${this.user.following} cuentas`
    },
} 
console.log(TwitterUser.tweetData);
console.log(TwitterUser.getName);
console.log(TwitterUser.getUserData);