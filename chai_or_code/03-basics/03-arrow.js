const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //used to refer to current context
        console.log(this);
    }

}
//revise again