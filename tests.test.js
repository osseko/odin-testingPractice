import {describe, expect, test} from '@jest/globals';
import {sum} from "./tests.js";
import {capitalize} from "./tests.js";
import { reverseString } from './tests.js';
import { calculator } from './tests.js';
import { caesarCipher } from './tests.js';
import { analyzeArray } from './tests.js';


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('reverses string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('calculator to add', () =>{
    expect(calculator(2, 2, "add")).toBe(4);
})

test('calculator to subract', () => {
    expect(calculator(20, 15, "subtract")).toBe(5);
})

test('calculator to divide', () =>{
    expect(calculator(16, 8, "divide")).toBe(2);
})

test('calculator to multiply', () =>{
    expect(calculator(8, 8, "multiply")).toBe(64);
})

test('encrypts message', () => {
    expect(caesarCipher('Hello, World', 3)).toBe('Khoor, Zruog');
})

let object;

test('gives array averages, min, max, and length', () =>{
    expect(analyzeArray([1,8,3,4,2,6]))
        .toBe(object = {"average": 4, "min": 1, "max": 8, "length": 6})
})