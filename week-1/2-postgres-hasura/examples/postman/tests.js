pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

var schema = {
  collection: {
    type: 'array',
  },
  pagination: {
    results: 'number',
  },
};

pm.test('Schema is valid', function () {
  pm.expect(tv4.validate(pm.response, schema)).to.be.true;
});
