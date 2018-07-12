module.exports = {
    _db: {},
    addNewUrl: async function(newUrl, newHash) {
        this._db[newHash] = {
            url: newUrl
        };
        return await Promise.resolve();
    },
    getUrl: async function(hash){
        return await Promise.resolve(this._db[hash]);
    }
};