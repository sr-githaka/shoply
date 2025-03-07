import { ViewTypes } from '@_types/components/layout';
import { ViewStyles } from '@styles/layout';

/**
 * **View Component**
 *
 * Renders a section element that combines default view styles with additional custom styles.
 * It assigns a unique identifier to the section and displays the provided children.
 *
 * @param {ViewTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The content to be displayed within the section.
 * @property {string} props.id - The unique identifier for the section element.
 * @property {string} props.styles - Additional CSS class names to be applied.
 * @returns {ViewTypes.Return} The rendered View component.
 *
 * @example
 * <View id="main-view" styles="custom-class">
 *   <p>View Content</p>
 * </View>
 *
 * @see {@link @_types/components/layout}
 */
export default function View({
    children,
    id,
    styles,
}: ViewTypes.Props): ViewTypes.Return {
    return (
        <section
            className={[ViewStyles.View, styles].join(' ')}
            id={id}
        >
            {children}
        </section>
    );
}
