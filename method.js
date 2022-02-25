// 1.Method
const student = {
    id: 101,
    money: 5000,
    name: 'Rabby isalm ',
    major: 'web-engineering',
    isRich: false,
    subject: ['HTML', 'CSS', 'JAVA-SCRIPT', 'MONGO-DB', 'API'],
    friend: {
        name: 'Mac',
        major: 'Technology'
    },
    takeExam: function () {
        console.log(this.name, 'Taking Exam')
    },
    treatDe: function (expence, boksis) {
        this.money = this.money - expence - boksis;
        return this.money;

    },
}
// accessing object proparty = objectName.methodName()******************* .
// student.takeExam();
const remainnig = student.treatDe(900, 70);
const remainnig1 = student.treatDe(600, 50);
console.log(remainnig1);

// mehtod is creating a function inside a object .[this is the summary of this lesson ]


