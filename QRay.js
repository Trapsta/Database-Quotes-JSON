function QRay( data ) {
  if ( !data )
    throw new Error( 'Provide an array of quotes objects.' )

  if ( Array.isArray( data ) )
    data = data
      .reduce( ( acc, curr ) => {
        if ( !acc[ curr.quoteAuthor ] )
          acc[ curr.quoteAuthor ] = []
        acc[ curr.quoteAuthor ].push( curr.quoteText )
        return acc
      }, {})

  Object.setPrototypeOf( data, QRay.prototype )

  return data
}

QRay.prototype.wordsRange = function ( m = 0, M = this.length ) {
  if ( m > M )
    throw new Error( 'Min length cannot be greater than max length.' )

  let filtered
  let r = {}
  for ( key in this ) {
    if ( this.hasOwnProperty( key ) ) {
      filtered = this[ key ].filter( q => q.split( ' ' ).length >= m && q.split( ' ' ).length <= M )
      if ( filtered.length > 0 )
        r[ key ] = filtered
    }
  }

  return new QRay( r )
}

QRay.prototype.getQuotesOf = function ( authors ) {
  if ( !authors && !Array.isArray( authors ) )
    throw new Error( 'Provide an array of author*.' )
  
  const regex = new RegExp(`^(${authors.join('|')})$`, 'i')
  let r = {}
  for ( key in this )
    if ( regex.test( key ) )
      r[ key ] = this[ key ] 

  return new QRay( r )
}

QRay.prototype.getAuthors = function () {
  return Object.keys( this ).sort()
}

QRay.prototype.getQuoteTexts = function ( sep = '-' ) {
  let r = []
  for ( key in this )
    if ( this.hasOwnProperty( key ) )
      r = r.concat( this[ key ].map( q => `${q} ${sep} ${key}`) )
  return r
}

module.exports = QRay