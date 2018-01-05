import faker from 'faker';
import { fakerFunctions, getOptionsValue } from './index';

const checkBlank = (field, numberData) => {
  const blankIndexes = {};
  if (field.blank !== '0') {
    const blank = parseInt(field.blank, 10);
    const noBlanks = Math.floor(numberData * blank / 100);
    const diff = numberData / noBlanks;
    let number = new Date().getTime() % diff;
    blankIndexes[Math.floor(number)] = true;
    for (let i = 1; i < noBlanks; i++) {
      number = number + diff;
      blankIndexes[Math.floor(number)] = true;
    }
  }
  return blankIndexes;
};
export default (fields, numberData) => {
  const datas = [];
  for (let i = 0; i < numberData; i++) {
    datas.push({});
  }
  fields.forEach(field => {
    faker.locale = field.locale;
    const blankIndexes = checkBlank(field, numberData);
    const options = getOptionsValue(field);
    for (let i = 0; i < numberData; i++) {
      if (!blankIndexes[i]) {
        datas[i][field.fieldName] = fakerFunctions[field.type.value].funName(
          ...options
        );
      }
    }
  });
  return datas;
};
export { faker };
