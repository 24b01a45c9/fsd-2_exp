// ticketLogic.ts
import { TICKET_PRICE, MAX_TICKETS, TRAIN_NAME } from "./constants.js";
export class TicketLogic {
    bookedTickets = 0;
    bookTicket(passenger) {
        if (this.bookedTickets >= MAX_TICKETS) {
            console.log("No tickets available.");
            return;
        }
        this.bookedTickets++;
        console.log("\n===== Ticket Booked Successfully =====");
        console.log("Train :", TRAIN_NAME);
        passenger.displayDetails();
        console.log("Ticket Price :", TICKET_PRICE);
        console.log("Ticket Number :", this.bookedTickets);
        console.log("======================================");
    }
    availableTickets() {
        console.log("Available Tickets :", MAX_TICKETS - this.bookedTickets);
    }
}
