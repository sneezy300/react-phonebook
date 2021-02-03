const initialState = {
    users: [
        {
            name: "Nan Antwi",
            phone: "0242082528",
            address: "D12 Mallam",
            type: "friends"
        },
        {
            name: "Nan Antwi",
            phone: "0242082528",
            address: "D12 Mallam",
            type: "friends"
        },
        {
            name: "Nan Antwi",
            phone: "0242082528",
            address: "D12 Mallam",
            type: "friends"
        },

    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":

            return { ...state, users: [...state.users, action.payload] };
        case "DELETE_USER":
            let undeletedUsers = state.users.filter((user) => user.id !== action.payload)
            return { ...state, users: undeletedUsers }
        case "EDIT_USER":
            return {
                ...state, users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user)
            };
        default:
            return state;
    };

};
export default usersReducer;



