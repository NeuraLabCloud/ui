import styles from './text-input.scss?inline';
import { InputHTMLAttributes, component$, useStyles$ } from '@builder.io/qwik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = component$<InputProps>(({ ...props }) => {
	useStyles$(styles);
	return (
		//@ts-ignore
		<input
			type='text'
			{...props}
		/>
	);
});
