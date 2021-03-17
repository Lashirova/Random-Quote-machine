
const textDiv = document.getElementById('text');
const tweetBtn = document.getElementById('tweet-quote');

$(document).ready(function(){
  function getQuote(){
    var quotes = ["Never steal","Be honest","Try your best"];
    var author = ["-Lean Dean","-Maria Gonzales","-Harry Fisher"];
    var randomNum = Math.floor((Math.random()*quotes.length))
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $(".btn").on("click",function(){
               getQuote();
               })
});
 tweetBtn.setAttribute('href', `//twitter.com/intent/tweet?text=${textDiv.innerHTML}`)