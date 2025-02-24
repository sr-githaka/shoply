import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useSentry() {
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
                } else {
                    setIsAuthenticated(false);
                    router.push('/public/authentication/login');
                }
            } catch {
                setIsAuthenticated(false);
                router.push('/public/authentication/login');
            }
        };

        checkAuthentication();
    }, [router]);

    return isAuthenticated;
}
