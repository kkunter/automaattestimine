// ES6 Syntax

let add = (x,y) => {
    console.log (x + y);
}

add(2,3);
add('2', '3');
add(10, 100);


let expect = () => {

    // EXPECT.js library
let e = expect(add(2,3)).toBe(5);
expect(add(2, 'test')).toThrow();
expect(add(0.1, 0.2)).toBe(0.3);
expect(add(0.1, 0.2)).not.toBe(0.1);
}


it("should consider this spec", function() {
    expect(true).toBe(true);
    expect(false).not.toBe(false);
  });



