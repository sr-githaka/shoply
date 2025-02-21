import { NextRequest } from 'next/server';

export default function enforcePostMethod(request: NextRequest) {
    if (request.method !== 'POST') {
        return {
            ok: false,
            info: 'Invalid request method',
            error: {
                origin: { type: 'middleware', method: 'enforcePostMethod' },
                info: 'Only the POST method is allowed.',
            },
        } as API.Response;
    }

    return { ok: true };
}
