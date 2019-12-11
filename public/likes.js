var likebuttons = document.getElementsByClassName('like');
var request = new XMLHttpRequest();
var requestURL;

console.log(likebuttons);

function like(index, event) {
    requestURL = '/likerecipe/' + index;
    request.open('POST', requestURL);
    request.setRequestHeader(
        'Content-Type', 'application/json'
    );
    request.send('');
    window.location.href = '/';
}

for (var i = 0; i < likebuttons.length; i++) {
    likebuttons[i].addEventListener('click', like.bind(likebuttons[i], i));
    console.log(i);
    console.log("done");
}

request.addEventListener('load', function() {
    console.log('Success!');
});