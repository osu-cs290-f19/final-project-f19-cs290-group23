var likebuttons = document.getElementsByClassName('moreinfo');

function like(index, event) {
    var commentbox = document.getElementsByClassName('addcomment');
    commentbox[index].style.display = 'flex';
    var addcomment = document.getElementsByClassName('submitinfo');
    addcomment[index].style.display = 'flex';
    console.log(addcomment[index]);
}

for (var i = 0; i < likebuttons.length; i++) {
    likebuttons[i].addEventListener('click', like.bind(likebuttons[i], i));
}

var submit = document.getElementsByClassName('submitinfo');

for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', function() {
        var temp = document.getElementsByClassName('addcomment');
        console.log(temp[parseInt(i)]);
        var newcomments = {
            commentary : temp[i].nodeValue
        };
        var request = new XMLHttpRequest();
        var requestBody = JSON.stringify(newcomments);
        request.open('POST', '/changecommentary/');
        request.setRequestHeader(
            'Content-Type', 'application/json'
        );
        request.send(requestBody);
        window.location.href = '/';
    });
}