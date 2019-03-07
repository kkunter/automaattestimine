describe('Address Book', function() {

    let addressBook,
        thisContact;

        beforeEach(function () {
            addressBook = new AddressBook();
            thisContact = new Contact();
        });
    it('Should be able to add a contact', function() {
         addressBook = new AddressBook();
        thisContact = new Contact();
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('Should be able to able to delete a contact', function () {
        let addressBook = new AddressBook();
        thisContact = new Contact();
    
    
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
    
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Async Address Book', function() {
    let addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('Should grab inital contacts', function(done) {
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});
