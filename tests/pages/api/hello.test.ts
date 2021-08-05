import { createMocks } from 'node-mocks-http';
import handler from '@pages/api/hello';

describe('/api/hello', () => {
	test('returns a message with the specified name', async () => {
		const { req, res } = createMocks({
			method: 'GET',
		});

		await handler(req, res);

		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData())).toEqual(
			expect.objectContaining({
				name: 'John Doe',
			})
		);
	});
});
