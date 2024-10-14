import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { Button } from './ui/Button';
import Image from 'next/image';
import Mail from '../../public/icons/mail.svg';

export const Header = () => {
	return (
		<header className='absolute flex w-full items-center justify-between p-[20px] lg:px-[69px] lg:py-[30px]'>
			<Logo />
			<Navbar />
			<Button color='secondary'>
				<Image
					src={Mail}
					width={12}
					height={12}
					alt=''
					className='h-[12px] w-[12px] lg:h-[15px] lg:w-[15px]'
				/>
				<span>CONTACT US</span>
			</Button>
		</header>
	);
};
