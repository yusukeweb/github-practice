let global = 1;

const func = (arg) => {
    let local = 1;

    return global + local + arg;
}

document.writeln(`globalの値${global}`);

document.writeln(func(1));

document.writeln(local);
