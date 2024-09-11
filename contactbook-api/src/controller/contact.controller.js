const jsend = require('../jsend');

function createContact(req, res) {
    return res.status(201).json(jsend.success({contact: {}}));
}

function getContactByFilter(req,res) { 
    const filter = [];
    const {favorite, name} = req.query;

    if(favorite !== undefined) { 
        filter.push(`favorite=${favorite}`);
    }

    if(name) { 
        filter.push(`name=${name}`);
    }
    console.log(filter.join('&'));
    return res.status(200).json(jsend.success({contacts: []}));
}

function getContact(req,res) { 
    return res.status(200).json(jsend.success({contact: {}}));
}

function updateContact(req,res) { 
    return res.status(200).json(jsend.success({contact: {}}));
}

function deleteContact(req, res) {
    return res.json({
    message: 'Contact deleted',
    });
    }
    function deleteAllContacts(req, res) {
    return res.json({
    message: 'All contacts deleted',
    });
}

module.exports = {
    getContactByFilter,
    deleteAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};