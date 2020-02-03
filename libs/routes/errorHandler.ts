
const errorHandler = (err: any, req: any, res: any, next: any) => {
    console.log('Error', err);
    res.send({
        error: err.error,
        message: err.error,
        status: err.error,
        timestamp: new Date()
    });
};
export default errorHandler;
