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
    password: 
    {
      required : true,
      string : true,
      in: ['body'],
      errorMessage: 'password is required'
      
    }
  },
}