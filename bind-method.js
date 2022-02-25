const Rabby = {
    id: 101,
    money: 5000,
    name: 'Rabby isalm ',
    treatDe: function (expence) {//this is an object method 
        this.money = this.money - expence;
        console.log(this);
        return this.money;

    },
}
const Islam = {
    id: 102,
    money: 6000,
    name: 'islam',

}
const islamTreatDe = Rabby.treatDe.bind(Islam);// here is using an object-method from object of Rabby .
islamTreatDe(393);

// you can access any object method at any other object.example is upper and that call is bind-method