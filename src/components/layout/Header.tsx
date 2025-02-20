import { HeaderStyles } from '@styles/layout';

export default function Header() {
    return (
        <header className={[HeaderStyles.Header, 'layout'].join(' ')}></header>
    );
}
