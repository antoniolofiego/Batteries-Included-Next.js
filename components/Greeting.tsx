type greetingsProps = {
	name: string;
};

const Greeting: React.FC<greetingsProps> = (props) => {
	return (
		<div>
			<div className='text-2xl'>Hello, {props.name}</div>
		</div>
	);
};

export default Greeting;
