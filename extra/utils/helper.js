function validateEmail(b) 
{
    const regex = /([a-zA-z0-9\+_.@])+@successive.tech/gm;
    return regex.test(b);
}
export default validateEmail;
