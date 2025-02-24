'use client';
import { Logo } from '@components/shared';
import { usePhantom } from '@core/hooks';
import { ocrA } from '@fonts/static';
import { PhantomStyles } from '@styles/layout';

export default function Phantom({ children }: Layout.Sentry.Props) {
    const isAuthenticated = usePhantom();
    return (
        <>
            {isAuthenticated ? (
                <div className={[PhantomStyles.Phantom, 'layout'].join(' ')}>
                    <Logo />
                    <p className={ocrA.className}>Shoply - Phantom</p>
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
}
