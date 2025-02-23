import {
    enforceJsonFormat,
    enforceRegisterPolicy,
    enforceEmailPolicy,
    createUser,
} from '@core/handlers';
import { hashString } from '@core/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // enforceJsonFormat
    const isJsonFormat = enforceJsonFormat(request);
    if (!isJsonFormat.ok) {
        return NextResponse.json(isJsonFormat, { status: 415 });
    }

    let jsonBody;
    try {
        jsonBody = await request.json();
    } catch {
        return NextResponse.json(
            {
                ok: false,
                info: 'Invalid JSON',
                error: {
                    origin: {
                        type: 'api',
                        method: '/api/authentication/register',
                    },
                    info: 'Malformed JSON body.',
                },
            } as API.Response,
            { status: 400 }
        );
    }

    try {
        // enforceRegisterPolicy
        const isRegisterPolicy = await enforceRegisterPolicy(jsonBody);
        if (!isRegisterPolicy.ok) {
            return NextResponse.json(isRegisterPolicy, { status: 400 });
        }

        // enforceEmailPolicy
        const isEmailPolicy = await enforceEmailPolicy(jsonBody.email);
        if (!isEmailPolicy.ok) {
            return NextResponse.json(isEmailPolicy, { status: 400 });
        }

        // hashPassword
        const isPasswordHashed = await hashString(jsonBody.password);
        if (!isPasswordHashed.ok) {
            return NextResponse.json(isPasswordHashed, { status: 400 });
        }

        // createUser
        if (isPasswordHashed.ok && isPasswordHashed.data?.hash) {
            const hash = isPasswordHashed.data?.hash;
            const isUserCreated = await createUser(jsonBody.email, hash);

            if (!isUserCreated.ok) {
                return NextResponse.json(isUserCreated, { status: 400 });
            }
        }

        return NextResponse.json(
            {
                ok: true,
                info: 'Registration successful',
            } as API.Response,
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            {
                ok: false,
                info: 'Login failed',
                error: {
                    origin: {
                        type: 'api',
                        method: '/api/authentication/register',
                    },
                    info: 'Failed to process request',
                },
            } as API.Response,
            { status: 500 }
        );
    }
}
