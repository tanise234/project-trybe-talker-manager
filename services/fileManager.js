const fs = require('fs/promises');

const talkers = 'src/talker.json';

const getAllTalkers = async () => {
    try {
        const arrayTalkers = await fs.readFile(talkers, 'utf8');
        return JSON.parse(arrayTalkers);
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllTalkers,
};