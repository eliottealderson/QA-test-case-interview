// Configuration de l'application
const Config = {
    BASE_URL: process.env.BASE_URL || 'https://openclassrooms.com',
    LOGIN_ENDPOINT: process.env.LOGIN_ENDPOINT || '/fr/login',
    USERNAME: process.env.USERNAME || 'julesvernie@gmx.fr',
    PASSWORD: process.env.PASSWORD || 'wQLB7TcSBhLfo',
    UNKNOWN_USERNAME: process.env.UNKNOWN_USERNAME || 'invaliduser@example.com',
    INVALID_USERNAME: process.env.INVALID_USERNAME || 'j@.com',
    INVALID_PASSWORD: process.env.INVALID_PASSWORD || 'invalidpassword',
    EXPECTED_USER_NAME: process.env.EXPECTED_USER_NAME || 'Jules Vernie',
};

export default Config;
