//This section defines 
var Youtube = document.getElementById("Youtube");
var Steam = document.getElementById("Steam");
var Dota = document.getElementById("Dota");
var Tf2 = document.getElementById("Tf2");

var Description = document.getElementById("Description")
var Title = document.getElementById("Title")
var Complexity = document.getElementById("Complexity")

//This section tells the computer what to do when the image is clicked. "Youtube" is the id of the image, so when "youtube" is clicked (the image of youtube), it adds the text bellow, those being the title, description, and complexity

Youtube.addEventListener("click", function(){
    Title.innerHTML = "YOUTUBE:";
    Description.innerHTML = "A worldwide video sharing program, that lets users watch, create, and share videos. Youtube contains all kinds of videos, from gaming, to cats, to news.";
    Complexity.innerHTML = "Youtube is fairly easy to use, you can search for a video you want to watch, or you can go to your channel if you want to upload. There is also a suggested, and related video tab if you don't want to have to search for every video.";
    });
                       
Steam.addEventListener("click", function(){
    Title.innerHTML = "STEAM:";
    Description.innerHTML = "Steam is a company which allows users to buy and download hundreds of PC games. It supports PC games only so far, but offers games from any kind of company.";
    Complexity.innerHTML = "Steam is a bit complicated to use. You have the store, which is where you buy games. Then you have the library, which is where you keep your games. You then have your community which allows you to join groups and add friends.";
});
    
Dota.addEventListener("click", function(){
    Title.innerHTML = "DOTA:";
    Description.innerHTML = "Dota is a MOBA (team based combat) game, in which you and your team play as different unique characters, and face off against the enemy team. The goal is to destroy the enemy's base, and ancient."
    Complexity.innerHTML = "Dota is very complex. Each character or 'hero' has four different unique abilities. There is a massive arsenal of items that can do additional abilities. You have your own stat gains, and playstyle/strengths and weaknesses."
});   
    
Tf2.addEventListener("click", function(){
    Title.innerHTML = "TF2:";
    Description.innerHTML = "Tf2 is a team based FPS game, in which you play as one of nine classes, and complete tasks, such as capturing the enemy flag 'intelligence', or by pushing a payload, or just killing the enemy team."
    Complexity.innerHTML = "Tf2 is somewhat complicated, but more just skill based. It requires a lot of concentration and practice, and it's very easy to die, as well as to get kills. It can be very challenging starting out, because it takes a long time to get good, and a lot of practice with each of the nine classes."
});