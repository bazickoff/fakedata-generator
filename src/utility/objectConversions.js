import js2xmlparser from 'js2xmlparser';
import { formats } from '../redux/generateData/reducer';

const sqlTableName = 'FAKE_DATA';
const separator = ', ';

const csvBuilder = (data, fieldsKey) => {
  let formattedData = `${fieldsKey.join(separator)}\n`;
  data.forEach(singleData => {
    const dataArray = [];
    fieldsKey.forEach(key => {
      if (singleData[key] !== undefined) {
        dataArray.push(singleData[key]);
      } else {
        dataArray.push('');
      }
    });
    formattedData = `${formattedData}${dataArray.join(separator)}\n`;
  });
  return formattedData;
};
const firebaseBuild = data => {
  let formattedData = {};
  data.forEach((singleData, index) => {
    formattedData[`${new Date().getTime()}${index}`] = singleData;
  });
  formattedData = JSON.stringify(formattedData, null, 2);
  return formattedData;
};
const tableBuild = (data, fieldsKey) => {
  let formattedData = '\n';
  formattedData += `| ${fieldsKey.join(' | ')} |\n|`;
  fieldsKey.forEach(() => (formattedData += ' -- |'));
  formattedData += '\n';
  data.forEach(singleData => {
    const dataArray = [];
    fieldsKey.forEach(key => {
      if (singleData[key] !== undefined) {
        dataArray.push(singleData[key]);
      } else {
        dataArray.push('');
      }
    });
    formattedData = `${formattedData}| ${dataArray.join(' | ')} |\n`;
  });
  return formattedData;
};
const tabbedData = (data, fieldsKey) => {
  let formattedData = `${fieldsKey.join('\t')}\n`;
  data.forEach(singleData => {
    const dataArray = [];
    fieldsKey.forEach(key => {
      if (singleData[key] !== undefined) {
        dataArray.push(singleData[key]);
      } else {
        dataArray.push('');
      }
    });
    formattedData = `${formattedData}${dataArray.join('\t')}\n`;
  });
  return formattedData;
};
const sqlBuild = (data, fieldsKey) => {
  let formattedData = ``;
  data.forEach(singleData => {
    const dataArray = [];
    const dataKeys = [];
    const keys = Object.keys(singleData);
    keys.forEach(key => {
      if (singleData[key] !== undefined) {
        dataKeys.push(key);
        switch (typeof singleData[key]) {
          case 'number':
          case 'boolean':
            dataArray.push(singleData[key]);
            break;
          default:
            dataArray.push(`'${singleData[key]}'`);
        }
      }
    });
    formattedData = `${formattedData}insert into ${sqlTableName} (${dataKeys.join(
      separator
    )}) values (${dataArray.join(separator)});\n`;
  });
  return formattedData;
};
export default (data, format, fieldsKey) => {
  if (!data) return '';
  switch (format) {
    case formats[1]:
      return js2xmlparser.parse('fakedata', data);
    case formats[2]:
      return csvBuilder(data, fieldsKey);
    case formats[3]: {
      return tableBuild(data, fieldsKey);
    }
    case formats[4]:
      return firebaseBuild(data);
    case formats[5]:
      return sqlBuild(data, fieldsKey);
    case formats[6]: {
      return tabbedData(data, fieldsKey);
    }
    default:
      return JSON.stringify(data, null, 2);
  }
};
