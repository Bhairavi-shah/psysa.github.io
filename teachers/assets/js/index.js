function cardDisplay() {
    cardColumns = document.getElementById('cardsColumns')
    for (i = 0; i < teachers[0]['teachers'].length; i++) {
        card = document.createElement('div')
        card.className = "card p-3"
        imageContainer = document.createElement('div')
        imageContainer.className = "text-center"
        imageContainer.setAttribute("id", "imageContainer")
        row = document.createElement('div')
        row.className = "row"
        imageCircleDiv = document.createElement('div')
        imageCircleDiv.className = "col-auto"
        imageCircleDiv.setAttribute("id", "imageCircleDiv")
        image = document.createElement('img')
        image.setAttribute("src", './assets/images/Teacher Photos/' + teachers[0]['teachers'][i]['photo'])
        imageCircleDiv.appendChild(image)
        nameField = document.createElement('div')
        nameField.setAttribute("id", "nameField")
        fullName = document.createElement('h4')
        fullName.className = "text-left"
        fullName.setAttribute("id", "fullName")
        fullName.textContent = teachers[0]['teachers'][i]['teacher']
        nameField.appendChild(fullName)
        row.appendChild(imageCircleDiv)
        row.appendChild(nameField)
        imageContainer.appendChild(row)
        blockQuote = document.createElement('blockquote')
        blockQuote.className = "blockquote mb-0 card-body"
        quote = document.createElement('p')
        quote.style.color = "white"
        quote.textContent = teachers[0]['teachers'][i]['quote']
        blockQuote.appendChild(quote)
        card.appendChild(imageContainer)
        card.appendChild(blockQuote)
        cardColumns.appendChild(card)
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}