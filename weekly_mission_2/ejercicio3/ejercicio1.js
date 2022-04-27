class repo{
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
    this.name=name
    this.author=author
    this.language=language
    this.numberOfCommits=numberOfCommits
    this.stars=stars
    this.forks=forks
    this.issues_open=issues_open
    this.issues_close=issues_close
    }
    getTotalIssues= function(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo= function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const ReportRepo=new repo ("LaunchX","MonserratAlvarezM","Javascript",9,3,6,1,0)
console.log("Nombre del repo:" + ReportRepo.name)
console.log("Issues totales: " + ReportRepo.getTotalIssues())
console.log(ReportRepo.getGeneralInfo())