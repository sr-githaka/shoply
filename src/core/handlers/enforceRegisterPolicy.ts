export default async function enforceRegisterPolicy(jsonBody: any) {
    // Store the parsed JSON in a variable
    const registerCredentials: Core.Middleware.RegisterCredentials =
        await jsonBody;

    // enforceregisterCredentialsPolicy
    const enforceregisterCredentialsPolicy = (
        registerCredentials: Core.Middleware.RegisterCredentials
    ) => {
        const allowedKeys = ['email', 'password', 'confirmPassword'];
        const bodyKeys = Object.keys(registerCredentials);

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
                        method: 'enforceRegisterPolicy',
                    },
                    info: 'Register credentials must contain only "email", "password" and "confirm password".',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforceEmailPolicy
    const enforceEmailPolicy = (
        registerCredentials: Core.Middleware.RegisterCredentials
    ) => {
        if (!registerCredentials.email.endsWith('@gmail.com')) {
            return {
                ok: false,
                info: 'Invalid email domain',
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceRegisterPolicy',
                    },
                    info: 'Only Gmail addresses are allowed.',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforcePasswordPolicy
    const enforcePasswordPolicy = (
        registerCredentials: Core.Middleware.RegisterCredentials
    ) => {
        if (registerCredentials.password.length < 8) {
            return {
                ok: false,
                info: 'Invalid password',
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceRegisterPolicy',
                    },
                    info: 'Password must be at least 8 characters long.',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforcePasswordConfirmationPolicy
    const enforcePasswordConfirmationPolicy = (
        registerCredentials: Core.Middleware.RegisterCredentials
    ) => {
        if (
            registerCredentials.password !== registerCredentials.confirmPassword
        ) {
            return {
                ok: false,
                info: 'Passwords do not match.',
                error: {
                    origin: {
                        type: 'handlers',
                        method: 'enforceRegisterPolicy',
                    },
                    info: 'The provided passwords must match.',
                },
            } as API.Response;
        }

        return { ok: true };
    };

    // Execute policies and return the first failed policy
    const policies = [
        enforceregisterCredentialsPolicy,
        enforceEmailPolicy,
        enforcePasswordPolicy,
        enforcePasswordConfirmationPolicy,
    ];

    for (const policy of policies) {
        const result = policy(registerCredentials);
        if (!result.ok) {
            return result;
        }
    }

    return { ok: true };
}
