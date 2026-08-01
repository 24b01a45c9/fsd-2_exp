"use strict";
// governmentIds.ts
// Define a namespace to group Indian ID validation logic
var GovernmentID;
(function (GovernmentID) {
    // Private constant (cannot be accessed outside the namespace)
    const aadhaarLength = 12;
    // Exported function to validate Aadhaar
    function validateAadhaar(id) {
        // Check if all characters are digits
        const isNumeric = /^\d+$/.test(id);
        // Aadhaar must be exactly 12 digits
        return isNumeric && id.length === aadhaarLength;
    }
    GovernmentID.validateAadhaar = validateAadhaar;
    // Exported function to validate PAN
    function validatePAN(pan) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    GovernmentID.validatePAN = validatePAN;
    // Nested Namespace
    let Tax;
    (function (Tax) {
        function calculateGST(amount) {
            return amount * 0.18; // 18% GST
        }
        Tax.calculateGST = calculateGST;
    })(Tax = GovernmentID.Tax || (GovernmentID.Tax = {}));
})(GovernmentID || (GovernmentID = {}));
const myAadhaar = "123456789012";
const myPAN = "ABCDE1234F";
console.log(`Is Aadhaar Valid? ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`Is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);
const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);
console.log(`GST on ₹${billAmount} is ₹${tax}`);
