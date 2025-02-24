import { cookies } from 'next/headers';
import {
    enforceJsonFormat,
    enforceLoginPolicy,
    verifyUser,
    createSession,
} from '@core/handlers';
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
                        method: '/api/authentication/login',
                    },
                    info: 'Malformed JSON body.',
                },
            } as API.Response,
            { status: 400 }
        );
    }

    try {
        // enforceLoginPolicy
        const isLoginPolicy = await enforceLoginPolicy(jsonBody);
        if (!isLoginPolicy.ok) {
            return NextResponse.json(isLoginPolicy, { status: 400 });
        }

        // verifyUser
        let user_id;

        const isUserVerified = await verifyUser(
            jsonBody.email,
            jsonBody.password
        );
        if (!isUserVerified.ok) {
            return NextResponse.json(isUserVerified, { status: 400 });
        } else if (isUserVerified.ok && isUserVerified.data?.user_id) {
            user_id = isUserVerified.data?.user_id;
        }

        // createSession
        let session_id;

        if (typeof user_id !== 'undefined') {
            const isSessionCreated = await createSession(user_id);

            if (!isSessionCreated.ok) {
                return NextResponse.json(isSessionCreated, { status: 400 });
            }

            if (isSessionCreated.ok && isSessionCreated.data?.session_id) {
                session_id = isSessionCreated.data.session_id;
                const cookieStore = await cookies();
                cookieStore.set({
                    name: 'session_id',
                    value: session_id,
                    httpOnly: true,
                    path: '/',
                });
            }
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
                        method: '/api/authentication/login',
                    },
                    info: 'Failed to process request',
                },
            } as API.Response,
            { status: 500 }
        );
    }
}
