import { enforceJsonFormat, enforceRegisterPolicy } from '@core/handlers';
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

        return NextResponse.json(
            {
                ok: true,
                info: 'Login successful',
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
