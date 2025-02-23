import { accessPostgreSQL, compareHash } from '@core/utils';

export default async function verifyUser(email: string, password: string) {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'verifyUser/fetch hash',
            text: 'SELECT HASH FROM USERS WHERE email = $1',
            values: [email],
        };

        const result = await client.query(query);

        if (result.rows.length === 0) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'verifyUser',
                    },
                    info: 'User not found.',
                },
            } as API.Response;
        }

        const hash = result.rows[0].hash;
        const isValid = await compareHash(password, hash);

        if (!isValid) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'verifyUser',
                    },
                    info: 'Invalid password.',
                },
            } as API.Response;
        }

        return {
            ok: true,
            data: {
                user_id: await result.rows[0].id,
            },
        } as API.Response;
    } catch {
        return {
            ok: false,
            error: {
                origin: {
                    type: 'handlers',
                    method: 'verifyUser',
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
