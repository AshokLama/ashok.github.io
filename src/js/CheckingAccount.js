"use strict";

class CheckingAccount extends Account {
    /**
     * @param {number} overdraftLimit the overdraftLimit for this account
     * @param {number} number the number for this account
     */
    constructor(overdraftLimit, number) {
        super(number); // the account number
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * @returns {number} the account overdraft limit
     */
    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    /**
     * @param {number} overdraftLimit overdrafit limit for this account
     * @returns {undefined}
     */
    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to take money out of the account
     *
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }


    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraftLimit}`;
        }
        return "";
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._overdraftLimit;
    }
}