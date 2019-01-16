'use strict';

$("form").submit(event => {
    event.preventDefault();
    let num = $("input").val();
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
})

function displayResults(responseJson) {
    let dogPics = responseJson.message;
    $(".dog-pics").empty()
    dogPics.forEach(function(photo) {
        console.log(photo);
        $(".dog-pics").append(`<img src=${photo} alt="dog">`)
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
  });