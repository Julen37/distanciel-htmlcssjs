// popup
window.onload = function(){ // affiche la popup automatiquement au chargement de la page
    document.getElementById("popup").classList.add("active"); //active est un class créé dans le css
};

document.getElementById("closeBtn").onclick = function(){ // ferme la popup quand on appui sur la croix du span
    document.getElementById("popup").classList.remove("active"); 
};