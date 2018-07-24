const mongoose = require('mongoose');

// Connect to mongo
mongoose.connect(`mongodb://mongo:27017/uehlin`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Create our model
const Schema = mongoose.Schema;
const linkSchema = new Schema({
    url: String,
    hash: String
});
const Link = mongoose.model('Link', linkSchema);

module.exports = {
    addNewUrl: async function(url, hash) {
        let link = new Link({ url, hash });
        return await link.save();
    },
    getUrl: async function(hash){
        return await Link.findOne({ hash });
    },
    removeUrl: async function(hash){
        return await Link.deleteOne({ hash });
    }
};