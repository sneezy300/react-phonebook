const initialState = {
    users:[
        {name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends"},
        {name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends"},
        {name: "Nan Antwi", phone: "0242082528", address: "D12 Mallam", type: "friends"},
       
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
                    return state;
    
        default:
            return state;
    }

};
export default usersReducer;



