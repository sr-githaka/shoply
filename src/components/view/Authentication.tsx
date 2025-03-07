import { AuthenticationTypes } from '@_types/components/view';
import { View } from '@components/layout';
import { AuthenticationStyles } from '@styles/view';

/**
 * **Authentication Component**
 *
 * Renders an authentication view based on the provided type, such as 'Login', 'Register', or 'Reset'.
 * The component leverages the `View` component to structure the layout, applying a unique identifier
 * derived from the authentication type and specific authentication styles.
 *
 * @param {AuthenticationTypes.Props} props - Component properties.
 * @property {'Login' | 'Register' | 'Reset'} props.type - Specifies the authentication mode to be rendered.
 * @returns {AuthenticationTypes.Return} The rendered Authentication component.
 *
 * @example
 * <Authentication type="Login" />
 *
 * @see {@link @_types/components/view}
 */
export default function Authentication({
    type,
}: AuthenticationTypes.Props): AuthenticationTypes.Return {
    return (
        <View
            id={type.toLowerCase()}
            styles={AuthenticationStyles.Authentication}
        >
            <></>
        </View>
    );
}
