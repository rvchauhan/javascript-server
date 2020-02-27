export default {
  login:
  {
    email:
    {
      required: true,
      string: true,
      in: ['body'],
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      errorMessage: 'email is required'
    },
    password: true,
    string: true,
    errorMessage: 'password is required in string'
  },
  create:
  {
    name: {
      required: true,
      regex: '([a-zA-Z])+ ?([a-zA-Z])+$',
      in: ['body'],
      errorMessage: 'Name is required',
    },
    address: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'address is required',
    },
    mobile_number: {
      required: true,
      number: true,
      in: ['body'],
      errorMessage: 'mobile number required',
    },
    role: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'Please enter role'

    },
    dob: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'DOB is required',
    },
    hobbies: {
      required: true,
      array: 'string',
      in: ['body'],
      errorMessage: 'hobby is required',

    },
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
      custom: (dataToUpdate: any) => {
        console.log(dataToUpdate);
      }
    },
  }
};