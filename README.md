# Database Quotes JSON

## JSON file with more than 1500+ famous quotes

### Below there are some examples, using jQuery and ES6, on how to work with this file

```javascript
// returns all authors sorted a-z
var filePath = "quotes.json";
$.getJSON(filePath)
  .done(
    data => data.map(x => x.quoteAuthor)
                .filter((x, i, a) => a.slice(i + 1).indexOf(x) === -1)
                .sort()
  )
  
// returns an array of all quotes with 12 words maximum
$.getJSON(filePath)
  .done(
    data => data.filter(x => x.quoteText.split(" ").length <= 12)
  )

// returns an array of all quotes by Buddha
$.getJSON(filePath)
  .done(
    data => data.filter(x => x.quoteAuthor === "Buddha")
  )
```

## Donation
I'm hopeful this repo can help you! If so, please consider to offer me a coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L8CWHQLA5A9K8)
