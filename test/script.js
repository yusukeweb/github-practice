
const Parent = (a, b) => {
    document.writeln(String(a + b));
}

Parent(1,1);
Parent(1,1);
Parent(1,1);
Parent(2,3);
Parent(2,3);
Parent(2,3);

document.writeln('<hr>');

let total = 0;

const Sum = (value) => {
    total += value;
    return total;
}

document.writeln(Sum(1));
document.writeln(Sum(1));
document.writeln(Sum(1));
document.writeln(Sum(1));
document.writeln(Sum(1));
