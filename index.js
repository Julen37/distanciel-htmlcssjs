// popup
window.onload = function(){ // affiche la popup automatiquement au chargement de la page
    document.getElementById("popup").classList.add("active"); 
};

document.getElementById("closeBtn").onclick = function(){
    document.getElementById("popup").classList.remove("active"); // active ? natif a js ?
};