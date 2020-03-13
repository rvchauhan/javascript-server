import { TraineeController } from './index';
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
const traineeRouter = Router();
//console.log(validation.create);
traineeRouter.route('/trainee')
  /**
  * @swagger
  *
  *definitions:
  *     Unauthorized:
  *       type: object
  *       properties:
  *         error:
  *           example: Unauthorized
  *         message:
  *           example: Token not found
  *         status:
  *           example: 403
  *         timestamp:
  *           example: 2019-03-10T19:51:37.066Z
  *
  *     Traineeget:
  *       type: object
  *       properties:
  *         name:
  *           type: string
  *           example: Ravi
  *         address:
  *           type: string
  *           example: Noida
  *         mobile_number:
  *           type: number
  *           example: 9717043261
  *         role:
  *           type: string
  *           example: trainee
  *         dob:
  *           type: Date
  *           example: 12/04/1998
  *         hobbies:
  *           type: array
  *           example: ["cricket"]
  *         email:
  *           type: string
  *           example: chauhanravi814@gmail.com
  *         password:
  *           type: string
  *           example: Trainer@123
  *
  *     TraineeResponse:
  *       type: object
  *       properties:
  *           _id:
  *             example: 5e4e6e93c095d84d34045a30
  *           email:
  *             type: string
  *             example: chauhanravi814@gmail.com
  *           hobbies:
  *             type: array
  *             example: ["cicket"]
  *           name:
  *             type: string
  *             example: ravi chauhan
  *           address:
  *             type: string
  *             example: Delhi
  *           dob:
  *             type: Date
  *             example: 23/03/1998
  *           mobile_number:
  *             type: number
  *             example: 7017202643
  *           role:
  *             type: string
  *             example: trainee
  *           originalId:
  *             example: 5e4e6e93c095d84d34045a30
  *           createdBy:
  *             example: 5e45404398e86d576ad964e6
  *           createdAt:
  *             example: 2020-02-20T11:33:39.325Z
  *           _v:
  *             example:0
  */
  /**
  * @swagger
  *
  * /api/trainee:
  *     get:
  *       description: prints the list of the trainees
  *       security:
  *         - Bearer: []
  *       consumes:
  *         - application/json
  *       produces:
  *         - application/json
  *       parameters:
  *         - name: skip
  *           description: data to be skipped
  *           in: query
  *           required: false
  *           type: number
  *         - name: limit
  *           description: number of data to be shown
  *           in: query
  *           required: false
  *           type: number
  *         - name: sortBy
  *           description: data to be sort by
  *           in: query
  *           required: false
  *           type: string
  *         - name: searchby
  *           description: data to be search by
  *           in: query
  *           required: false
  *           type: string
  *           schema:
  *             $ref: '#/definitions/Traineeget'
  *       responses:
  *         200:
  *           description: Trainee List
  *           schema:
  *             properties:
  *               status:
  *                 example: Ok
  *               message:
  *                 example: 'Trainee List , No. of trainee: 4'
  *               count:
  *                 example: 4
  *               data:
  *                 type: object
  *                 allOf:
  *                   - $ref: '#/definitions/TraineeResponse'
  *         403:
  *           description: unauthorised access
  *           schema:
  *             $ref: '#/definitions/Unauthorized'
  *  */
  .get(authmiddleware('getUsers', 'write'), validationHandler(validation.get), TraineeController.list)
    /**
  * @swagger
  * definitions:
  *     TraineePost:
  *       type: object
  *       properties:
  *         name:
  *           type: string
  *           example: Ravi
  *         address:
  *           type: string
  *           example: Noida
  *         mobile_number:
  *           type: number
  *           example: 9717043261
  *         role:
  *           type: string
  *           example: trainee
  *         dob:
  *           type: Date
  *           example: 12/04/1998
  *         hobbies:
  *           type: array
  *           example: ["cricket"]
  *         email:
  *           type: string
  *           example: chauhanravi814@successive.tech
  *         password:
  *           type: string
  *           example: Trainer@123
  *
  *     TraineeResponse:
  *       type: object
  *       properties:
  *         _id:
  *           example: 5e4e6e93c095d84d34045a30
  *         hobbies:
  *           type: array
  *           example: ["cicket"]
  *         name:
  *           type: string
  *           example: ravi chauhan
  *         address:
  *           type: string
  *           example: Delhi
  *         mobile_number:
  *           type: number
  *           example: 7017202643
  *         dob:
  *           type: Date
  *           example: 23/03/1998
  *         email:
  *           type: string
  *           example: chauhanravi814@gmail.com
  *         role:
  *           type: string
  *           example: trainee
  *         originalId:
  *           example: 5e4e6e93c095d84d34045a30
  *         createdAt:
  *           example: 2020-02-20T11:33:39.325Z
  *         _v:
  *           example:0
  *
  */
  /**
  * @swagger
  *
  * /api/trainee:
  *     post:
  *       description: Returns the success reponse on creation
  *       security:
  *         - Bearer: []
  *       produces:
  *         - application/json
  *       parameters:
  *         - name: User
  *           description: data to be posted
  *           in: body
  *           required: true
  *           type: object
  *           schema:
  *             $ref: '#/definitions/TraineePost'
  *       responses:
  *         200:
  *           description: Trainee created successfully
  *           schema:
  *             properties:
  *               status:
  *                 example: Ok
  *                 message:
  *                   example: Trainee successfully created
  *               data:
  *                 type: object
  *                 allOf:
  *                   - $ref: '#/definitions/TraineeResponse'
  *         403:
  *           description: unauthorised access
  *           schema:
  *             $ref: '#/definitions/Unauthorized'
  */
  .post(authmiddleware('getUsers', 'write'), validationHandler(validation.create), TraineeController.create)
    /**
  * @swagger
  * definitions:
  *     TraineePut:
  *       type: object
  *       properties:
  *         id:
  *           example: 5e4e6e93c095d84d34045a30
  *         dataToUpdate:
  *           type: object
  *           example:
  *             name:: string
  *             address: string
  *             mobile_number: number
  *             dob: date
  *             email: string
  *             role: string
  *
  *     TraineeResponse:
  *       type: object
  *       properties:
  *         _id:
  *           example: 5e4e6e93c095d84d34045a30
  *         hobbies:
  *           type: array
  *           example: ["cicket"]
  *         name:
  *           type: string
  *           example: ravi chauhan
  *         address:
  *           type: string
  *           example: Delhi
  *         mobile_number:
  *           type: number
  *           example: 7017202643
  *         dob:
  *           type: Date
  *           example: 23/03/1998
  *         email:
  *           type: string
  *           example: chauhanravi814@gmail.com
  *         role:
  *           type: string
  *           example: trainee
  *         originalId:
  *           example: 5e4e6e93c095d84d34045a30
  *         createdAt:
  *           example: 2020-02-20T11:33:39.325Z
  *         updatedAt:
  *           example: 2020-02-20T11:33:39.325Z
  *         _v:
  *           example:0
  */
  /**
* @swagger
*
* /api/trainee:
*       put:
*         description: Returns the success reponse on creation
*         security:
*           - Bearer: []
*         produces:
*           - application/json
*         parameters:
*           - name: User
*             description: Data to be updated
*             in: body
*             required: true
*             type: object
*             schema:
*               $ref: '#/definitions/TraineePut'
*         responses:
*           200:
*             description: trainee updated successfully
*             schema:
*               properties:
*                 status:
*                   example: Ok
*                 message:
*                   example: User data successfully Updated
*                 data:
*                   type: object
*                   allOf:
*                     - $ref: '#/definitions/TraineeResponse'
*           403:
*             description: unauthorised access
*             schema:
*               $ref: '#/definitions/Unauthorized'
*/
  .put(authmiddleware('getUsers', 'write'), validationHandler(validation.update), TraineeController.update)
     /**
  * @swagger
  *
  *     TraineeResponse:
  *       type: object
  *       properties:
  *         _id:
  *           example: 5e4e6e93c095d84d34045a30
  *         hobbies:
  *           type: array
  *           example: ["cicket"]
  *         name:
  *           type: string
  *           example: ravi chauhan
  *         address:
  *           type: string
  *           example: Delhi
  *         mobile_number:
  *           type: number
  *           example: 7017202643
  *         dob:
  *           type: Date
  *           example: 23/03/1998
  *         email:
  *           type: string
  *           example: chauhanravi814@gmail.com
  *         role:
  *           type: string
  *           example: trainee
  *         originalId:
  *           example: 5e4e6e93c095d84d34045a30
  *         createdAt:
  *           example: 2020-02-20T11:33:39.325Z
  *         deletedAt:
  *           example: 2020-02-20T11:33:39.325Z
  *         _v:
  *           example:0
  */
/**
* @swagger
*
* /api/trainee/{id}:
*     delete:
*       description: Returns the success reponse on creation
*       security:
*         - Bearer: []
*       produces:
*         - application/json
*       parameters:
*         - name: id
*           in: path
*           required: true
*           type: string
*           example: 5e4d309fe579b953b52d00f0
*       responses:
*         200:
*           description: Inside Delete Trainee
*           schema:
*             properties:
*               status:
*                 example: Ok
*               message:
*                 example: Trainee Deleted Successfully
*               data:
*                 type: object
*                 allOf:
*                   - $ref: '#/definitions/TraineeResponse'
*         403:
*           description: unauthorised access
*           schema:
*             $ref: '#/definitions/Unauthorized'
*/
traineeRouter.delete('/trainee/:id', authmiddleware('getUsers', 'write'), validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;


