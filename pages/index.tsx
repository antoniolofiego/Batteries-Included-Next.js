import Head from 'next/head';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Create Batteries Included Next App</title>
				<meta name='description' content='Generated with the Batteries Included Next App template' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
					<h1 className='text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold'>
						Batteries Included Next.js
					</h1>
					<h2 className='max-w-md mx-auto text-2xl'>
						A Next.js Boilerplate with TypeScript, Tailwind CSS and testing
						suite enabled
					</h2>
				</div>
			</main>
		</>
	);
};

export default Home;
