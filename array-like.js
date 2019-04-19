let a = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

try {
    for (let i of a) {
        console.log(i)
    }
}
catch (e) {
    console.log(e.message)
}
finally {
    try {
        a.push('d')
    }
    catch (e) {
        console.log(e.message)
    }
}