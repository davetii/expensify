const add = (a, b) => ( a+b );
const generateGreeting = (name = 'Anonymous') => ('hello ' + name);

test('should add 2 number', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('greeting returns expected ', () => {
    expect(generateGreeting('Dave')).toBe('hello Dave');
});

test('greeting returns expected when empty ', () => {
    expect(generateGreeting()).toBe('hello Anonymous');
});



