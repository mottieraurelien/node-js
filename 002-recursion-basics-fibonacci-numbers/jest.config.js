/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: "test-coverage",
    testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts?$"
};