function validateEmail(b) {
    const regex = /([a-zA-z0-9\+_.@])+@successive.tech/gm;
    let a = regex.test(b);
    if (a == true) {
        return true;
    } else {
        return false;
    }
}
export default validateEmail;