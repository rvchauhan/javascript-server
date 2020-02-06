const validation = {
  create:
  {
    id:
    {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: {
        Error: {
          error: "Id is required",
          message: "Id is required",
          timestamp: new Date(),
          status: 500,
        },
        typeError: {
          error: "ID and name should be of string type",
          message: "ID and name should be of string type",
          timestamp: new Date(),
          status: 500,
        }
      },
      custom: function (value) {
        console.log('Value', value);
        throw {
          error: 'Error Occured', message: 'Message'
        }
      }
    },
    name: {
      required: true,
      regex: /^[A-Z][a-z]{2,30}$/,
      in: ['body'],
      errorMessage: {
        Error: {
          error: "Name is required",
          message: "Name is required",
          timestamp: new Date(),
          status: 500,
        },
        regexError: {
          error: "Regex did not match",
          message: "Regex did not match",
          timestamp: new Date(),
          status: 500,
        }
      }
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
          status: 500,
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
          status: 500,
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
          status: 500,
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
          status: 500,
        },
        typeError: {
          error: "ID should be of string type and dataToUpadte should be of type object",
          message: "ID should be of string type and dataToUpadte should be of type object",
          timestamp: new Date(),
          status: 500,
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
          status: 500,
        },
        typeError: {
          error: "ID should be of string type and dataToUpadte should be of type object",
          message: "ID should be of string type and dataToUpadte should be of type object",
          timestamp: new Date(),
          status: 500,
        }
      },
      custom: function (dataToUpdate) {
        console.log('Value', dataToUpdate);
        throw {
          error: 'Error Occured', message: 'Message'
        }
      },
    }
  }
}
export default validation;