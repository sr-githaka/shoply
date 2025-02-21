import { NextRequest } from 'next/server';

export default async function enforceLoginPolicy(jsonBody: any) {
    // Store the parsed JSON in a variable
    const loginCredentials: Core.Middleware.LoginCredentials = await jsonBody;

    // enforceLoginCredentialsPolicy
    const enforceLoginCredentialsPolicy = (
        loginCredentials: Core.Middleware.LoginCredentials
    ) => {
        const allowedKeys = ['email', 'password'];
        const bodyKeys = Object.keys(loginCredentials);

        if (
            !bodyKeys.every((key) => allowedKeys.includes(key)) ||
            bodyKeys.length !== allowedKeys.length
        ) {
            return {
                ok: false,
                info: 'Invalid credentials structure',
                error: {
                    origin: {
                        type: 'middleware',
                        method: 'enforceLoginPolicy',
                    },
                    info: 'Login credentials must contain only "email" and "password".',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforceEmailPolicy
    const enforceEmailPolicy = (
        loginCredentials: Core.Middleware.LoginCredentials
    ) => {
        if (!loginCredentials.email.endsWith('@gmail.com')) {
            return {
                ok: false,
                info: 'Invalid email domain',
                error: {
                    origin: {
                        type: 'middleware',
                        method: 'enforceLoginPolicy',
                    },
                    info: 'Only Gmail addresses are allowed.',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // enforcePasswordPolicy
    const enforcePasswordPolicy = (
        loginCredentials: Core.Middleware.LoginCredentials
    ) => {
        if (loginCredentials.password.length < 8) {
            return {
                ok: false,
                info: 'Invalid password',
                error: {
                    origin: {
                        type: 'middleware',
                        method: 'enforceLoginPolicy',
                    },
                    info: 'Password must be at least 8 characters long.',
                },
            } as API.Response;
        }
        return { ok: true };
    };

    // Execute policies and return the first failed policy
    const policies = [
        enforceLoginCredentialsPolicy,
        enforceEmailPolicy,
        enforcePasswordPolicy,
    ];

    for (const policy of policies) {
        const result = policy(loginCredentials);
        if (!result.ok) {
            return result;
        }
    }

    return { ok: true };
}
