import { cn } from '@/lib/utils';

export const H1 = ({
	className,
	children
}: {
	className?: string;
	children: React.ReactNode;
}) => (
	<h1
		className={cn(
			'text-[38px] font-bold leading-[46px] lg:text-[50px] lg:leading-[62px]',
			className
		)}
	>
		{children}
	</h1>
);
