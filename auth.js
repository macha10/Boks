// Authentication function to validate credentials
export function authenticate(username, password) {
    const validUsername = 'admin';
    const validPassword = '12345';

    return username === validUsername && password === validPassword;
}
