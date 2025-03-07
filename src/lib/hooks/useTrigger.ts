import { useState } from 'react';
import { UseTriggerTypes } from '@_types/lib/hooks';

/**
 * **useTrigger Hook**
 *
 * Custom hook to manage a boolean trigger state with a toggle function.
 *
 * @returns {UseTriggerTypes.Return} Object containing:
 *   - **trigger**: The current boolean state.
 *   - **pullTrigger**: Function that toggles the trigger state.
 *
 * @example
 * const { trigger, pullTrigger } = useTrigger();
 *
 * @see {@link @_types/lib/hooks}
 */
export default function useTrigger(): UseTriggerTypes.Return {
    const [trigger, setTrigger] = useState<boolean>(false);

    /**
     * Toggles the current trigger state.
     *
     * @returns {void}
     */
    const pullTrigger = (): void => {
        setTrigger(!trigger);
    };

    return { trigger, pullTrigger };
}
