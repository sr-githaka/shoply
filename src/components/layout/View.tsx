import { ViewStyles } from '@styles/layout';

export default function View({ children, id, styles }: Layout.View.Props) {
    return (
        <section className={[ViewStyles.View, styles].join(' ')} id={id}>
            {children}
        </section>
    );
}
