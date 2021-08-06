type greetingsProps = {
	name: string;
};

const Greeting = ({ name }: greetingsProps) => {
	return <div className='text-2xl'>Hello, {name}</div>;
};

export default Greeting;
