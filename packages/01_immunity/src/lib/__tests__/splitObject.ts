import splitObject from '../splitObject';

test('splitObject', () => {
    const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const val1 = 3;

    const result = splitObject(obj1, val1);

    expect(result.items).not.toBe(obj1);
    expect(Object.keys(result.items)).toHaveLength(3);
    expect(result.items).toEqual({ a: 1, b: 2, c: 3 });

    expect(result.remainder).not.toBe(obj1);
    expect(Object.keys(result.remainder)).toHaveLength(2);
    expect(result.remainder).toEqual({ d: 4, e: 5 });
});
