// main.ts
import { Passenger } from "./passenger.js";
import { TicketLogic } from "./ticketLogic.js";
const ticketSystem = new TicketLogic();
const p1 = new Passenger("Rahul", 22, "Male");
const p2 = new Passenger("Priya", 20, "Female");
ticketSystem.bookTicket(p1);
ticketSystem.bookTicket(p2);
ticketSystem.availableTickets();
