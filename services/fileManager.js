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

const getTalkerById = async (id) => {
    try {
        const arrayTalkers = await getAllTalkers();
        const talker = arrayTalkers.find((t) => t.id === id);
        return talker;
    } catch (error) {
        return error;
    }
};

const verifyId = async (provided) => {
    const arrayTalkers = await getAllTalkers();
    let savedId = null;
    arrayTalkers.forEach((saved) => {
        if (saved.name === provided.name) savedId = saved.id;
    });
    if (savedId) return savedId;
    
    let last = 0;
    arrayTalkers.forEach((saved) => {
        if (saved.id > last) last = saved.id;
    });
    return last + 1;
};

const deleteById = async (id) => {
    try {
        const arrayTalkers = await getAllTalkers();
        const filtered = arrayTalkers.filter((talker) => talker.id !== Number(id));
        await fs.writeFile(talkers, JSON.stringify(filtered));
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllTalkers,
    getTalkerById,
    verifyId,
    deleteById,
};