const parking = (state = [], action ) => {
    switch(action.type) {
        case 'PARK_VEHICLE':
            console.log(action);
            return [
                ...state,
                action.payload
            ];
        case 'UNPARK_VEHICLE':
            console.log("\n"+[...state]+"\n"+[...state].filter((val) => !val.includes(action.payload)));
            return [...state].filter((val) => !val.includes(action.payload));

        default: 
            return [...state];
    }
}

export default parking;