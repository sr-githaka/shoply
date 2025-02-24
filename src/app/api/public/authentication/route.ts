import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySession } from '@core/handlers';

export async function GET(request: Request) {
    const cookieStore = await cookies();
    const session_id = cookieStore.get('session_id');

    if (typeof session_id === 'undefined') {
        return NextResponse.json(
            {
                ok: false,
            } as API.Response,
            { status: 400 }
        );
    }

    // verifySession
    let user_id;

    const isSessionVerified = await verifySession(session_id.value);
    if (!isSessionVerified.ok) {
        cookieStore.delete('session_id');
        return NextResponse.json(isSessionVerified, { status: 400 });
    } else if (isSessionVerified.ok && isSessionVerified.data?.user_id) {
        user_id = isSessionVerified.data?.user_id;
        cookieStore.set({
            name: 'user_id',
            value: user_id,
            httpOnly: true,
            path: '/',
        });
    }

    return NextResponse.json(
        {
            ok: true,
        } as API.Response,
        { status: 200 }
    );
}
