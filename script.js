var input = '';

function onClick() {
  input = document.getElementById("input").value;
  var url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + input + '&format=json';
  axios.get(url).then(function(response) {
    showResults(response.data);
  });
}

function showResults(results) {

  var articleLi = results[2].map(function(item, index) { //using array.map to iterate through each call

    var snips = results[2][index]; // find article snippet

    var articleName = results[1][index]; //find article title

    return '<li><h1><a href=' + item + '>' + articleName + '</a></h1></li><p id=' + articleName + 'Snippet">' + snips + '</p><br>'; //makes a clickable link for each articleName (title)

  });

  articleLi = articleLi.join(""); //stringify's the array, deletes commas


  document.getElementById("results").innerHTML = articleLi; //puts new string an a articleLi form, displayed on the HTML via DOM manipulation

}
