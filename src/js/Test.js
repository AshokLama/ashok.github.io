(function () {
    describe("Account", function () {
        beforeEach(() => {
            account = new Account(54321);
        });

        describe("getNumber", function () {
            it("Returns accounts number", function () {
                assert.equal(account.getNumber(), 54321);
            });
        });

        describe("getBalance", function () {
            it("Returns accounts balance", function () {
                assert.equal(account.getBalance(), 0);
            });
        });

        describe("deposit", function () {
            describe("When the given amount is more than zero", function () {
                it("Increment account balance by given amount", function () {
                    account.deposit(100)
                    assert.equal(account.getBalance(), 100);
                });
            });

            describe("When the given amount is less than zero", function () {
                it("Throws an error",
                    function () {
                        assert.throws(() => { account.deposit(-12) }, Error, "Deposit amount has to be greater than zero");
                    });
            });
        });


        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { account.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws Error with Insufficient funds", function () {
                    assert.throws(() => { account.withdraw(200) }, Error, "Insufficient funds");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    account.deposit(120);
                    account.withdraw(100);
                    assert.equal(account.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            it("Prints details of account", function () {
                assert.equal(account.endOfMonth(), '');
            });
        });

        describe("toString", function () {
            it("Prints account details", function () {
                assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
            });
        });
    });

    describe("SavingsAccount", function () {
        beforeEach(() => {
            savingsAccount = new SavingsAccount(0.09, 54321);
        });

        describe("setInterest", function () {
            it("sets account interest", function () {
                savingsAccount.setInterest(0.15);
                assert.equal(savingsAccount.getInterest(), 0.15);
            });
        });

        describe("addInterest", function () {
            it("deposits balance interest into account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.getBalance(), 100.09);
            });
        });

        describe("getInterest", function () {
            it("Returns account interest", function () {
                assert.equal(savingsAccount.getInterest(), 0.09);
            });
        });

        describe("endOfMonth", function () {
            it("Prints details of savings account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.endOfMonth(), 'Interest added SavingsAccount 54321: balance: 100.180081 interest: 0.09');
            });
        });

        describe("toString", function () {
            it("Prints savings account details", function () {
                assert.equal(savingsAccount.toString(), `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: intreset ${savingsAccount.getInterest()}`);
            });
        });
    });

    describe("CheckingAccount", function () {
        beforeEach(() => {
            checkingAccount = new CheckingAccount(1000, 54321);
        });

        describe("setOverdraftLimit", function () {
            it("sets account overdraftLimit", function () {
                checkingAccount.setOverdraftLimit(500);
                assert.equal(checkingAccount.getOverdraftLimit(), 500);
            });
        });

        describe("getOverdraftLimit", function () {
            it("Returns account overdraftLimit", function () {
                assert.equal(checkingAccount.getOverdraftLimit(), 1000);
            });
        });

        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { checkingAccount.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws Error with Over the draft limit", function () {
                    checkingAccount.deposit(100);
                    assert.throws(() => { checkingAccount.withdraw(1101) }, Error, "Over the draft limit");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(100);
                    assert.equal(checkingAccount.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            describe("When the balance is less than 0", function () {
                it("Prints warning details of checking account", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(300);
                    assert.equal(checkingAccount.endOfMonth(), 'Warning, low balance CheckingAccount 54321: balance: -180 overdraft limit: 1000');
                });
            });

            describe("When the balance is greater than 0", function () {
                it("Prints details of checking account", function () {
                    assert.equal(checkingAccount.endOfMonth(), '');
                });
            })


        });

        describe("toString", function () {
            it("Prints checking account details", function () {
                assert.equal(checkingAccount.toString(), `Checking Account ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft limit ${checkingAccount.getOverdraftLimit()}`);
            });
        });
    });

    describe("Bank", function () {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", function () {
            it("adds an account, and returns number of accounts", function () {
                bank.addAccount(12);
                assert.equal(bank.addAccount(124), 2);
            });
        });

        describe("addCheckingAccount", function () {
            it("adds a checking account, and returns number of accounts", function () {
                assert.equal(bank.addCheckingAccount(1000, 123), 1);
            });
        });

        describe("addSavingsAccount", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(0.02, 1243), 1);
            });
        });

        describe("accountReport", function () {
            it("Prints details of each existing account", function () {
                bank.addCheckingAccount(1000, 123);
                bank.addAccount(124);
                bank.addSavingsAccount(0.02, 1243);
                assert.equal(bank.accountReport(), "Checking Account 123: balance 0: overdraft limit 1000\nAccount 124: balance 0\nSavings Account 1243: balance 0: intreset 0.02");
            });
        });
    });
})();