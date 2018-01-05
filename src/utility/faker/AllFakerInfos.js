const apis = [
  {
    title: 'address',
    options: [
      { title: 'zipCode' },
      { title: 'city' },
      { title: 'cityPrefix' },
      { title: 'citySuffix' },
      { title: 'streetName' },
      { title: 'streetAddress' },
      { title: 'streetSuffix' },
      { title: 'streetPrefix' },
      { title: 'secondaryAddress' },
      { title: 'county' },
      { title: 'country' },
      { title: 'countryCode' },
      { title: 'state' },
      { title: 'stateAbbr' },
      { title: 'latitude' },
      { title: 'longitude' }
    ]
  },
  {
    title: 'commerce',
    options: [
      { title: 'color' },
      { title: 'department' },
      { title: 'productName' },
      { title: 'price' },
      { title: 'productAdjective' },
      { title: 'productMaterial' },
      { title: 'product' }
    ]
  },
  {
    title: 'company',
    options: [
      { title: 'suffixes' },
      { title: 'companyName' },
      { title: 'companySuffix' },
      { title: 'catchPhrase' },
      { title: 'bs' },
      { title: 'catchPhraseAdjective' },
      { title: 'catchPhraseDescriptor' },
      { title: 'catchPhraseNoun' },
      { title: 'bsAdjective' },
      { title: 'bsBuzz' },
      { title: 'bsNoun' }
    ]
  },
  {
    title: 'database',
    options: [
      { title: 'column' },
      { title: 'type' },
      { title: 'collation' },
      { title: 'engine' }
    ]
  },
  {
    title: 'date',
    options: [
      { title: 'past' },
      { title: 'future' },
      { title: 'between' },
      { title: 'recent' },
      { title: 'soon' },
      { title: 'month' },
      { title: 'weekday' }
    ]
  },
  {
    title: 'finance',
    options: [
      { title: 'account' },
      { title: 'accountName' },
      { title: 'mask' },
      { title: 'amount' },
      { title: 'transactionType' },
      { title: 'currencyCode' },
      { title: 'currencyName' },
      { title: 'currencySymbol' },
      { title: 'bitcoinAddress' },
      { title: 'ethereumAddress' },
      { title: 'iban' },
      { title: 'bic' }
    ]
  },
  {
    title: 'hacker',
    options: [
      { title: 'abbreviation' },
      { title: 'adjective' },
      { title: 'noun' },
      { title: 'verb' },
      { title: 'ingverb' },
      { title: 'phrase' }
    ]
  },
  {
    title: 'helpers',
    options: [
      { title: 'randomize' },
      { title: 'slugify' },
      { title: 'replaceSymbolWithNumber' },
      { title: 'replaceSymbols' },
      { title: 'shuffle' },
      { title: 'mustache' },
      { title: 'createCard' },
      { title: 'contextualCard' },
      { title: 'userCard' },
      { title: 'createTransaction' }
    ]
  },
  {
    title: 'image',
    options: [
      { title: 'image' },
      { title: 'avatar' },
      { title: 'imageUrl' },
      { title: 'abstract' },
      { title: 'animals' },
      { title: 'business' },
      { title: 'cats' },
      { title: 'city' },
      { title: 'food' },
      { title: 'nightlife' },
      { title: 'fashion' },
      { title: 'people' },
      { title: 'nature' },
      { title: 'sports' },
      { title: 'technics' },
      { title: 'transport' },
      { title: 'dataUri' }
    ]
  },
  {
    title: 'internet',
    options: [
      { title: 'avatar' },
      { title: 'email' },
      { title: 'exampleEmail' },
      { title: 'userName' },
      { title: 'protocol' },
      { title: 'url' },
      { title: 'domainName' },
      { title: 'domainSuffix' },
      { title: 'domainWord' },
      { title: 'ip' },
      { title: 'ipv6' },
      { title: 'userAgent' },
      { title: 'color' },
      { title: 'mac' },
      { title: 'password' }
    ]
  },
  {
    title: 'lorem',
    options: [
      { title: 'word' },
      { title: 'words' },
      { title: 'sentence' },
      { title: 'slug' },
      { title: 'sentences' },
      { title: 'paragraph' },
      { title: 'paragraphs' },
      { title: 'text' },
      { title: 'lines' }
    ]
  },
  {
    title: 'name',
    options: [
      { title: 'firstName' },
      { title: 'lastName' },
      { title: 'findName' },
      { title: 'jobTitle' },
      { title: 'prefix' },
      { title: 'suffix' },
      { title: 'title' },
      { title: 'jobDescriptor' },
      { title: 'jobArea' },
      { title: 'jobType' }
    ]
  },
  {
    title: 'phone',
    options: [
      { title: 'phoneNumber' },
      { title: 'phoneNumberFormat' },
      { title: 'phoneFormats' }
    ]
  },
  {
    title: 'random',
    options: [
      { title: 'number' },
      { title: 'arrayElement' },
      { title: 'objectElement' },
      { title: 'uuid' },
      { title: 'boolean' },
      { title: 'word' },
      { title: 'words' },
      { title: 'image' },
      { title: 'locale' },
      { title: 'alphaNumeric' },
      { title: 'hexaDecimal' }
    ]
  },
  {
    title: 'system',
    options: [
      { title: 'fileName' },
      { title: 'commonFileName' },
      { title: 'mimeType' },
      { title: 'commonFileType' },
      { title: 'commonFileExt' },
      { title: 'fileType' },
      { title: 'fileExt' },
      { title: 'directoryPath' },
      { title: 'filePath' },
      { title: 'semver' }
    ]
  }
];

export { apis };
