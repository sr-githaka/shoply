import { accessPostgreSQL } from '@core/utils';

export default async function enforceEmailPolicy(email: string) {
    let client;

    try {
        client = await accessPostgreSQL.connect();

        const query = {
            name: 'check-user-email',
            text: 'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1) AS email_exists',
            values: [email],
        };

        const response = await client.query(query);

        if (response.rows[0]?.email_exists) {
            return {
                ok: false,
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceEmailPolicy',
                    },
                    info: 'Email already exists in the system.',
                },
            } as API.Response;
        }

        return {
            ok: true,
            info: 'Email policy enforced successfully.',
        } as API.Response;
    } catch {
        return {
            ok: false,
            info: 'Failed to enforce email policy.',
            error: {
                origin: {
                    type: 'handlers',
                    method: 'enforceEmailPolicy',
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
