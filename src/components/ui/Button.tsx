import { cn } from '@/lib/utils';
import { tv, VariantProps } from 'tailwind-variants';

const VariantStyles = tv({
	base: 'flex items-center justify-center px-[20px] font-bold',

	variants: {
		color: {
			primary: 'bg-primary text-primary-foreground',
			secondary: 'bg-secondary text-secondary-foreground'
		},
		size: {
			sm: cn(
				'h-[50px] w-[140px] gap-x-[10px] lg:h-[60px] lg:w-[170px]',
				'text-[11px] leading-[13px] lg:text-[13px] lg:leading-[16px]'
			),
			md: cn(
				'h-[60px] w-[180px] gap-x-[6px] lg:h-[70px] lg:w-[220px]',
				'text-[13px] leading-[16px] lg:text-[15px] lg:leading-[18px]'
			)
		},
		radius: {
			sm: 'rounded-[12px] lg:rounded-[15px]',
			md: 'rounded-[15px]'
		}
	},

	defaultVariants: {
		color: 'primary',
		size: 'sm',
		radius: 'sm'
	}
});

type Props = VariantProps<typeof VariantStyles> & {
	className?: string;
	children: React.ReactNode;
};

export const Button = ({ className, children, ...props }: Props) => {
	const styles = VariantStyles({ ...props });

	return <button className={cn(styles, className)}>{children}</button>;
};
