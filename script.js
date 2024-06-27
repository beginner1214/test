var main = document.getElementById("main");
let arr = [
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    "https://yt3.googleusercontent.com/wzEypbVsmY9BI-IbLwVius4UvC2rejtJB_PTXAdPpYXQ07EIjl5Ms55NCFq_dILwONpxrzE2xA=s900-c-k-c0x00ffffff-no-rj",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full//133.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full//921.png"];

var l = "";
for (let i = 1; i <= 48; i++) {
    let r = Math.floor(Math.random() * arr.length);
    l += `<div class="card">
    
        <img src="${arr[r]}">
    </div>`;
}
main.innerHTML = l;

