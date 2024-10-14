import { cn } from '@/lib/utils';

type Props<C extends React.ElementType> = {
	as?: C;
	className?: string;
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType = 'span'>({
	as,
	className,
	children,
	...restProps
}: Props<C>) => {
	const Component = as || 'span';

	return (
		<Component
			className={cn(
				'text-[15px] font-semibold leading-[18px] lg:text-[20px] lg:leading-[24px]',
				className
			)}
			{...restProps}
		>
			{children}
		</Component>
	);
};
