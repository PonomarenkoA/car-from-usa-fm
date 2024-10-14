import Image from 'next/image';
import LogoImage from '../../public/icons/PNG-7.svg';

export const Logo = () => {
	return (
		<div className='flex items-center bg-[#142539]'>
			<Image
				src={LogoImage}
				width={120}
				height={25}
				alt=''
				className='h-[25px] w-[120px] lg:h-[45px] lg:w-[220px]'
			/>
		</div>
	);
};
