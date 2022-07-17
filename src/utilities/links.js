const database = 'https://apexcorpinvestment-default-rtdb.firebaseio.com/users.json/';
const referrals = 'https://apexcorpinvestment-default-rtdb.firebaseio.com/referrals.json/';

const API_KEY = 'AIzaSyCvJZkoPhI4Acf3O89iZdefD_Zq5UUTzVw';
const signup = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
const signin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
const verificationEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + API_KEY;
const resetLink = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + API_KEY;

export {
    database,
    signup,
    signin,
    verificationEmail,
    resetLink,
    referrals
}