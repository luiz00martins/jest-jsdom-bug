const alterschema = require('alterschema');

describe('Test', function() {
	it('should pass', function() {
		expect(true).toEqual(true);
	});

	const schema = {
		foo: {
			type: 'string',
			required: true,
		},
	};

	it('should fail schema', async () => {
		expect(alterschema(schema, 'draft4', 'draft6')).toEqual(schema);
	});

	it('should succeed schema', async () => {
		expect(await alterschema(schema, 'draft4', 'draft6')).toEqual(schema);
	});
});

