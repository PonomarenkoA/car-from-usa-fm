import { cn } from '@/lib/utils';

export const H3 = ({
	className,
	children
}: {
	className?: string;
	children: React.ReactNode;
}) => (
	<div className={cn('text-[15px] font-bold leading-[18px]', className)}>
		{children}
	</div>
);
