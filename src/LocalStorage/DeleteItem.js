const DeleteItemLS = (key, value) => {
    const arr = JSON.parse((localStorage.getItem(key)))
    arr.splice(arr.findIndex(item => item._id === value._id), 1)
    localStorage.setItem(key, JSON.stringify(arr))
}
export default DeleteItemLS