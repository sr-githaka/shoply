import { accessPostgreSQL } from '@core/utils';

export default async function verifySession(session_id: string) {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'verifySession/fetch id',
            text: 'SELECT * FROM SESSIONS WHERE ID = $1',
            values: [session_id],
        };

        const result = await client.query(query);

        if (result.rows.length === 0) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'verifySession',
                    },
                    info: 'Session not found.',
                },
            } as API.Response;
        }

        const user_id = result.rows[0].user_id;

        return {
            ok: true,
            data: {
                user_id: await user_id,
            },
        } as API.Response;
    } catch {
        return {
            ok: false,
            error: {
                origin: {
                    type: 'handlers',
                    method: 'verifySession',
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
