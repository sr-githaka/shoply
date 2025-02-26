import { NextResponse } from 'next/server';
import { getUsers } from '@core/handlers';

export async function GET(request: Request) {
    const allUsers = await getUsers();
    return NextResponse.json(
        {
            ok: true,
            data: {
                users: allUsers.data?.users,
            },
        } as API.Response,
        { status: 200 }
    );
}
