import { cn } from '@/lib/utils';
import { H1 } from './ui/H1';
import { Text } from './ui/Text';
import { Button } from './ui/Button';
import RightArrow from '../../public/icons/right-arrow.svg';
import Image from 'next/image';

export const Hero = () => {
	return (
		<div
			className={cn(
				'bg-left-[35px] relative -z-10 h-[740px] w-full lg:h-[830px]',
				'bg-fill bg-cover bg-no-repeat',
				'bg-[url(/homepage-seen-on-mobile-screen.png)] md:bg-[url(/homepage-seen-on-laptop-screen.png)]',
				'after:absolute after:inset-0 after:z-10 after:bg-[#142539] after:opacity-75'
			)}
		>
			<div className='relative z-20 ml-[40px] mt-[180px] text-[#FFFFFF] lg:ml-[140px] lg:mt-[228px]'>
				<H1 className='w-[300px] lg:w-[618px]'>
					Ready Catalog of Cars for Your Website
				</H1>
				<Text as='p' className='mt-[24px] uppercase lg:mt-[24px]'>
					from Auto Auctions Copart and IAAI
				</Text>
			</div>
			<Button
				size='md'
				className='relative z-20 ml-[40px] mt-[46px] lg:ml-[140px]'
			>
				DEMO VERSION
				<Image
					src={RightArrow}
					width={9}
					height={9}
					alt=''
					className='h-[9px] w-[9px] lg:h-[11px] lg:w-[11px]'
				/>
			</Button>
		</div>
	);
};
