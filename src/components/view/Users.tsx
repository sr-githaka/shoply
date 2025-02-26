'use client';

import { View } from '@components/layout';
import { UsersStyles } from '@styles/view';
import { AgGrid } from '@components/shared';

export default function Users() {
    return (
        <View id='users' styles={UsersStyles.Users}>
            <AgGrid />
        </View>
    );
}
