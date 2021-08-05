type greetingsProps = {
	name: string;
};

const Greeting = (props: greetingsProps) => {
	return <div className='text-2xl'>Hello, {props.name}</div>;
};

export default Greeting;
