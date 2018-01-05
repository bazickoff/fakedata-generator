import { apis } from './fakerInfos';
import { capitalize, camelCaseToHuman } from '../../utility';
import fieldOptions from './fieldOptions';
import faker from 'faker';
const headers = [
  {
    value: 'all',
    count: 0
  }
];
let fakerOptions = [];
const fakerFunctions = {};
apis.forEach(api => {
  headers.push({
    value: api.title,
    title: `${capitalize(api.title)} (${api.options.length})`,
    count: api.options.length
  });
  const fieldOptionsParent = fieldOptions[api.title] || {};
  headers[0].count += api.options.length;
  api.options.forEach(option => {
    const optionTitle = `${api.title}.${option.title}`;
    const fakerOption = {
      value: optionTitle,
      header: api.title,
      title: camelCaseToHuman(option.title),
      desc: option.desc
    };
    if (fieldOptionsParent[option.title]) {
      fakerOption.fieldOption = 'true';
    }
    fakerOptions.push(fakerOption);
    fakerFunctions[optionTitle] = {
      funName: `()faker.${optionTitle}()`,
      header: api.title,
      title: camelCaseToHuman(option.title)
    };
  });
});
headers[0].title = `All (${headers[0].count})`;
fakerOptions = fakerOptions.sort(
  (a, b) => (a.title > b.title ? 1 : a.title === b.title ? 0 : -1)
);
console.log('\n\n\n\n', JSON.stringify(headers), '\n\n\n\n');
console.log('\n\n\n\n', JSON.stringify(fakerOptions), '\n\n\n\n');
console.log('\n\n\n\n', JSON.stringify(fakerFunctions), '\n\n\n\n');
export { apis };
