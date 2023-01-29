console.log("welcome to songs");

let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay =document.getElementById("masterPlay");
let bar=document.getElementById("bar");
let gif=document.getElementById("gif");
let masterSong=document.getElementById("masterSong");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
  {songName:"song1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
  {songName:"song2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
  {songName:"song3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
  {songName:"song4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
  {songName:"song5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
  {songName:"song6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
  {songName:"song7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"}
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName
})


masterPlay.addEventListener("click",()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
   
    audioElement.play();
     masterPlay.classList.remove("fa-play");
     masterPlay.classList.add("fa-pause");
     document.getElementById(songIndex).classList.remove("fa-play")
     document.getElementById(songIndex).classList.add("fa-pause")
     gif.style.opacity=1
}
else{
     audioElement.pause();
     masterPlay.classList.remove("fa-pause");
     masterPlay.classList.add("fa-play");
     document.getElementById(songIndex).classList.remove("fa-pause")
     document.getElementById(songIndex).classList.add("fa-play")
     gif.style.opacity=0;
}
})

audioElement.addEventListener("timeupdate",()=>{
    progress=Number.parseInt((audioElement.currentTime/audioElement.duration)*100)  ;
    bar.value=progress;
})

bar.addEventListener("change",()=>{
  audioElement.currentTime=bar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       element.classList.remove("fa-pause");
       element.classList.add("fa-play");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
   element.addEventListener("click",(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      makeAllPlays();
      songIndex=Number.parseInt(e.target.id);
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src=`songs/${songIndex+1}.mp3`;
      masterSong.innerHTML=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
     
    }
    else{
      e.target.classList.add('fa-play');
      e.target.classList.remove('fa-pause');
      audioElement.pause();
      gif.style.opacity=0;
      masterPlay.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
    }
   

})
})

document.getElementById('next').addEventListener("click",()=>{
  if(songIndex>=7){
    songIndex=0
}
else{
   songIndex+=1;

}
gif.style.opacity=1;
audioElement.src=`songs/${songIndex+1}.mp3`
masterSong.innerHTML=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove("fa-play");
masterPlay.classList.add("fa-pause");

 })
document.getElementById('previous').addEventListener("click",()=>{
  if(songIndex<=0){
    songIndex=7;
}
else{
   songIndex-=1;

}
gif.style.opacity=1;
audioElement.src=`songs/${songIndex+1}.mp3`
masterSong.innerHTML=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove("fa-play");
masterPlay.classList.add("fa-pause");

 })

