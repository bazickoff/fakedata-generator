export default [
  {
    id: 1514960275383,
    fieldName: 'id',
    blank: '0',
    type: {
      value: 'random.number',
      header: 'random',
      title: 'Number',
      fieldOption: 'true'
    },
    options: { min: 0, max: 1000000 },
    locale: 'en_US'
  },
  {
    id: 1514960293525,
    fieldName: 'first_name',
    blank: '0',
    type: {
      value: 'name.firstName',
      header: 'name',
      title: 'First Name',
      fieldOption: 'true'
    },
    options: {},
    locale: 'en_US'
  },
  {
    id: 1514960360983,
    fieldName: 'imageUrl',
    blank: '0',
    type: {
      value: 'image.imageUrl',
      header: 'image',
      title: 'Image Url',
      fieldOption: 'true'
    },
    options: {},
    locale: 'en_US'
  },
  {
    id: 1514960383522,
    fieldName: 'internet_email',
    blank: '0',
    type: { value: 'internet.email', header: 'internet', title: 'Email' },
    locale: 'en_US'
  },
  {
    id: 1514960421807,
    fieldName: 'ip_address',
    blank: '0',
    type: { value: 'internet.ip', header: 'internet', title: 'Ip' },
    locale: 'en_US'
  }
];
