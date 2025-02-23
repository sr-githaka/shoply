import bcrypt from 'bcryptjs';

/**
 * Hashes a given string using bcryptjs.
 * @param string - The string to hash.
 * @returns A hashed string.
 */

export default async function hashString(
    string: string
): Promise<API.Response> {
    const saltRounds = 10;

    let hash;
    try {
        hash = bcrypt.hash(string, saltRounds);

        return {
            ok: true,
            info: 'String hashed successfully.',
            data: {
                hash: await hash,
            },
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
    }
}
