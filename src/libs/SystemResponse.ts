class SystemResponse {
  static success = (res, data, message = 'success') => {
    return res.status(200).send({
      status: 'ok',
      message,
      data,
    });
  }
}
export default SystemResponse;