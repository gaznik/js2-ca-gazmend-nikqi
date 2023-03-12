export function save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
};

export function load(key, value){
    try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
    } catch {
        return null
    }
};


export function remove(key, value){
    localStorage.removeItem(key);
};

export function retrieveAccessToken() {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) return null;
    return accessToken;
};