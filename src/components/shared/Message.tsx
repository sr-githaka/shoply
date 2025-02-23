import { ocrA } from '@fonts/static';
import { MessageStyles } from '@styles/shared';

export default function Message({ message }: Shared.Message.Props) {
    return (
        <div className={[MessageStyles.Message, ocrA.className].join(' ')}>
            {message}
        </div>
    );
}
