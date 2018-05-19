# Database Quotes JSON

## JSON file with more than 1500+ famous quotes

### Below there are some examples, using jQuery and ES6, on how to work with this file

```javascript
const filePath = 'quote.json'
let quotesObject
$.getJSON(filePath).done(data => quotesObject = data)

// returns all authors sorted a-z
quotesObject.map(x => x.quoteAuthor)
           .filter((x, i, a) => a.slice(i + 1).indexOf(x) === -1)
           .sort()
  
// returns an array of all quotes with 12 words maximum
quotesObject.filter(x => x.quoteText.split(" ").length <= 12)

// returns an array of all quotes by Buddha
quotesObject.filter(x => x.quoteAuthor === "Buddha")
```

### A nice way of querying quotes is by using fetch and qRay
```javascript
// if you are on Node.js you need to import fetch from node-fetch
const fetch = require( 'node-fetch' )
const qRay = require( './qRay' )

// you can use fetch to get this content directly from GitHub
fetch( 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json' )
  .then( response => response.json() )
  .then( data => {

    const quoteObjects = new qRay( data )

    const quoteTexts = new qRay( data )
      .getQuoteTexts()

    const authors = new qRay( data )
      .getAuthors()

    // using qRay you can structure queries in a funnel like approach
    const desiredQuery = new qRay( data )
      .wordsRange( 5, 5 )
      .randomize()
      .getQuoteTexts()

    const quotesOfBuddhaAndEinstein = new qRay( data )
      .getQuotesOf( [ 'Buddha', 'Albert Einstein' ] )
      .wordsRange( 2, 8 )

    console.log( quotesOfBuddhaAndEinstein )

    // Note:
    // getQuoteTexts() and getAuthors() must be at the end of the funnel
    // you can only have either getQuoteTexts() or getAuthors() at the end of the funnel
  })
```

### To import the database inside your MongoDB
$mongoimport --db database-quotes --collection quotes --type json --file quotes.json --jsonArray

## Donation
I'm hopeful this repo can help you! If so, please consider to offer me a coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L8CWHQLA5A9K8)
