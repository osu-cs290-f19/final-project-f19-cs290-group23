var newname = document.getElementById('newname');
var newusername = document.getElementById('newusername');
var newphotourl = document.getElementById('newphotourl');
var newingredients = document.getElementById('newingredients');
var newrecipemade = document.getElementById('newrecipe');
var newnotes = document.getElementById('newnotes');

document.getElementById("refreshbutton").addEventListener("click", function(){
    var post = {
        title: newname.value,
        user: newusername.value,
        imgurl: newphotourl.value,
        ingredients: newingredients.value,
        recipe: newrecipemade.value,
        commentary: newnotes.value,
        likes: 0
    };

    if (newphotourl.value == '' || newphotourl.value == undefined) {
        post.imgurl = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiS84iS8qzmAhWYsZ4KHfPvD5MQjRx6BAgBEAQ&url=https%3A%2F%2Fcatchoom.com%2Fblog%2F&psig=AOvVaw051r5SUPFdTUkIVozLv9z9&ust=1576129516486120";
    }
    var refresh = Handlebars.templates.blankpost(post);
    var content = document.getElementsByClassName("content");
    if(content[0].children[9]) {
        content[0].removeChild(content[0].children[9]);
    }

    content[0].insertAdjacentHTML("beforeend", refresh);
});

var request = new XMLHttpRequest();
var requestURL = '/addrecipe';
document.getElementById("submitbutton").addEventListener('click', function() {
    if(newname.value && newusername.value && newphotourl.value && newingredients.value && newrecipemade.value && newnotes.value) {
        var post = {
            title: newname.value,
            user: newusername.value,
            imgurl: newphotourl.value,
            ingredients: newingredients.value,
            recipe: newrecipemade.value,
            commentary: newnotes.value
        };
        var requestBody = JSON.stringify(post);
        request.open('POST', requestURL);
        request.setRequestHeader(
            'Content-Type', 'application/json'
        );
        request.send(requestBody);
        window.location.href = '/';
    }
    else {
        alert("Not all boxes are filled!"); //todo do more?
    }
});

request.addEventListener('load', function() {
    console.log('Success!');
});