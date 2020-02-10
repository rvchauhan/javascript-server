
export default {
create:
{
id:
{
required: true,
string: true,
in: ['body'],
// tslint:disable-next-line:object-literal-shorthand
custom: (value: number) => {
console.log('Value', value);
}
},
name:
{
required: true,
regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
in: ['body'],
errorMessage: 'Name is required',
}
},
delete:
{
id:
{
required: true,
errorMessage: 'Id is required',
in: ['params']
}
},
get:
{
skip:
{
required: false,
default: 0,
number: true,
in: ['query'],
errorMessage: 'Skip is invalid',
},
limit:
{
required: false,
default: 10,
number: true,
in: ['query'],
errorMessage: 'Limit is invalid',
}
},
update:
{
id:
{
required: true,
string: true,
in: ['body']
},
dataToUpdate:
{
in: ['body'],
required: true,
isObject: true,
// tslint:disable-next-line:object-literal-shorthand
custom: (dataToUpdate: any) => {
console.log(dataToUpdate);
},
}
}
};