import { Block } from '@/components/Block';
import { PriceCard } from '@/components/PriceCard';
import { H2 } from '@/components/ui/H2';
import { cn } from '@/lib/utils';

export const ServicePrices = () => {
	return (
		<Block
			className={cn(
				'mx-[20px] mt-[54px] bg-[#F9F9F9] px-[20px] lg:mx-[70px] lg:mt-[63px]',
				'w-[340px] lg:w-auto'
			)}
		>
			<H2 className='text-center uppercase text-[#303030]'>
				Service Prices
			</H2>

			<div className='/*lg:gap-x-[70px]*/ mt-[35px] flex gap-x-[20px] overflow-x-hidden px-[20px] lg:justify-between'>
				<PriceCard />
				<PriceCard />
				<PriceCard />
			</div>

			<div className='mt-[60px] flex justify-center gap-x-[27px] lg:hidden'>
				<div className='h-[3px] w-[20px] rounded-[2px] bg-[#0076FE]'></div>
				<div className='h-[3px] w-[20px] rounded-[2px] bg-[#D9D9D9]'></div>
				<div className='h-[3px] w-[20px] rounded-[2px] bg-[#D9D9D9]'></div>
			</div>
		</Block>
	);
};
