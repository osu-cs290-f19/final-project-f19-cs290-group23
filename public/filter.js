var isopen = false;

var postsmenu = document.getElementById('poppost');
postsmenu.style.width = 'min-content';
postsmenu.style.height = 'min-content';

postsmenu.addEventListener('mouseover', function() {
    postsmenu.style.width = '116em';
    var options = document.getElementsByClassName('option');
    for (var i = 0; i < options.length; i++) {
        options[i].style.display = 'flex';
        console.log(options[i]);
    }
});

postsmenu.addEventListener('mouseout', function() {
    postsmenu.style.width = 'min-content';
    var options = document.getElementsByClassName('option');
    for (var i = 0; i < options.length; i++) {
        options[i].style.display = 'none';
    }
});

var titlemenu = document.getElementById('titlenamesearch');

titlemenu.addEventListener('mouseover', function() {
    var usernameaaa = document.getElementById('username');
    usernameaaa.style.display = 'flex';
})

titlemenu.addEventListener('mouseout', function() {
    var usernameaaa = document.getElementById('username');
    usernameaaa.style.display = 'none';
})