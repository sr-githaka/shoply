import { accessPostgreSQL, compareHash } from '@core/utils';

export default async function getUsers() {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'getUsers',
            text: 'SELECT * FROM USERS',
        };

        const result = await client.query(query);

        return {
            ok: true,
            data: {
                users: result.rows,
            },
        } as API.Response;
    } catch {
        return {
            ok: false,
            error: {
                origin: {
                    type: 'handlers',
                    method: 'getUsers',
                },
                info: 'Failed to connect to the database.',
            },
        } as API.Response;
    } finally {
        if (client) {
            client.release();
        }
    }
}
