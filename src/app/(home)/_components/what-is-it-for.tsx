import { Block } from '@/components/Block';
import { Card } from '@/components/Card';
import { H2 } from '@/components/ui/H2';

import Traffic from '../../../../public/icons/traffic.svg';
import Hiring from '../../../../public/icons/hiring.svg';
import SecureShield from '../../../../public/icons/secure-shield.svg';

export const WhatIsItFor = () => {
	return (
		<Block className='mx-[20px] mt-[54px] pt-0 lg:mx-[70px] lg:mt-[63px]'>
			<H2 className='text-center uppercase text-[#303030]'>
				WHAT IS IT FOR
			</H2>
			<div className='/*lg:gap-x-[115px]*/ mt-[44px] flex flex-col gap-y-[44px] lg:flex-row lg:justify-between'>
				<Card
					color='primary'
					icon={Traffic}
					title='Increasing Traffic to Your Site'
					text='The catalog will be available for the Google search engine.'
				/>
				<Card
					color='primary'
					icon={Hiring}
					title='Increase in Potential Customers'
					text='People will apply directly from the catalog.'
				/>
				<Card
					color='primary'
					icon={SecureShield}
					title='Increasing Trust in Your Company'
					text='After all, only the big ones companies have car catalogs.'
				/>
			</div>
		</Block>
	);
};
