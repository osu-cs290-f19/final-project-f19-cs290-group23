var newname = document.getElementById('newname');
var newusername = document.getElementById('newusername');
var newphotourl = document.getElementById('newphotourl');
var newingredients = document.getElementById('newingredients');
var newrecipemade = document.getElementById('newrecipe');
var newnotes = document.getElementById('newnotes');

function makeNewPost() {
    
}

document.getElementById("refreshbutton").addEventListener("click", function(){
    Handlebars.templates.blankpost(newphotourl.value, newname.value, newusername.value, newingredients.value, newrecipemade.value, newnotes.value);
});

document.getElementById("submitbutton").addEventListener('click', function() {
    //todo
});