export const actionType = {
    addItem: "Add_Item",
    removeItem: "Remove_Item"
}

export const addItem = (item, col) => {
    return {
        type: actionType.addItem,
        item: item,
        col: col
    }
}

export const removeItem = (index, col) => {
    return {
        type: actionType.removeItem,
        index: index,
        col: col
    }
}