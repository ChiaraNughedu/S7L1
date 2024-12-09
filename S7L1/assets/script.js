class User {
    constructor (_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

const user1 = new User("Nina", "Colombo", 54, "Napoli");
const user2 = new User("Pinta", "Colombo", 67, "Torino");
const user3 = new User("SantaMaria", "Colombo", 48, "Milano");
const user4 = new User("Cristoforo", "Colombo", 67, "Genova");

console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user3));
console.log(user3.compareAge(user4));
console.log(user2.compareAge(user4));

