type Props = {
	size: number;
	quantity: number;
};

const CardSize = ({ size, quantity }: Props) => {
	let color: string;
	if (quantity < 5) {
		color = "bg-orange-500";
	} else {
		color = "bg-green-500";
	}

	return (
		<div
			className={`text-center relative flex flex-col justify-center bg-white border w-[125px] h-[155px] rounded-lg text-indigo-900 hover:bg-indigo-900 hover:text-white active:bg-indigo-900 active:text-white cursor-pointer hover:transition-all hover:-translate-y-5 hover:ease-out hover:duration-200 hover:-rotate-2`}
		>
			<div
				className={`${color} w-5 h-5 rounded-full -top-[7px] left-[110px] absolute border-4 p-2`}
			/>
			<h3 className='text-4xl font-extrabold '>{size}</h3>
			<p className='text-sm text-gray-400'>{quantity} restantes</p>
		</div>
	);
};

export default CardSize;
