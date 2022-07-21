const Contact = require("../../models/components/contact")
const mongoose = require("mongoose")

exports.createContact = (req, res) => {
    try {
        const contactObj = {
            city: req.body.city,
            address: req.body.address,
            cityIndex: req.body.cityIndex,
            country: req.body.country,
            email: req.body.email,
            number: req.body.number,
            numberTwo: req.body.numberTwo,
        }

        const con = new Contact(contactObj)
        con.save((error, contact) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (contact) return (
                res.status(201).json({ contact, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getContacts = (req, res) => {
    try {
        Contact.find({}).exec((error, contact) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (contact) return (
                res.status(200).json({ contact, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateContact = async (req, res) => {
    const { id } = req.params;
    const contact = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);

    const updatedContact = await Contact.findByIdAndUpdate(id, contact, { new: true });

    res.json(updatedContact);
}

exports.deleteContact = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);
    await Contact.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}
