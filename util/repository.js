module.exports = {
    _db: {},
    addNewUrl: async function(newUrl, newHash) {
        this._db[newHash] = {
            url: newUrl
        };
        return await Promise.resolve();
    },
    getUrl: async function(hash){
        if(!this._db[hash]){
            return await Promise.reject();
        }
        return await Promise.resolve(this._db[hash]);
    },
    removeUrl: async function(hash){
        this._db[hash] = undefined;
        return await Promise.resolve();
    }
};