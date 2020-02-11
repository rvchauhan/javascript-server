const validation = {
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
    // role: {
    //   required: true,
    //   string: true,
    //   in: ['body'],
    //   errorMessage: 'Please enter role'

    // },
    dob: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'DOB is required',
    },
    email: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'email is required',
    },
    hobbies: {
      required: true,
      array: 'string',
      in: ['body'],
      errorMessage: 'hobby is required',

    }
  },

  delete: {
    id: {
      required: true,
      errorMessage: {
        idError: {
          error: "Id is required",
          message: "Id is required",
          timestamp: new Date(),
          status: 422,
        }
      },
      in: ['params']
    }
  },
  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ['query'],
      errorMessage: {
        typeError: {
          error: "Skip should be of type number",
          message: "Skip should be of type number",
          timestamp: new Date(),
          status: 422,
        }
      }
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ['query'],
      errorMessage: {
        typeError: {
          error: "Limit should be of type number",
          message: "Limit should be of type number",
          timestamp: new Date(),
          status: 422,
        }
      }
    }
  },
  update: {
    id: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: {
        Error: {
          error: "Id is required",
          message: "Id is required",
          timestamp: new Date(),
          status: 422,
        },
        typeError: {
          error: "ID should be of string type and dataToUpadte should be of type object",
          message: "ID should be of string type and dataToUpadte should be of type object",
          timestamp: new Date(),
          status: 422,
        }
      }
    },
    dataToUpdate: {
      in: ['body'],
      required: true,
      isObject: true,
      errorMessage: {
        Error: {
          error: "dataToUpdate is required",
          message: "dataToUpdate is required",
          timestamp: new Date(),
          status: 422,
        },
        typeError: {
          error: "ID should be of string type and dataToUpadte should be of type object",
          message: "ID should be of string type and dataToUpadte should be of type object",
          timestamp: new Date(),
          status: 422,
        }
      },
      custom: function (dataToUpdate) {
        console.log('Value', dataToUpdate);
        if (!dataToUpdate) {
          throw {
            error: 'Error Occured', message: 'Message'
          }
        }
      },
    }
  }
}
export default validation;