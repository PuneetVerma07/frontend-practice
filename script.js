class MakeStudents {
    constructor(fname, lname, contact, isVerified) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;
    }

    showProfile = function () {
        if (this.isVerified) {
            console.log(`${this.fname} ${this.lname}`)
        } else {
            console.log("User not verified.")
        }
    }
}

let s1 = new MakeStudents("aman","verma", 999, true)
console.log(s1)