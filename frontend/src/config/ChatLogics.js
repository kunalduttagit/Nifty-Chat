export const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser.data._id ? users[1].name : users[0].name;
}

export const getSenderInfo = (loggedUser, users) => {
    return users[0]._id === loggedUser.data._id ? users[1] : users[0];
};
