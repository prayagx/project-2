document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '89fa9c6456b94adf9d537fb60ebff944'; 
    const newsContainer = document.getElementById('news-container');

    // Fetch news data from News API
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news:', error));

    function displayNews(articles) {
        newsContainer.innerHTML = ''; 

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            if (article.urlToImage) {
                const imgElement = document.createElement('img');
                imgElement.src = article.urlToImage;
                imgElement.alt = 'News Image';
                articleElement.appendChild(imgElement);
            }

            const titleElement = document.createElement('h2');
            titleElement.textContent = article.title;
            articleElement.appendChild(titleElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = article.description;
            articleElement.appendChild(descriptionElement);

            const sourceLink = document.createElement('a');
            sourceLink.href = article.url;
            sourceLink.textContent = 'Read more';
            articleElement.appendChild(sourceLink);

            newsContainer.appendChild(articleElement);
        });
    }
});
