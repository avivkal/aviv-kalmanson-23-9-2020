const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites'));
}

const setFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export{
    getFavorites,
    setFavorites
}