import { cn, SlotsToClasses } from '@/lib/utils';
import Image from 'next/image';
import { Text } from './ui/Text';
import { H3 } from './ui/H3';

import { tv, VariantProps } from 'tailwind-variants';

const VariantStyles = tv({
	slots: {
		base: 'w-[245px] lg:w-[258px]',
		icon: 'h-[56px] w-[56px]',
		title: 'mt-[28px]',
		text: 'mt-[10px] font-medium leading-[24px]'
	},
	variants: {
		color: {
			primary: {
				title: 'text-[#303030]',
				text: 'text-[#818181]'
			},
			secondary: {
				title: 'text-white',
				text: 'text-[#D2E7FF]'
			}
		}
	},

	defaultVariants: {
		color: 'primary'
	}
});

type Props = VariantProps<typeof VariantStyles> & {
	title: string;
	icon: HTMLImageElement;
	text: string;
	classNames?: SlotsToClasses<keyof ReturnType<typeof VariantStyles>>;
};

export const Card = ({ title, icon, text, classNames, ...props }: Props) => {
	const styles = VariantStyles({ ...props });

	return (
		<div className={cn(styles?.base(), classNames?.base)}>
			<Image
				src={icon}
				alt=''
				className={cn(styles?.icon(), classNames?.icon)}
			/>
			<H3 className={cn(styles?.title(), classNames?.title)}>{title}</H3>
			<Text className={cn(styles?.text(), classNames?.text)}>{text}</Text>
		</div>
	);
};
