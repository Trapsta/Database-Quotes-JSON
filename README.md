# Database Quotes JSON

## JSON file with more than 1500+ famous quotes

## Donation
I'm hopeful this repo can help you! If so, please consider to offer me a coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L8CWHQLA5A9K8)

### To import quotes.json within your MongoDB
$mongoimport --db <choose a db name> --collection quotes --type json --file quotes.json --jsonArray

### A nice way of querying quotes is by using fetch and QRay
You can find QRay within this repository, you can either import it using require if you are on Node.js or by using the script tag within your HTML document
```javascript
// if you are on Node.js you need to import fetch from node-fetch
const fetch = require( 'node-fetch' )
const QRay = require( './QRay' )

// you can use fetch to get this content directly from GitHub
fetch( 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json' )
  .then( response => response.json() )
  .then( data => {

    const quotesObject = new QRay( data )

    const allQuoteTexts = new QRay( data )
      .getQuoteTexts()

    const allAuthors = new QRay( data )
      .getAuthors()

    // using QRay you can structure queries in a funnel like approach
    const desiredQuery = new QRay( data )
      .wordsRange( 0, 6 )
      .getAuthors()

    const quotesOfBuddhaAndEinstein = new QRay( data )
      .wordsRange( 6, 12 )
      .getQuotesOf( [ 'Buddha', 'Albert Einstein' ] )
      .getQuoteTexts( '~' )
      
    console.log( quotesOfBuddhaAndEinstein )

    // Note:
    // getQuoteTexts() and getAuthors() must be at the end of the funnel
    // you can only have either getQuoteTexts() or getAuthors() at the end of the funnel
  })
```
