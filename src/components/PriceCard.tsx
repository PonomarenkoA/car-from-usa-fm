import { cn } from '@/lib/utils';
import { Button } from './ui/Button';
import Image from 'next/image';
import RightArrow from '../../public/icons/right-arrow.svg';

export const PriceCard = ({ className }: { className?: string }) => {
	return (
		<div className={cn('w-[300px]', className)}>
			<div
				className={cn(
					'flex items-center justify-center bg-[#0076FE] text-white',
					'h-[50px] w-[260px] rounded-[12px] lg:h-[60px] lg:w-[300px]',
					'text-[20px] font-semibold leading-[24px] lg:text-[21px] lg:leading-[26px]'
				)}
			>
				Base
			</div>
			<div className='mt-[27px]'>
				<span className='block text-center text-[48px] font-bold leading-[59px] text-[#303030]'>
					$150
				</span>
				<span className='block text-center text-[13px] font-medium leading-[16px] text-[#818181]'>
					per month
				</span>

				<ul className='mt-[35px] space-y-[25px]'>
					<li className='flex items-center gap-x-[28px]'>
						<span className='w-[180px] text-[13px] font-medium leading-[16px] text-[#818181]'>
							First Payment:
						</span>
						<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
							No
						</span>
					</li>
					<li className='flex items-center gap-x-[28px]'>
						<span className='w-[180px] text-[13px] font-medium leading-[16px] text-[#818181]'>
							Unique Design:
						</span>
						<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
							No
						</span>
					</li>
					<li className='flex items-center gap-x-[28px]'>
						<span className='w-[180px] text-[13px] font-medium leading-[16px] text-[#818181]'>
							History of Car Sales:
						</span>
						<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
							No
						</span>
					</li>
					<li className='flex items-center gap-x-[28px]'>
						<span className='w-[180px] text-[13px] font-medium leading-[16px] text-[#818181]'>
							Google Indexing:
						</span>
						<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
							Yes
						</span>
					</li>
					<li className='flex items-center gap-x-[28px]'>
						<span className='w-[180px] text-[13px] font-medium leading-[16px] text-[#818181]'>
							Lot Removal After Bidding:
						</span>
						<span className='text-[15px] font-bold leading-[18px] text-[#303030]'>
							Yes
						</span>
					</li>
				</ul>
				<Button size='md' radius='md' className='mx-auto mt-[37px]'>
					ORDER PLAN
					<Image
						src={RightArrow}
						width={9}
						height={9}
						alt=''
						className='h-[9px] w-[9px] lg:h-[11px] lg:w-[11px]'
					/>
				</Button>
			</div>
		</div>
	);
};
