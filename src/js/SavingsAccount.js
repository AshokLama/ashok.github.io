"use strict";

class SavingsAccount extends Account {
    /**
     * @param {number} interest the interest for this account
     * @param {number} number the number for this account
     */
    constructor(interest, number) {
        super(number); // the account number
        this._intreset = interest;
    }

    /**
     * @returns {number} the account interest
     */
    getInterest() {
        return this._intreset;
    }

    /**
     * @param {number} the intreset for this account
     * @returns {undefined}
     */
    setInterest(intreset) {
        this._intreset = intreset;
    }

    /**
     * Method to deposit the calculated interest into account
     *
     * @returns {undefined}
     */
    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100);
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }

    /**
     * @returns {string} representation of this savings account
     */
    toString() {
        return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
    }
}