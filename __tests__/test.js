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

	it('should run schema', async () => {
		expect(alterschema(schema, 'draft4', 'draft6')).toEqual(schema);
	});
});

