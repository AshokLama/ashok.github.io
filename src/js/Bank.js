"use strict";

class Bank {
    static nextNumber;

    constructor() {
        this._accounts = [];
    }

    /**
     * @param {number} number account number
     * @returns {length} number of accounts in bank
     */
    addAccount(number) {
        this._accounts.push(new Account(number));
        return this._accounts.length;
    }

    /**
     * @param {number} number account number
     * @param {number} overdraftLimit the account overdraft limit
     * @returns {length} number of accounts in bank
     */
    addCheckingAccount(overdraftLimit, number) {
        this._accounts.push(new CheckingAccount(overdraftLimit, number));
        return this._accounts.length;
    }

    /**
     * @param {number} number account number
     * @param {number} interest the interest for this account
     * @returns {length} number of accounts in bank
     */
    addSavingsAccount(interest, number) {
        this._accounts.push(new SavingsAccount(interest, number));
        return this._accounts.length;
    }

    closeAccount(number) {
        let accountIndex = this._accounts.findIndex((acc) => acc.getNumber() == number);
        if (accountIndex != undefined) {
            this._accounts[accountIndex] = null;
        }
    }

    accountReport() {
        return this._accounts.filter(acc => acc instanceof Account).map(acc => acc.toString()).join("\n");
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        console.log(this._accounts.map(acc => acc.endOfMonth()));
    }
}