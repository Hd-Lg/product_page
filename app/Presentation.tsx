import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import CardSize from "./CardSize";

type Props = {
	subtitle: string;
	title: string;
	text: string;
};

const Presentation = ({ subtitle, title, text }: Props) => {
	return (
		<div>
			<div>
				{/* Title */}
				<h3 className='text-sm text-red-500 font-bold'>{subtitle}</h3>
				<h2 className='text-4xl font-extrabold tracking-wide leading-9 uppercase w-[450px] h-fit mb-10 flex-wrap'>
					{title}
				</h2>
			</div>
			<div className='flex justify-end mb-2'>
				<button type='button' className='w-16 h-10 border'>
					<ArrowLeftIcon className='text-indigo-900 w-10 h-10 mx-auto' />
				</button>
				<button type='button' className='w-16 h-10 border'>
					<ArrowRightIcon className='text-indigo-900 w-10 h-10 mx-auto' />
				</button>
			</div>
			<div className='flex space-x-4 w-fit h-fit '>
				{/* Size selection */}
				<CardSize size={38} quantity={6} />
				<CardSize size={39} quantity={3} />
				<CardSize size={40} quantity={0} />
				<CardSize size={41} quantity={3} />
				<CardSize size={42} quantity={3} />
				<CardSize size={43} quantity={3} />
				<CardSize size={44} quantity={5} />
			</div>
			<div className='mt-10'>
				{/* Some text presenting choose */}
				<p className='text-gray-400 w-[500px] h-[75px] flex-wrap'>{text}</p>
			</div>
		</div>
	);
};

export default Presentation;
