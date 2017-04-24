var docFragment = document.createDocumentFragment();
var header = document.createElement("header");
var div = document.createElement("div");
var span = document.createElement("span");
var a = document.createElement("a");
var button = document.createElement("button");
var input = document.createElement("input");
var article = document.createElement("article");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var h3 = document.createElement("h3");
var p =  document.createElement("p");
var footer = document.createElement("footer");
var divIconTwitter = span.cloneNode();
var divIconFacebook = span.cloneNode();

function mainHeader(){
    var faviconMedium = div.cloneNode();
    var divImageGroup = div.cloneNode();
    div.classList.add("left", "in-block", "absolute");
    faviconMedium.classList.add("favicon-medium", "sprite", "in-block", "pointer");
    divImageGroup.classList.add("sprite", "image-group", "in-block", "absolute", "pointer");
    button.classList.add("btn-follow", "absolute");
    button.append("follow");
    divIconTwitter.classList.add("icon-twitter", "absolute", "twitter", "pointer");
    divIconFacebook.classList.add("icon-facebook", "absolute", "facebook", "pointer");
    
    div.append(faviconMedium, divImageGroup, button, divIconTwitter, divIconFacebook);
    
    var cloneDivRight = div.cloneNode();
    var cloneDiv2 = div.cloneNode();
    var iconSearch = span.cloneNode();
    var favLab = div.cloneNode();
    cloneDivRight.className = "right in-block absolute";
    input.className = "search-input absolute";
    input.setAttribute("placeholder", "Search")
    iconSearch.className = "icon-search absolute";
    cloneDiv2.className = "sprite image-belen belen-main-header absolute pointer";
    favLab.className = "sprite favicon-laboratoria absolute, pointer";
    cloneDivRight.append(input, iconSearch, cloneDiv2, favLab);
    
    header.classList.add("main-header", "fixed");
    header.append(div, cloneDivRight);
    docFragment.append(header);
    document.body.append(docFragment);
    console.log(document.body);
}

function mainContainer(){
    var articleHeader = header.cloneNode();
    var articleContainer = div.cloneNode();
    var belenImage = div.cloneNode();
    var belenDescription = div.cloneNode();
    var date = p.cloneNode();
    var articleParagraph = p.cloneNode();
    
    article.className = "main-container absolute";
    articleHeader.className = "article-header";
    belenImage.className = "sprite image-belen";
    belenDescription.className = "belen-description absolute";
    h2.append("Belen Recabal");
    p.className = "activity";
    p.append("Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.");
    date.className = "date";
    date.append("Mar 21  .  6 min read");
    articleContainer.className = "container-article";
    h1.className = "title"
    h1.append("Hazlo con estilo : Tipografías, iconos y sprite");
    articleParagraph.className = "article-paragraph";
    articleParagraph.append("Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!");
    
    belenDescription.append(h2, p, date);
    articleHeader.append(belenImage, belenDescription);
    articleContainer.append(h1, articleParagraph);
    article.append(articleHeader, articleContainer);
    docFragment.append(article);
    document.body.append(docFragment);
}

function footer1(){
    var iconLike = span.cloneNode();
    var iconSpeach = span.cloneNode();
    var iconTwiter= divIconTwitter.cloneNode();
    var iconFacebook= divIconFacebook.cloneNode();
    var nextStory = div.cloneNode();
    var text = h2.cloneNode();
    
    iconLike.className = "icon-like absolute pointer";
    iconSpeach.className = "icon-speech-bubble absolute pointer";
    nextStory.className = "next-story absolute";
    h3.append("Next  story");
    text.append("Describiendo el flujo de trabajo en...");
    footer.className = "fixed";
    
    nextStory.append(h3, text);
    footer.append(iconLike, iconSpeach, iconTwiter, iconFacebook, nextStory);
    docFragment.append(footer);
    document.body.append(docFragment);
}


window.addEventListener("load", function(){
    mainHeader();
    mainContainer();
    footer1();
});