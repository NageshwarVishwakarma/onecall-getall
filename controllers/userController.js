const users = [
    {
        id: 1,
        name: 'Nagesh'
    }
];

const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
};

const createUser = (req, res) => {

    const { name } = req.body;

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        data: newUser
    });
};

module.exports = {
    getUsers,
    createUser
};