// problem 1) filter function on String object to filter a string by removing a string
function filter(...bannedWords) {
    return this.toString().replace(new RegExp(bannedWords.join("|"), "gi"),'').replace(/\s+/g,' ').trim();
}

// problem 2) bubble sort on Array object
function bubbleSort() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};
// problem 3)
Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function() {
    return `${this.name}, ${this.age} years old.`;
};

Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}
// my code for teacher
let teacher = new Teacher();
teacher.initialize("Ashok lama", 26);
console.log(teacher.teach("WAP"));

String.prototype.filter = filter;
Array.prototype.bubbleSort = bubbleSort;



describe("Filter", function () {
    it("Using a filter to eliminate banned words",
        function () {
            assert.equal("This is banned word".filter('banned'), "This is word");
        });
});

describe("Bubble Sort", function () {
    it("Returns the bubble sorted array",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});

describe("Teach", function () {
    it("Returns the teacher name and her teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Undral", 25);
            assert.equal(teacher.teach("WAP"),  `${teacher.name} is now teaching WAP`);
        });
});

