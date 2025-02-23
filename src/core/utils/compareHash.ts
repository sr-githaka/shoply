import bcrypt from 'bcryptjs';

/**
 * Verifies a string against a hash.
 * @param string - The string.
 * @param hash - The hash to verify against the string.
 * @returns A boolean indicating if they match.
 */

export default async function verifyHash(
    string: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(string, hash);
}
