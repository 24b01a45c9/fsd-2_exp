// governmentIds.ts

// Define a namespace to group Indian ID validation logic
namespace GovernmentID {

    // Private constant (cannot be accessed outside the namespace)
    const aadhaarLength = 12;

    // Exported function to validate Aadhaar
    export function validateAadhaar(id: string): boolean {

        // Check if all characters are digits
        const isNumeric = /^\d+$/.test(id);

        // Aadhaar must be exactly 12 digits
        return isNumeric && id.length === aadhaarLength;
    }

    // Exported function to validate PAN
    export function validatePAN(pan: string): boolean {

        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        return panRegex.test(pan.toUpperCase());
    }

    // Nested Namespace
    export namespace Tax {

        export function calculateGST(amount: number): number {
            return amount * 0.18;   // 18% GST
        }

    }
}


const myAadhaar = "123456789012";
const myPAN = "ABCDE1234F";

console.log(`Is Aadhaar Valid? ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`Is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);

const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);

console.log(`GST on ₹${billAmount} is ₹${tax}`);
