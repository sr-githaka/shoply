import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function usePhantom() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await fetch('/api/public/authentication', {
                    method: 'GET',
                });

                const result = await response.json();
                if (result.ok) {
                    setIsAuthenticated(true);
                    router.push('/private/analytics/overview', {
                        scroll: false,
                    });
                } else {
                    setIsAuthenticated(false);
                    router.push('/public/authentication/login', {
                        scroll: false,
                    });
                }
            } catch {
                setIsAuthenticated(false);
                router.push('/public/authentication/login', { scroll: false });
            }
        };

        checkAuthentication();
    }, [router]);

    return isAuthenticated;
}
