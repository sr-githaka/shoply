import { ContainerTypes } from '@_types/components/layout';
import { ContainerStyles } from '@styles/layout';

export default function Container({}: ContainerTypes.Props) {
    return <div className={ContainerStyles.Container}></div>;
}
