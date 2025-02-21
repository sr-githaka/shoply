import { PublicStyles } from '@styles/layout';

export default function Public({ children }: Layout.Public.Props) {
    return (
        <section id='public' className={PublicStyles.Public}>
            {children}
        </section>
    );
}
