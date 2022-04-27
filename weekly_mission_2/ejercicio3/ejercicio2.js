class TwitterUser{
    constructor(name,username,bio,birthday,location,userCreate,following,followers){
        
        this.name=name,
        this.username=username,
        this.bio=bio,
        this.birthday=birthday,
        this.location=location,
        this.userCreate=userCreate,
        this.following=following,
        this.followers=followers
    }
    
    get getName(){
        return `Usuario ${this.username} con nombre ${this.name}`
    }
    get getUserData(){
        return `Cuenta creada el ${this.userCreate}, con ${this.followers} followers, sigue a ${this.following} cuentas`
    }
}

class TweetData{
    constructor(Message,url,date,retweets,comments,likes){
        this.Message=Message,
        this.url=url,
        this.date=date,
        this.retweets=retweets,
        this.comments=comments,
        this.likes=likes
    }
    get tweetData(){
        return `Tweet:"${this.Message}" con \n ${this.retweets} retweets, ${this.comments} comentarios y ${this.likes} likes`
    }
}



const ReportUser= new TwitterUser("MonserratAl","@MoHtceppaT","El nivel de conocimiento no siempre hace a una persona con criterio...","17/Noviembre/1990","CDMX,México","marzo/2011",401,63);
const ReportTweet=new TweetData("✨🤞","https://twitter.com/MoHtceppaT/status/1500945182191144966?t=lDTxyEUZnBATU_i9B0tYGQ&s=19","15:23:05 p.m. · 07 mar. 2022",0,0,1);

console.log(ReportUser)
console.log(ReportTweet)
console.log(ReportUser.getName)
console.log(ReportTweet.tweetData)
console.log(ReportUser.getUserData)