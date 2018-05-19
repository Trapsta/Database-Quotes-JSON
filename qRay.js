function qRay( arguments ) {
  const arr = []
  arr.push.apply( arr, arguments )
  arr.__proto__ = qRay.prototype
  return arr
}

qRay.prototype = new Array

qRay.prototype.wordsRange = function ( m = 0, M = this.length ) {
  if ( m > M )
    throw new Error( 'Min length cannot be greater than max length' )
  return this
    .reduce( ( acc, curr ) => {
      if( curr.quoteText.split( ' ' ).length >= m
        && curr.quoteText.split( ' ' ).length <= M )
        acc.push( curr )
      return acc
    }, new qRay)
}

qRay.prototype.getQuotesOf = function ( authors ) {
  if ( !authors && !Array.isArray( authors ) )
    throw new Error( 'Provide an array of author*' )
  return this
    .reduce( ( acc, curr ) => {
      const regex = new RegExp(`^(${authors.join('|')})$`, 'i')
      if ( regex.test( curr.quoteAuthor ) )
        acc.push( curr )
      return acc
    }, new qRay)
}

qRay.prototype.spit = function ( n ) {
  n = n || this.length
  return new qRay( this.slice( 0, n ) )
}

qRay.prototype.randomize = function () {
  let c = this.slice()
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor( Math.random() * ( i + 1 ) )
    let t = c[i]
    c[i] = c[j]
    c[j] = t
  }
  return new qRay( c )
}

qRay.prototype.getAuthors = function () {
  return this
    .reduce( ( acc, curr ) => {
      if( acc.indexOf( curr.quoteAuthor ) === -1)
        acc.push( curr.quoteAuthor )
      return acc
    }, [])
    .sort()
}

qRay.prototype.getQuoteTexts = function () {
  return this
    .map( q => q.quoteText )
}

module.exports = qRay