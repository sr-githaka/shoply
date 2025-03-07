import { PageTypes } from '@_types/components/layout';
import { workSans } from '@fonts/dynamic';
import { PageStyles } from '@styles/layout';

/**
 * **Page Component**
 *
 * Renders the main page layout as a `<body>` element, styled with the provided page styles and a custom font.
 * This component acts as the top-level wrapper for page content.
 *
 * @param {PageTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The content to be rendered within the page.
 * @returns {PageTypes.Return} The rendered Page component.
 *
 * @example
 * <Page>
 *   <h1>Welcome</h1>
 *   <p>This is the home page.</p>
 * </Page>
 *
 * @see {@link @_types/components/layout}
 */
export default function Page({ children }: PageTypes.Props): PageTypes.Return {
    return (
        <body className={[PageStyles.Page, workSans.className].join(' ')}>
            {children}
        </body>
    );
}
