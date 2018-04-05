import assert from 'assert';
import './string';

const str = 'Alejandro',
    char = 'j',
    index = 3;

describe('String', () => {
    describe('_indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(str._indexOf('F'), -1);
        });

        it('should return -1 when the value is present but not after a given index', () => {
            assert.equal(str._indexOf(char, 5), -1);
        });

        it('should return the index when the value is present', () => {
            assert.equal(str._indexOf(char), index);
        });

        it('should return the index when the value is present after a given index', () => {
            assert.equal(str._indexOf(char, 2), index);
        });

        it('if index is a negative number, it works the same way as without an index call', () => {
            assert.equal(str._indexOf(char, -1), index);
        });

        it('if index is greather than string length should return -1', () => {
            assert.equal(str._indexOf(char, str.length), -1);
        });
    })
})