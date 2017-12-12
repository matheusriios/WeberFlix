var body = document.querySelector('body');
    window.addEventListener('scroll', function(){
        if (window.scrollY > 0) {
            body.classList.add('navigation-fixed');
        }
        else {
            body.classList.remove('navigation-fixed');
        }
    })


function reqListener () {
    var data = JSON.parse(this.responseText);
    var background_api = document.getElementById('background-api');

    var itemsHTML = "";
    for(var i = 0; i < data.movies.action.length; i++){
        itemsHTML = itemsHTML + '<li data-poster="' + data.movies.action[i].Poster + '" data-title="' + data.movies.action[i].Title + '" data-plot="' + data.movies.action[i].Plot + '"><img class="foto" src="' + data.movies.action[i].Poster + '"/></li>';
        console.log(data.movies.action[i]);
    }
    var ul = document.querySelector('.fotocarrosel');
    ul.innerHTML = itemsHTML;

    var itemsLi = ul.querySelectorAll('li');
    for(var i = 0; i < itemsLi.length; i++) {
        var li = itemsLi[i];
        li.addEventListener('mouseenter', function() {
            console.log(document.querySelector('.poster'));
            document.querySelector('.poster').style.backgroundImage = 'url(' + this.dataset.poster + ')';
            /*document.getElementById('description').innerHTML = this.dataset.plot;*/
        });
    }
};
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", "http://api.jsonbin.io/b/5a2d87326ee33e76b90623b0", true);
  oReq.send();

