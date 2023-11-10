import styles from './avatar.scss?inline';
import { component$, useStyles$ } from '@builder.io/qwik';

interface AvatarProps {
	src: string;
	alt?: string;
	w?: number;
	h?: number;
	animation?: 'hover' | 'none';
}

export const Avatar = component$<AvatarProps>(
	({ src, alt, w, h, animation = 'none' }) => {
		useStyles$(styles);

		if (animation === 'none') {
			return (
				<img
					class='avatar'
					src={src}
					alt={alt}
					width={w ?? 150}
					height={h ?? 150}
				/>
			);
		}

		return (
			<img
				class='avatar-animate'
				src={src}
				alt={alt}
				width={w ?? 150}
				height={h ?? 150}
			/>
		);
	}
);
