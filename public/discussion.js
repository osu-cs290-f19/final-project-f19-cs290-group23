var likebuttons = document.getElementsByClassName('moreinfo');

function like(index, event) {
    window.location.href = '/recipes/' + index;
}

for (var i = 0; i < likebuttons.length; i++) {
    likebuttons[i].addEventListener('click', like.bind(likebuttons[i], i));
}