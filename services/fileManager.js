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

const addTalker = async (talker) => {
    try {
        const arrayTalkers = await getAllTalkers();
        let id = 0;
        arrayTalkers.forEach((t) => {
            if (t.id > id) id = t.id;
        });
        const newTalker = { id: id + 1, ...talker };
        const newTalkerList = [...arrayTalkers, newTalker];
        await fs.writeFile(talkers, JSON.stringify(newTalkerList));
        return newTalker;
    } catch (error) {
        return error;
    }
};

const updtTalker = async (id, data) => {
    const arrayTalkers = await getAllTalkers();
    let updatedTalker;
    try {
        for (let i = 0; i < arrayTalkers.length; i += 1) {
            const talker = arrayTalkers[i];        
            if (talker.id === Number(id)) {
                talker.name = data.name;
                talker.age = data.age;
                talker.talk.watchedAt = data.talk.watchedAt;
                talker.talk.rate = data.talk.rate;
                updatedTalker = talker;
                } 
        }
        await fs.writeFile(talkers, JSON.stringify(arrayTalkers));
        return updatedTalker;
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
    addTalker,
    updtTalker,
    deleteById,
};