'use client';
import { NavAsideTypes } from '@_types/components/shared';
import { NavAsideStyles } from '@styles/shared';
import { Icon } from '@components/shared';
import { useTrigger } from '@lib/hooks';

/**
 * **NavAside Component**
 *
 * Renders a navigational aside element with a toggling header that controls the display of its children.
 * The header utilizes the `useTrigger` hook to alternate between displaying a menu icon and a cancel icon.
 * When the header is clicked, the component toggles the visibility of its body content.
 *
 * @param {NavAsideTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The content to be rendered within the aside element.
 * @returns {NavAsideTypes.Return} The rendered NavAside component.
 *
 * @example
 * <NavAside>
 *   Your NavItems here
 * </NavAside>
 *
 * @see {@link @_types/components/shared}
 */
export default function NavAside({
    children,
}: NavAsideTypes.Props): NavAsideTypes.Return {
    const { trigger, pullTrigger } = useTrigger();
    return (
        <aside className={NavAsideStyles.NavAside}>
            <div
                className={NavAsideStyles.Head}
                onClick={pullTrigger}
            >
                <Icon
                    name={trigger ? 'cancel.svg' : 'menu.svg'}
                    alt='Menu icon'
                    width={24}
                    height={24}
                />
            </div>
            {trigger && <div className={NavAsideStyles.Body}>{children}</div>}
        </aside>
    );
}
