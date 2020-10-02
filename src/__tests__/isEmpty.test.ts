import { expect } from 'chai';
import isEmpty from '../is-empty';

describe('isEmpty', () => {
  context('when given undefined', () => {
    it('returns true', () => {
      expect(isEmpty(void 0)).to.be.true;
    });
  });
  context('when given null', () => {
    it('returns false', () => {
      expect(isEmpty(null)).to.be.false;
    });
  });
  context('when given a string', () => {
    context('when string is empty', () => {
      it('returns true', () => {
        expect(isEmpty('')).to.be.true;
      });
    });
    context('when string has length', () => {
      it('returns false', () => {
        expect(isEmpty('hello')).to.be.false;
      });
    });
  });
  context('when given an array', () => {
    context('when array is empty', () => {
      it('returns true', () => {
        expect(isEmpty([])).to.be.true;
      });
    });
    context('when array has elements', () => {
      it('returns false', () => {
        expect(isEmpty([ 1 ])).to.be.false;
      });
    });
  });
  context('when given an object', () => {
    context('when object has properties', () => {
      it('returns true', () => {
        expect(isEmpty({})).to.be.true;
      });
    });
    context('when object is empty', () => {
      it('returns false', () => {
        expect(isEmpty({ length: 0 })).to.be.false;
      });
    });
  });
});
