const apis = [
  {
    title: 'address',
    options: [
      {
        title: 'zipCode',
        desc: `from format. If format is not specified, the locale's zip format is used.`
      },
      {
        title: 'city',
        desc: `Select format string from dropdown.\nMethod provided by faker wrapped in {{}}, `
      },
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
      { title: 'price', desc: `parameters are min, max, dec, symbol` },
      { title: 'productAdjective' },
      { title: 'productMaterial' },
      { title: 'product' }
    ]
  },
  {
    title: 'company',
    options: [
      { title: 'suffixes' },
      {
        title: 'companyName',
        desc: `parameter is format (string)`
      },
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
      { title: 'mask', desc: `parameter is length (integer)` },
      { title: 'amount', desc: `parameters are min, max, dec, symbol` },
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
    title: 'image',
    options: [
      { title: 'image', desc: `parameters are width and height` },
      { title: 'avatar', desc: `parameters are width and height` },
      { title: 'imageUrl', desc: `parameters are width and height` },
      { title: 'abstract', desc: `parameters are width and height` },
      { title: 'animals', desc: `parameters are width and height` },
      { title: 'business', desc: `parameters are width and height` },
      { title: 'cats', desc: `parameters are width and height` },
      { title: 'city', desc: `parameters are width and height` },
      { title: 'food', desc: `parameters are width and height` },
      { title: 'nightlife', desc: `parameters are width and height` },
      { title: 'fashion', desc: `parameters are width and height` },
      { title: 'people', desc: `parameters are width and height` },
      { title: 'nature', desc: `parameters are width and height` },
      { title: 'sports', desc: `parameters are width and height` },
      { title: 'technics', desc: `parameters are width and height` },
      { title: 'transport', desc: `parameters are width and height` },
      { title: 'dataUri', desc: `parameters are width and height` }
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
      { title: 'password', desc: `parameter is password length (integer)` }
    ]
  },
  {
    title: 'lorem',
    options: [
      { title: 'word', desc: `paameter is letter count (integer)` },
      { title: 'words', desc: `paameter is word count (integer)` },
      { title: 'sentence', desc: `paameter is word count (integer)` },
      { title: 'slug', desc: `paameter is word count (integer)` },
      { title: 'sentences', desc: `paameter is sentence count (integer)` },
      { title: 'paragraph', desc: `paameter is paragraph (integer)` },
      { title: 'paragraphs', desc: `paameter is paragraph count (integer)` },
      { title: 'text' },
      { title: 'lines', desc: `paameter is line count (integer)` }
    ]
  },
  {
    title: 'name',
    options: [
      { title: 'firstName', desc: `select gender from dropdown` },
      { title: 'lastName', desc: `select gender from dropdown` },
      { title: 'findName' },
      { title: 'jobTitle' },
      { title: 'prefix', desc: `select gender from dropdown` },
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
      {
        title: 'phoneNumber',
        desc: `paameter is phone number format (string)`
      },
      { title: 'phoneNumberFormat' },
      { title: 'phoneFormats' }
    ]
  },
  {
    title: 'random',
    options: [
      { title: 'number', desc: `parameters are min and max` },
      { title: 'objectElement' },
      { title: 'uuid' },
      { title: 'boolean' },
      { title: 'image' },
      { title: 'locale' },
      { title: 'alphaNumeric' },
      { title: 'hexaDecimal' }
    ]
  },
  {
    title: 'system',
    options: [
      { title: 'fileName', desc: `Extension and type can be chosen` },
      { title: 'commonFileName' },
      { title: 'mimeType' },
      { title: 'commonFileType' },
      { title: 'commonFileExt', desc: `Extension and type can be chosen` },
      { title: 'fileType' },
      { title: 'fileExt', desc: `Mime type can be chosen` },
      { title: 'directoryPath' },
      { title: 'filePath' },
      { title: 'semver' }
    ]
  }
];

export { apis };
