import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

import { WhatIsItFor } from './_components/what-is-it-for';
import { HowItWorks } from './_components/how-it-works';
import { ServicePrices } from './_components/service-prices';

export default function Home() {
	return (
		<div className='grid min-h-screen grid-rows-[1fr_80px] justify-items-center'>
			<main className='relative flex w-full flex-col'>
				<Header />

				<Hero />

				<HowItWorks />

				<WhatIsItFor />

				<ServicePrices />
			</main>

			<Footer />
		</div>
	);
}
