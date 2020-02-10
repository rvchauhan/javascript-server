import { Request, Response, NextFunction } from 'express';
import { isNamedExports } from 'typescript';
 const validationHandler = function (config) {
  return function (req: Request, res: Response, next: NextFunction) {
    const arrayName = [];
    const Keys = Object.keys(config);
    Keys.forEach(element => {
      const objectkeys = config[element];
      const ekeys = (Object.keys(objectkeys));
      const values = (objectkeys['in'].map(inside => req[inside][element]))
        .filter(ele => ele);
              const inValue = (objectkeys['in']);
      const data = req[inValue];
      let value = values.length ? values[0] : undefined;
      if (ekeys.includes('required')) {
        if (objectkeys.required && !value) {
          next({
            error: `${element} is required`,
            message:  `${element} is required `,
            status: '403',
            timestamp: new Date()
          });
        } else {
          if (objectkeys.string) {
            if ((objectkeys.string) && typeof value!=='string') {
              arrayName.push(`${element} should be of type string`);
            }
          }
          if (objectkeys.regex) {
            const reg=new RegExp(objectkeys.regex);
            if (!reg.test(value)) {
              arrayName.push(objectkeys.errorMessage||`${element} is invalid`);
            }
          }
          if (objectkeys.number) {
            if ((objectkeys.number) && isNaN(value) && value) {
              arrayName.push(objectkeys.errorMessage|| `${element} should be of type number`);
            }
          }
          if (objectkeys.default) {
            if (value == '' || value == undefined) {
              value = objectkeys.default;
            }
          }
          if (objectkeys.custom) {
            objectkeys.custom(value)
          }
          if (objectkeys.isObject) {
            if ((objectkeys.isObject) && typeof value.isObject) {
              arrayName.push(`$ {element} should be of object type`)
            }
          }
        }
      }      
   });
   if(arrayName.length)
   {
    next(arrayName);
   }
   else{
    next(); 
   }
  }
}
export default validationHandler