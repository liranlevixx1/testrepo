// creating an xhr instance
var xhr = new XMLHttpRequest();

// saving the link to the json in a var
var url = './health_article.json';

// preparing a get request for the json URL
xhr.open('GET', url, true);

// letting xhr know that the response type will be json
xhr.responseType = 'json';

// defines what happens when you get a successful respones
xhr.onload = function(){
    // assigning the articles array from the json to a var
    var articles = xhr.response.articles;
    var articlesDiv= document.getElementById('articles');
    articles.forEach(function (article) {
        //creating a new div element for each article
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        // creating the h2 element for the article title
        var title = document.createElement('h2');
        //passing the article's title from the json to the element's text content
        title.textContent = article.title;

        //creating a p element to hold the article's description
        var description = document.createElement('p');
        description.textContent = article.description;

        // creating an h3 element to present this text: Ways to Achieve
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        //creating a list element
        var waysList = document.createElement('ul');
        //accessing the ways_to_achieve array from the json and iterating it with the forEach loop 
        article.ways_to_achieve.forEach(function(way) {
         //creting a new list item element
            var listItem = document.createElement('li');
          //passing the arrays text to the list item
            listItem.textContent = way;
          //appending the list item as a child element of the waysList
            waysList.appendChild(listItem);
        });
        //setting a h3 element to represent the benefits
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // setting up a new list element
        var benefitsList = document.createElement('ul');
       // accessing the benefits array and iterating using a forEach loop
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          //passing the arrays text to the list item
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
        //appending all of the top div childs
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);
    });
}
xhr.send();