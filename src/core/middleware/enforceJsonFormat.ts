import { NextRequest } from 'next/server';
import { json } from 'stream/consumers';

export default async function enforceJsonFormat(request: NextRequest) {
    const contentType = request.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
        return {
            ok: false,
            info: 'Invalid message format',
            error: {
                origin: { type: 'middleware', method: 'enforceJsonFormat' },
                info: 'Only application/json message content format is accepted.',
            },
        } as API.Response;
    }

    return { ok: true };
}
