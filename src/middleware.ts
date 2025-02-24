import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
    enforceJsonFormat,
    enforceLoginPolicy,
    enforcePostMethod,
    enforceRegisterPolicy,
    enforceResetPolicy,
} from '@core/middleware';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName === '/api/public/authentication/login') {
        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

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

        // enforceLoginPolicy
        const isLoginPolicy = await enforceLoginPolicy(jsonBody);
        if (!isLoginPolicy.ok) {
            return NextResponse.json(isLoginPolicy, { status: 400 });
        }
    }

    if (pathName === '/api/public/authentication/register') {
        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

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

        // enforceRegisterPolicy
        const isRegisterPolicy = await enforceRegisterPolicy(jsonBody);
        if (!isRegisterPolicy.ok) {
            return NextResponse.json(isRegisterPolicy, { status: 400 });
        }
    }

    if (pathName === '/api/public/authentication/reset') {
        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

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

        // enforceResetPolicy
        const isResetPolicy = await enforceResetPolicy(jsonBody);
        if (!isResetPolicy.ok) {
            return NextResponse.json(isResetPolicy, { status: 400 });
        }
    }

    if (pathName.startsWith('/private')) {
        const session_id = request.cookies.get('session_id');
        if (typeof session_id === 'undefined') {
            const cookieStore = await cookies();
            cookieStore.delete('user_id');
            return NextResponse.redirect(
                'http://localhost:3000/public/authentication/login'
            );
        }
    }

    if (pathName.startsWith('/public')) {
        const cookieStore = await cookies();
        cookieStore.delete('user_id');
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/public/authentication/login',
        '/api/public/authentication/register',
        '/api/public/authentication/reset',
        '/private/:path*',
        '/public/:path*',
    ],
};
