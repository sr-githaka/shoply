import { accessPostgreSQL } from '@core/utils';

export default async function createUser(email: string, hash: string) {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'createUser',
            text: `INSERT INTO USERS (EMAIL, HASH) VALUES ($1, $2) RETURNING ID;`,
            values: [email, hash],
        };

        const response = await client.query(query);

        if (response.rowCount === 0) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'createUser',
                    },
                    info: 'Failed to create user.',
                },
            } as API.Response;
        }

        return {
            ok: true,
            info: 'User created successfully.',
        } as API.Response;
    } catch {
        return {
            ok: false,
            error: {
                origin: {
                    type: 'handlers',
                    method: 'createUser',
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
