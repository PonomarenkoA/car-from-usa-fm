import { Block } from '@/components/Block';
import { Card } from '@/components/Card';
import { H2 } from '@/components/ui/H2';

import Resume from '../../../../public/icons/resume.svg';
import WebDesign from '../../../../public/icons/web-design.svg';
import Application from '../../../../public/icons/application.svg';

export const HowItWorks = () => {
	return (
		<Block className='mx-[20px] -mt-[154px] bg-[#0076FE] lg:mx-[70px] lg:-mt-[195px]'>
			<H2 className='text-center uppercase text-white'>HOW IT WORKS</H2>
			<div className='mt-[44px] flex flex-col gap-y-[44px] lg:flex-row lg:justify-between lg:gap-x-[115px]'>
				<Card
					color='secondary'
					icon={Resume}
					title='Submit an Application →'
					text='We will contact you and tell you all the details, as well as answer all your questions.'
				/>
				<Card
					color='secondary'
					icon={WebDesign}
					title='Design Adaptation'
					text='We adjusts the color of the catalog to your website design, or makes a unique design for you.'
				/>
				<Card
					color='secondary'
					icon={Application}
					title='Catalog Integration'
					text='The catalog appears on the subdomain of your site and can accept applications customers.'
				/>
			</div>
		</Block>
	);
};
