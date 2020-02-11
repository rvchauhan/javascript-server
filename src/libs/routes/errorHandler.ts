const errorHandler = (err: any, req: any, res: any, next: any) => {
    console.log('Error', err);
    res.send({
        error: err.error,
        message: err.message,
        status:  err.status,
        timestamp: new Date(),
    });
};
export default errorHandler;