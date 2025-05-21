"use strict";
class bookshelf {
    constructor(bookName, Author) {
        this.bookName = bookName;
        this.Author = Author;
    }
    book() {
        console.log(`${this.bookName} is written by ${this.Author}`);
    }
}
class user extends bookshelf {
    constructor(bookName, Author, name, email) {
        super(bookName, Author);
        this.name = name;
        this.email = email;
    }
    validateEmail(email) {
        if (email.includes('@')) {
            console.log(`${this.name} is a Memeber of the library and can borrow  ${this.bookName}`);
        }
    }
    static guestUser() {
        console.log(`${this.name} is a guest user and can not borrow a book`);
    }
}
const half = new bookshelf("Half of a yellow sun", "chimamanda Ngozi Adichie");
const femi = new user("Atomic Habit", "James Clear", "Femi Dayo", "femidayo@gmail.com");
half.book();
femi.validateEmail(femi.email);
user.guestUser();
