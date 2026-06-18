function MakeStudents(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
}

MakeStudents.prototype.showProfile = function () {
    if (this.isVerified) {
        console.log(`${this.fname} ${this.lname}`)
    } else {
        console.log("User not found")
    }
}

let s1 = new MakeStudents("puneet", "verma", 999, true)

console.log(s1)

s1.showProfile();

