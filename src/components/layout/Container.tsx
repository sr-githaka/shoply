import { ContainerStyles } from '@styles/layout';

export default function Container({ children }: Layout.Container.Props) {
    return (
        <section id='container' className={ContainerStyles.Container}>
            {children}
        </section>
    );
}
