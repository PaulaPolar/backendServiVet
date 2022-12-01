const bcrypt = require('bcrypt');

const encryptClave = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const compareClave = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {
    encryptClave,
    compareClave,
};