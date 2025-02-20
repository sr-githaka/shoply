import { ViewStyles } from '@styles/layout';

export default function View({ children, id }: Layout.View.Props) {
    return (
        <section className={ViewStyles.View} id={id}>
            {children}
        </section>
    );
}
