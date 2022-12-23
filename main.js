let img = document.getElementById('img')
let btn = document.getElementById('btn')
fetch("https://meme-api.com/gimme/wholesomememes").then((res)=>res.json()).then((data)=>{
  img.src=data.url;
})
  
btn.addEventListener('click', () => {
  location.reload(true);
})
//////////Api Cat//////////
//'https://api.thecatapi.com/v1/images/search/'
// meme api 
//https://reddit-meme.p.rapidapi.com/memes/trending
//key 
// 9e42bcfccbmsh23f232faa430803p1303f0jsne8eeae4e570f
//"https://meme-api.com/gimme/wholesomememes"
