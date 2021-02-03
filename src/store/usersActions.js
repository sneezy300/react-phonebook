export const addUser = (newUser) => {
    return {

        type: 'ADD_USER',
        payload: newUser

    }
}

//action creater for deleting user
export const deleteUser = (userId) => {
    return {
        type: "DELETE-USER",
        payload: userId,
    }
}

//action creator for editing user
export const editUser = (updatedUser) => {
    return {
        type: "EDIT_USER",
        payload: updatedUser,
    };
};