import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { enforceJsonFormat, enforcePostMethod } from '@core/middleware';

export function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    if (pathName === '/api/public/authentication/login') {
        // enforcePostMethod
        const isPostMethod = enforcePostMethod(request);
        if (!isPostMethod.ok) {
            return NextResponse.json(isPostMethod, { status: 405 });
        }

        // enforceJsonFormat
        const isJsonFormat = enforceJsonFormat(request);
        if (!isJsonFormat.ok) {
            return NextResponse.json(isJsonFormat, { status: 415 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/public/authentication/login'],
};
