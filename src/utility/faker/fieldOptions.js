const widthHeightOptions = [
  {
    type: 'numeric',
    value: 'width'
  },
  {
    type: 'numeric',
    value: 'height'
  }
];
const genderOptions = [
  {
    type: 'select',
    value: 'gender',
    options: [
      {
        value: 'male',
        label: 'male'
      },
      {
        value: 'female',
        label: 'female'
      }
    ]
  }
];
const fieldOptions = {
  address: {
    city: [
      {
        type: 'select',
        value: 'format',
        defaultValue: `{{name.firstName}}`,
        options: [
          {
            value: `{{name.firstName}}`,
            label: `{{name.firstName}}`
          },
          {
            value: `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`,
            label: `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
          },
          {
            value: `{{address.cityPrefix}} {{name.firstName}}`,
            label: `{{address.cityPrefix}} {{name.firstName}}`
          },
          {
            value: `{{name.firstName}}{{address.citySuffix}}`,
            label: `{{name.firstName}}{{address.citySuffix}}`
          },
          {
            value: `{{name.lastName}}{{address.citySuffix}}`,
            label: `{{name.lastName}}{{address.citySuffix}}`
          }
        ]
      }
    ],
    state: [
      {
        type: 'boolean',
        value: 'useAbbr',
        defaultValue: false
      }
    ],
    streetAddress: [
      {
        type: 'boolean',
        value: 'useFullAddress',
        defaultValue: false
      }
    ],
    format: [
      {
        type: 'input',
        value: 'format'
      }
    ]
  },
  commerce: {
    price: [
      {
        type: 'numeric',
        value: 'min',
        defaultValue: 0
      },
      {
        type: 'numeric',
        value: 'max',
        defaultValue: 10000
      },
      {
        type: 'numeric',
        value: 'dec',
        defaultValue: 2
      },
      {
        type: 'input',
        value: 'symbol',
        defaultValue: '$'
      }
    ]
  },
  company: {
    companyName: [
      {
        type: 'select',
        value: 'format',
        defaultValue: `{{name.lastName}} {{company.companySuffix}}`,
        options: [
          {
            value: `{{name.lastName}} {{company.companySuffix}}`,
            label: `{{name.lastName}} {{company.companySuffix}}`
          },
          {
            value: `{{name.lastName}} - {{name.lastName}}`,
            label: `{{name.lastName}} - {{name.lastName}}`
          },
          {
            value: `{{name.lastName}}, {{name.lastName}} and {{name.lastName}}`,
            label: `{{name.lastName}}, {{name.lastName}} and {{name.lastName}}`
          }
        ]
      }
    ]
  },
  date: {
    future: [
      {
        type: 'numeric',
        value: 'years',
        defaultValue: 2
      }
    ],
    past: [
      {
        type: 'numeric',
        value: 'years',
        defaultValue: 2
      }
    ],
    recent: [
      {
        type: 'numeric',
        value: 'days',
        defaultValue: 2
      }
    ]
  },
  finance: {
    ammount: [
      {
        type: 'numeric',
        value: 'min',
        defaultValue: 0
      },
      {
        type: 'numeric',
        value: 'max',
        defaultValue: 10000
      },
      {
        type: 'numeric',
        value: 'dec',
        defaultValue: 2
      },
      {
        type: 'input',
        value: 'symbol',
        defaultValue: '$'
      }
    ],
    mask: [
      {
        type: 'numeric',
        value: 'length',
        defaultValue: 2
      }
    ]
  },
  image: {
    abstract: widthHeightOptions,
    animals: widthHeightOptions,
    business: widthHeightOptions,
    cats: widthHeightOptions,
    city: widthHeightOptions,
    dataUrl: widthHeightOptions,
    fashion: widthHeightOptions,
    food: widthHeightOptions,
    image: widthHeightOptions,
    imageUrl: widthHeightOptions,
    nature: widthHeightOptions,
    nightlife: widthHeightOptions,
    people: widthHeightOptions,
    sports: widthHeightOptions,
    technics: widthHeightOptions,
    transport: widthHeightOptions
  },
  internet: {
    password: [
      {
        type: 'numeric',
        value: 'len',
        defaultValue: 6
      }
    ]
  },
  lorem: {
    lines: [
      {
        type: 'numeric',
        value: 'lineCount',
        defaultValue: 3
      }
    ],
    paragraph: [
      {
        type: 'numeric',
        value: 'paragraph',
        defaultValue: 5
      }
    ],
    paragraphs: [
      {
        type: 'numeric',
        value: 'paragraphCount',
        defaultValue: 5
      }
    ],
    sentence: [
      {
        type: 'numeric',
        value: 'wordCount',
        defaultValue: 5
      }
    ],
    sentences: [
      {
        type: 'numeric',
        value: 'sentenceCount',
        defaultValue: 5
      }
    ],
    slug: [
      {
        type: 'numeric',
        value: 'wordCount',
        defaultValue: 5
      }
    ],
    word: [
      {
        type: 'numeric',
        value: 'num',
        defaultValue: 5
      }
    ],
    words: [
      {
        type: 'numeric',
        value: 'num',
        defaultValue: 5
      }
    ]
  },
  name: {
    firstName: genderOptions,
    lastName: genderOptions,
    prefix: genderOptions
  },
  phone: {
    phoneNumber: [
      {
        type: 'input',
        value: 'format'
      }
    ]
  },
  random: {
    number: [
      {
        type: 'numeric',
        value: 'min',
        defaultValue: 0
      },
      {
        type: 'numeric',
        value: 'max',
        defaultValue: 1000000
      }
    ]
  },
  system: {
    commonFileExt: [
      {
        type: 'input',
        value: 'ext'
      },
      {
        type: 'input',
        value: 'type'
      }
    ],
    fileExt: [
      {
        type: 'input',
        value: 'mimeType'
      }
    ],
    fileName: [
      {
        type: 'input',
        value: 'ext'
      },
      {
        type: 'input',
        value: 'type'
      }
    ]
  }
};

export default fieldOptions;

export function getDefaultOptions({ type }) {
  const options = {};
  const { header, value } = type;
  const fieldOption = fieldOptions[header][value.replace(`${header}.`, '')];
  fieldOption.forEach(option => {
    options[option.value] = option.defaultValue;
  });
  return options;
}
export function getFieldOptions({ header, value, fieldOption }) {
  if (fieldOption === 'true') {
    return fieldOptions[header][value.replace(`${header}.`, '')];
  }
  return [];
}
export function getOptionsValue({ options, type }) {
  const { value, header, fieldOption } = type;
  if (value === 'random.number') {
    return [{ min: parseInt(options.min, 10), max: parseInt(options.max, 10) }];
  }
  if (fieldOption === 'true') {
    const result = [];
    let valid = false;
    const optionProps = fieldOptions[header][value.replace(`${header}.`, '')];
    optionProps.forEach(option => {
      const singleVal = options[option.value];
      if (options[option.value] !== undefined) {
        valid = true;
        switch (option.type) {
          case 'select':
            result.push(singleVal);
            break;
          case 'boolean':
            let booleanVal;
            if (singleVal === 'true') {
              booleanVal = true;
            }
            if (singleVal === 'false') {
              booleanVal = false;
            }
            result.push(booleanVal);
            break;
          case 'input':
            result.push(singleVal);
            break;
          default:
            result.push(parseInt(singleVal, 10));
        }
      } else {
        result.push(undefined);
      }
    });
    if (valid) {
      return result;
    }
  }
  return [];
}
