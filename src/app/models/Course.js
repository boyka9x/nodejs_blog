const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    _id: {type: Number,},
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String, maxLength: 255 },
    //     createdAt: { type: Date, default: Date.now},
    //     updatedAt: { type: Date, default: Date.now},
}, {
    _id: false,
    timestamps: true,
});

// Custom query helpers
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'asc'
        });
    }
    return this;
}

// Add plugin
mongoose.plugin(slug);
Course.plugin(AutoIncrement,{start_seq: 1});
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' ,
});


module.exports = mongoose.model('Course', Course);