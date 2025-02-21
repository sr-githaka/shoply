import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
    enforceJsonFormat,
    enforceLoginPolicy,
    enforcePostMethod,
} from '@core/middleware';

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

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

    if (pathName === '/api/public/authentication/login') {
        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

        // enforceJsonFormat
        const isJsonFormat = await enforceJsonFormat(request, jsonBody);
        if (!isJsonFormat.ok) {
            return NextResponse.json(isJsonFormat, { status: 415 });
        }

        // enforceLoginPolicy
        const isLoginPolicy = await enforceLoginPolicy(jsonBody);
        if (!isLoginPolicy.ok) {
            return NextResponse.json(isLoginPolicy, { status: 415 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/public/authentication/login'],
};
