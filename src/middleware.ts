import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
    enforceJsonFormat,
    enforceLoginPolicy,
    enforcePostMethod,
    enforceRegisterPolicy,
    enforceResetPolicy,
} from '@core/middleware';

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName === '/api/public/authentication/login') {
        // enforceJsonFormat
        const isJsonFormat = await enforceJsonFormat(request);
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
                        origin: { type: 'middleware', method: 'middleware.ts' },
                        info: 'Malformed JSON body.',
                    },
                } as API.Response,
                { status: 400 }
            );
        }

        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

        // enforceLoginPolicy
        const isLoginPolicy = await enforceLoginPolicy(jsonBody);
        if (!isLoginPolicy.ok) {
            return NextResponse.json(isLoginPolicy, { status: 400 });
        }
    }

    if (pathName === '/api/public/authentication/register') {
        // enforceJsonFormat
        const isJsonFormat = await enforceJsonFormat(request);
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
                        origin: { type: 'middleware', method: 'middleware.ts' },
                        info: 'Malformed JSON body.',
                    },
                } as API.Response,
                { status: 400 }
            );
        }

        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

        // enforceRegisterPolicy
        const isRegisterPolicy = await enforceRegisterPolicy(jsonBody);
        if (!isRegisterPolicy.ok) {
            return NextResponse.json(isRegisterPolicy, { status: 400 });
        }
    }

    if (pathName === '/api/public/authentication/reset') {
        // enforceJsonFormat
        const isJsonFormat = await enforceJsonFormat(request);
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
                        origin: { type: 'middleware', method: 'middleware.ts' },
                        info: 'Malformed JSON body.',
                    },
                } as API.Response,
                { status: 400 }
            );
        }

        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

        // enforceResetPolicy
        const isResetPolicy = await enforceResetPolicy(jsonBody);
        if (!isResetPolicy.ok) {
            return NextResponse.json(isResetPolicy, { status: 400 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/public/authentication/login',
        '/api/public/authentication/register',
        '/api/public/authentication/reset',
    ],
};
