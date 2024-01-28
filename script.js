let apiQuotes = [];

# show new quote
function newQuote() {
}

# Get quotes from API

async function getQuotes() {
    cont apiUrl = "https://type.fit/api/quotes/?method=getQuote&lang=en&format=json";
';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error){
    # catch error
    }
}


# on load
getQuotes();