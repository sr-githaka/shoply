import { accessPostgreSQL } from '@core/utils';

export default async function createSession(user_id: string) {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'createSession',
            text: `INSERT INTO SESSIONS (USER_ID) VALUES ($1) RETURNING *;`,
            values: [user_id],
        };

        const response = await client.query(query);

        if (response.rowCount === 0) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'createSession',
                    },
                    info: 'Failed to create session.',
                },
            } as API.Response;
        }

        const session_id = response.rows[0].id;

        return {
            ok: true,
            data: {
                session_id: await session_id,
            },
        } as API.Response;
    } catch {
        return {
            ok: false,
            error: {
                origin: {
                    type: 'handlers',
                    method: 'createSession',
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
