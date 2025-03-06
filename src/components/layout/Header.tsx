import { HeaderTypes } from '@_types/components/layout';
import { HeaderStyles } from '@styles/layout';

export default function Header({}: HeaderTypes.Props) {
    return <header className={HeaderStyles.Header}></header>;
}
