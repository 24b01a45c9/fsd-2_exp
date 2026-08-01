"use strict";
class BankBranch {
    // 1. STATIC: Shared by all objects. Belongs to the Class, not the instance.
    static bankName = "HDFC Bank";
    static totalAccountsCreated = 0;
    // 2. READONLY: Can be set in the constructor but never changed after.
    accountNumber;
    accountHolder;
    constructor(name, accNo) {
        this.accountHolder = name;
        this.accountNumber = accNo; // Initial assignment is allowed
        // Accessing a static member inside the constructor
        BankBranch.totalAccountsCreated++;
    }
    // STATIC METHOD: Can be called without creating a "new" object
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
        // Note: 'this.accountHolder' would fail here because static methods
        // don't know which specific customer they are talking to.
    }
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Acc No: ${this.accountNumber}`);
    }
}
// Accessing STATIC members (Use the Class name, not the object)
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
// Creating specific account objects
const user1 = new BankBranch("Suresh", "HDFC000133");
const user2 = new BankBranch("Deepika", "HDFC000456");
// 3. Testing READONLY
console.log(user1.accountNumber); // Works: we can read it.
// user1.accountNumber = "HDFC999999"; // ERROR: Cannot assign to 'accountNumber' because it is a read-only property.
// 4. Testing STATIC persistence
console.log(`Total Accounts in System: ${BankBranch.totalAccountsCreated}`);
