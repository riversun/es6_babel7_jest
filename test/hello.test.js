import {default as Hello} from '../src/hello'

test('greeting#sayHello returns hello', () => {
    const greeting = new Hello();
    expect(greeting.sayHello()).toBe('Hi, there!');
});