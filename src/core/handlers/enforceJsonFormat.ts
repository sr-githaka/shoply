export default function enforceJsonFormat(request: Request) {
    const contentType = request.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
        return {
            ok: false,
            info: 'Invalid message format',
            error: {
                origin: { type: 'handlers', method: 'enforceJsonFormat' },
                info: 'Only application/json message content format is accepted.',
            },
        } as API.Response;
    }

    return { ok: true };
}
