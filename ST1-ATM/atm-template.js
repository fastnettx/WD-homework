const ATM = {
    isAuth: false,
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {id: "0025", pin: "123", debet: 675, type: "user"},
        {id: "0005", pin: "412", debet: 500, type: "user"}
    ],
    logs: [],
    // authorization
    auth(id, pin) {
        for (let key in this.users) {
            if (id === this.users[key].id && pin === this.users[key].pin) {
                this.currentUser = this.users[key];
                this.logs.push("User logged in : " + this.users[key].id);
                this.isAuth = true;
                break;
            }
        }
        if (this.isAuth) {
            console.log("You are logged in as : " + this.currentUser.id);
        } else {
            console.log("User is not found!");
        }
    },
    // check current debet
    check() {
        if (this.isAuth) {
            console.log("Your balance : " + this.currentUser.debet);
        } else {
            console.log("You are not authorized");
        }
    },

    // get cash - available for user only
    getCash(amount) {
        if (typeof amount == "number") {
            if (this.isAuth) {
                if (this.currentUser.debet - amount >= 0 && amount <= this.cash) {
                    let index_user = this.users.indexOf(this.currentUser);
                    this.logs.push("Balance before withdrawal : " + this.currentUser.debet +
                        ", withdrawal amount : " + amount);
                    this.currentUser.debet -= amount;
                    this.cash -= amount;
                    this.users.splice(index_user, 1, this.currentUser);
                    console.log("You have in your account: " + this.currentUser.debet);
                } else if (amount > this.cash) {
                    console.log("The ATM ran out of money");
                } else {
                    console.log("Your balance is less than the requested amount");
                }
            } else {
                console.log("You are not authorized");
            }
        } else {
            console.log("Enter a numeric value");
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        if (typeof amount == "number") {
            if (this.isAuth) {
                let index_user = this.users.indexOf(this.currentUser);
                this.logs.push("Balance before replenishment : " + this.currentUser.debet +
                    ", replenishment amount : " + amount);
                this.currentUser.debet += amount;
                this.users.splice(index_user, 1, this.currentUser);
                console.log("You have in your account: " + this.currentUser.debet);
            } else {
                console.log("You are not authorized");
            }
        } else {
            console.log("Enter a numeric value");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if (typeof amount == "number") {
            if (this.isAuth) {
                if (this.currentUser.type === "admin") {
                    this.logs.push("It was at the ATM : " + this.cash +
                        ", replenishment amount : " + amount);
                    this.cash += amount;
                    console.log("Amount available at ATM : " + this.cash);
                } else {
                    console.log("Log in as Administrator ");
                }
            } else {
                console.log("You are not authorized");
            }
        } else {
            console.log("Enter a numeric value");
        }

    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if (this.isAuth) {
            if (this.currentUser.type === "admin") {
                this.logs.forEach(function (item) {
                    console.log(item + " ; ");
                })
            } else {
                console.log("Log in as Administrator ");
            }
        } else {
            console.log("You are not authorized");
        }
    },
    // log out
    logout() {
        if (this.isAuth) {
            this.logs.push("Logged out : " + this.currentUser.id);
            this.currentUser = {};
            this.isAuth = false;
            console.log("You are logged out");
        } else {
            console.log("You are not authorized");
        }
    }
};
