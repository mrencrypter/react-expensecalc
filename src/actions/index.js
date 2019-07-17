export const addItem = item => {
    return{
        type: "ADD_ITEM",
        payload:item
    }
}

export const deleteItem = (itemId, type) => {
    return {
        type: "DELETE_ITEM",
        payload: {
            type: type,
            itemId : itemId
        }
    }
}