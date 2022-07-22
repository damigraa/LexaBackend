const mongoose = require("mongoose")

const architectSkillsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    iconImg: {
        type: String,
        required: true,
    },
}, { timestamps: true })




module.exports = mongoose.model("ArchitectSkills", architectSkillsSchema)
