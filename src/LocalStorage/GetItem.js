const GetItemLS = (key) => {
    return JSON.parse((localStorage.getItem(key)))
}
export default GetItemLS