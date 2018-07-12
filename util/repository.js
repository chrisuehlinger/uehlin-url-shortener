module.exports = {
    _db: {},
    addNewUrl: function(newUrl, newHash) {
        this._db[newHash] = {
            url: newUrl
        };
    },
    getUrl: function(hash){
        return this._db[hash];
    }
};