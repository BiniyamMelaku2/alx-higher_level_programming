$.get('https://swapi-api.hbtn.io/api/films/?format=json', function (response) {
  for (let j = 0; j < response.results.length; j++) {
    $('#list_movies').append(`<li>${response.results[j].title}</li>`);
  }
});
