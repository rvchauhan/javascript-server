import { Request, Response, NextFunction } from 'express';

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }

  return true;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

export default function (config) {
  //console.log(config);
  return function (req: Request, res: Response, next: NextFunction) {
    const arrayName = [];
    if (req.method.match('GET')) {
      const getKeys = Object.keys(config);
      getKeys.forEach(element => {
        config[element].in.map((value) => {
          if (!(isEmpty(req[value]))) {
            if (!req[value][element]) {
              req[value][element] = config[element].default;
            }
            else {
              (!isNaN(req[value][element])) ? (console.log(`${element} is of type number`), req[value][element] = parseInt(req[value][element])) : arrayName.push(config[element].errorMessage.typeError);
            }
          }

        })
      });
      console.log(req.query);
    }
    else if (req.method.match('POST')) {
      const createKeys = Object.keys(config);
      console.log(createKeys);
      createKeys.forEach(element => {
        config[element].in.map((value) => {
          if (!(isEmpty(req[value]))) {
            if (req[value][element]) {
              console.log(`${element} is there`);

              (isString(req[value][element])) ? console.log(`${element} is of string type`) : arrayName.push(config[element].errorMessage.typeError);

              if (element === 'name') {
                (config.name.regex.test(req[value][element])) ? console.log("Regex validation is right") : arrayName.push(config[element].errorMessage.regexError)
              }
            }
            else {
              arrayName.push(config[element].errorMessage.Error);
            }
          }
        })
      });
      console.log(req.body);
    }
  else if (req.method.match('PUT')) {
      const updateKeys = Object.keys(config);
      console.log(updateKeys);
      updateKeys.forEach(element => {
        config[element].in.map((value) => {
          if (!(isEmpty(req[value]))) {

            if (req[value][element]) {
              console.log(`${element} is there`);
              if (config[element].string) {
                if (isString(req[value][element])) {
                  console.log(`${element} is of correct type`);
                }
                else {
                  arrayName.push(config[element].errorMessage.typeError);
                }
              }
              if (config[element].isObject) {
                if (isObject(req[value][element])) {
                  console.log(`${element} is of correct type`);
                }
                else {
                  arrayName.push(config[element].errorMessage.typeError);
                }
              }
            }
            else {
              arrayName.push(config[element].errorMessage.Error);
            }
          }
        })
      })
      console.log(req.body)
    }
else if (req.method.match('DELETE')) {
      const deleteKeys = Object.keys(config);
      deleteKeys.forEach(element => {
        config[element].in.map((value) => {
          if ((req[value][element])) {
            console.log(`${element} is there`);
          }

          else {
            arrayName.push(config[element].errorMessage.Error);
          }
        })
      });
    }
    else {
      console.log("error")
    }
 if (!arrayName.length) {
      next();
    }
    else {
      return next(arrayName);
    }
  };
}
