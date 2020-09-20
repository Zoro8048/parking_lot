export const parking = (nr) => {
    return{
        type: 'PARK_VEHICLE',
        payload: nr
    };
}

export const unparking = (nr) => {
    return{
        type: 'UNPARK_VEHICLE',
        payload: nr
    };
}