// Simulate a mock API call to authenticate user credentials
export async function authenticateUser(username, password) {
    // Simulate a delay to mimic network latency
    return new Promise((resolve) => {
        setTimeout(() => {
            const validUsername = 'admin';
            const validPassword = '12345';

            if (username === validUsername && password === validPassword) {
                resolve({ success: true, message: 'Login successful!' });
            } else {
                resolve({ success: false, message: 'Invalid username or password.' });
            }
        }, 1000); // 1-second delay
    });
}
