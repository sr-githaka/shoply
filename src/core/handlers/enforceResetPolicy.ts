export default async function enforceResetPolicy(jsonBody: any) {
    // Store the parsed JSON in a variable
    const resetCredentials: Core.Middleware.ResetCredentials = await jsonBody;

    // enforceResetCredentialsPolicy
    const enforceResetCredentialsPolicy = (
        resetCredentials: Core.Middleware.ResetCredentials
    ) => {
        const allowedKeys = ['email'];
        const bodyKeys = Object.keys(resetCredentials);

        if (
            !bodyKeys.every((key) => allowedKeys.includes(key)) ||
            bodyKeys.length !== allowedKeys.length
        ) {
            return {
                ok: false,
                info: 'Invalid credentials structure',
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceResetPolicy',
                    },
                    info: 'Reset credentials must contain only "email".',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforceEmailPolicy
    const enforceEmailPolicy = (
        resetCredentials: Core.Middleware.ResetCredentials
    ) => {
        if (!resetCredentials.email.endsWith('@gmail.com')) {
            return {
                ok: false,
                info: 'Invalid email domain',
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceResetPolicy',
                    },
                    info: 'Only Gmail addresses are allowed.',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // Execute policies and return the first failed policy
    const policies = [enforceResetCredentialsPolicy, enforceEmailPolicy];

    for (const policy of policies) {
        const result = policy(resetCredentials);
        if (!result.ok) {
            return result;
        }
    }

    return { ok: true };
}
