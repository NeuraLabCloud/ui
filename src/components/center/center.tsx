import styles from './center.scss?inline';
import { Slot, component$, useStyles$ } from '@builder.io/qwik';

interface CenterProps {}

export const Center = component$<CenterProps>(() => {
	useStyles$(styles);
	return (
		<div class="center">
            <Slot />
        </div>
	);
});
