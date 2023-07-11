const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const newContact = await Contact.create({ ...req.body });
  console.log(newContact);
  res.status(201).json(newContact);
};

module.exports = addContact;