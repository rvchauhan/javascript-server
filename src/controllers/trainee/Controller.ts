import { Request, Response } from 'express'
import { Resolver } from 'dns';
class TraineeController {
    static instance: TraineeController;
    static getinstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return new TraineeController;
    }
    create = (req: Request, res: Response) => {
        console.log("----------CREATE-TRAINEE---------------");
        res.send({
            status: 'OK',
            message: 'Trainee Added Successfully',
            data: {
                id: 1,
                name: ' Ravi Chauhan ',
                position: ' Trainee Developer ',
                City: 'Noida'
            }
        })
    }

    list = (req: Request, res: Response) => {
        console.log("----------TRAINEE-LIST-----------------");
        res.send({
            status: 'OK',
            message: 'Trainee Listed Successfully',
            data: [{
                id: 1,
                name: ' Ravi Chauhan ',
                position: ' Trainee Developer ',
                City: 'Noida'
            },
            {
                id: 2,
                name: ' Vibhor Garg ',
                position: ' Trainee Developer ',
                City: 'Noida'
            },
            {
                id: 3,
                name: ' Shiva ',
                position: ' Trainee Developer ',
                City: 'Delhi'
            }]
        })
    }
    put = (req: Request, res: Response) => {
        console.log("----------UPDATE-TRAINEE---------------");
        res.send({
            status: 'OK',
            message: 'Trainee Update Successfully',
            data: {
                id: 3,
                name: ' Ravi Chauhan ',
                position: ' Trainee Developer ',
                City: 'Noida'
            }
        })

    }
    delete = (req: Request, res: Response) => {
        console.log("----------DELETE-TRAINEE---------------");
        res.send({
            status: 'OK',
            message: 'Trainee Delete Successfully',
            data: {
                id: 3,
                name: ' Ravi Chauhan ',
                position: ' Trainee Developer ',
                City: 'Noida'
            }
        })

    }
}

export default TraineeController.getinstance();