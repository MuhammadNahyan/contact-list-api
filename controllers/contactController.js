const contacts = require('../models/contactModel');

// GET all contacts
const getAllContacts = (req, res) => {
  res.json(contacts);
};

// GET single contact by ID
const getContactById = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(contact);
};

// POST create contact
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
};

// PUT update contact
const updateContact = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  const { name, email, phone } = req.body;
  contact.name = name || contact.name;
  contact.email = email || contact.email;
  contact.phone = phone || contact.phone;

  res.json(contact);
};

// DELETE contact
const deleteContact = (req, res) => {
  const index = contacts.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  contacts.splice(index, 1);
  res.json({ message: 'Contact deleted' });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
