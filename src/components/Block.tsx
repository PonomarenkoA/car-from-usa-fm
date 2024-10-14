import { cn } from '@/lib/utils';

export const Block = ({
	className,
	children
}: {
	className?: string;
	children: React.ReactNode;
}) => (
	<div
		className={cn(
			'rounded-[30px] px-[50px] py-[54px] lg:px-[70px] lg:py-[63px]',
			className
		)}
	>
		{children}
	</div>
);
