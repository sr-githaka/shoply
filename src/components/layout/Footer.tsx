import { FooterTypes } from '@_types/components/layout';
import { FooterStyles } from '@styles/layout';

export default function Footer({}: FooterTypes.Props) {
    return (
        <footer className={FooterStyles.Footer}>
            <p>&copy; 2025, Shoply. All rights reserved.</p>
        </footer>
    );
}
