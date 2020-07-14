function cardDisplay() {
    cardColumns = document.getElementById('cardsColumns')
    for (i = 0; i < confessions.length; i++) {
        card = document.createElement('div')
        card.className = "card p-3"
        titleField = document.createElement('div')
        titleField.setAttribute("id", "titleField")
        title = document.createElement('h4')
        title.className = "text-left"
        title.setAttribute("id", "title")
        title.textContent = "CONFESSION #".concat(i + 1)
        titleField.appendChild(title)
        blockQuote = document.createElement('blockquote')
        blockQuote.className = "blockquote mb-0 card-body"
        quote = document.createElement('p')
        quote.style.color = "white"
        quote.textContent = confessions[i]["confession"]
        footer = document.createElement('footer')
        footer.style.color = "white"
        footer.className = "blockquote-footer mb-0 text-right"
        small = document.createElement('small')
        small.className = "text-muted bold"
        cite = document.createElement('cite')
        cite.setAttribute("title", "Source Title")
        cite.style.color = "white"
        cite.textContent = "Anonymous"
        small.appendChild(cite)
        footer.appendChild(small)
        blockQuote.appendChild(quote)
        blockQuote.appendChild(footer)
        card.appendChild(titleField)
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