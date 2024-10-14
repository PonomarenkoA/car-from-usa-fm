import { cn } from '@/lib/utils';

export const H2 = ({
	className,
	children
}: {
	className?: string;
	children: React.ReactNode;
}) => (
	<div className={cn('text-[24px] font-bold leading-[29px]', className)}>
		{children}
	</div>
);
