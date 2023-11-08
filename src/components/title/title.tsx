import styles from './title.scss?inline';
import { Slot, component$, useStyles$ } from '@builder.io/qwik';

interface TitleProps {
    animation?: 'underline' | 'none';
}

export const Title = component$<TitleProps>(({ animation = "none" }) => {
	useStyles$(styles);

    if(animation === 'underline') {
        return (
            <div class="title-underline">
                <Slot />
            </div>
        );
    }

	return (
        <div class="title">
            <Slot />
        </div>
	);
});
