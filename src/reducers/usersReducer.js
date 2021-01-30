const initialState = {
    users: [
        { name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends" },
        { name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends" },
        { name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends" },

    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                name: action.payload.name,
                phone: action.payload.phone,
                address: action.payload.address,
                type: action.payload.type
            };
            return { ...state, users: [...state.users, newUser] }
        default:
            return state;
    }

};
export default usersReducer;



