'use client';
import { Logo } from '@components/shared';
import { useSentry } from '@core/hooks';
import { ocrA } from '@fonts/static';
import { SentryStyles } from '@styles/layout';

export default function Sentry({ children }: Layout.Sentry.Props) {
    const isAuthenticated = useSentry();
    return (
        <>
            {isAuthenticated ? (
                <>{children}</>
            ) : (
                <div className={[SentryStyles.Sentry, 'layout'].join(' ')}>
                    <Logo />
                    <p className={ocrA.className}>Shoply - Sentry</p>
                </div>
            )}
        </>
    );
}
