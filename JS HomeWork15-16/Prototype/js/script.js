function Human() {
  this.name = 'Vasya';
  this.age = 25;
  this.sex = 'male';
  this.height = 180;
  this.weight = 80;
};

var newHuman = new Human();

function Worker() {
  this.company = 'Google';
  this.salary = 5000;
  this.work = function() {
    alert('Work hard!');
  }
};

Worker.prototype = newHuman;
var worker1 = new Worker();
var worker2 = new Worker();

function Student() {
  this.university = 'KPI';
  this.grant = 2000;
  this.watch = function() {
    alert('Watch TV series');
  }
};

Student.prototype = newHuman;
var student1 = new Student();
var student2 = new Student();

console.log(worker1);
console.log(worker2);
console.log(student1);
console.log(student2);
