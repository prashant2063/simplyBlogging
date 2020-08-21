var articleDesc = document.getElementsByClassName("article-desc");

for(var i = 0, length = articleDesc.length; i < length; i++) {
    var myArticle = articleDesc[i].innerHTML;     
    articleDesc[i].innerHTML = myArticle.substring(0,200)+"...";
 }
// console.log(myArticle);
// articleDesc.innerHTML = myArticle.substring(0,10);