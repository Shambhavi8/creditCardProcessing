var expect = require('chai').expect;
const { charge } = require('../src/charge');

describe('charge function tests', function () {
	it('should add the charge to balance if balance is less than limit', function () {
		let result = [];
		result = charge({ name: 'Tom', charge: 200 }, [{ name: 'Tom', limit: 1000, balance: 0 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 200 }]));
  });
  
  it('should add charge to balance if balance + charge will be equal limit', function () {
		let result = [];
		result = charge({ name: 'Tom', charge: 200 }, [{ name: 'Tom', limit: 1000, balance: 800 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 1000 }]));
  });

  it('should add not charge to balance if balance + charge will be greater than limit', function () {
		let result = [];
		result = charge({ name: 'Tom', charge: 200 }, [{ name: 'Tom', limit: 1000, balance: 801 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 801 }]));
  });

  it('should return balance as error if limit is less than balance', function () {
		let result = [];
		result = charge({ name: 'Tom', charge: 200 }, [{ name: 'Tom', limit: 400, balance: 801 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 400, balance: 'error' }]));
  });

  it('should not not add charge if there is no person in the records', function () {
		let result = [];
		result = charge({ name: 'Tom', charge: 200 }, [{ name: 'Sally', limit: 4000, balance: 1000 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Sally', limit: 4000, balance: 1000 }]));
  });
});
