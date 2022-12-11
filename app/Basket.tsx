"use client";
import React, { useState } from "react";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";

type Props = {
	amount: number;
	promo: boolean;
	price_reduction: number;
};

const Basket = ({ amount, promo, price_reduction }: Props) => {
	const [quantity, setQuantity] = useState(1);

	let newPrice = parseInt(
		(amount - (amount * price_reduction) / 100).toFixed(2)
	);

	let totalPrice = Math.max(
		parseInt(amount.toFixed(2)) * quantity,
		parseInt(amount.toFixed(2))
	);

	let totalPricePromo = newPrice * quantity;
	return (
		<section className='flex flex-col mt-28'>
			<div className='flex flex-row justify-between'>
				<div>
					{promo && (
						<p className='bg-red-500 rounded-lg w-fit px-2 text-xl font-extrabold text-white'>
							-{price_reduction}%
						</p>
					)}
					<div className='flex'>
						<p
							className={`text-4xl font-extrabold ${
								promo && "line-through decoration-red-500 decoration-4"
							}`}
						>
							{totalPrice}€
						</p>
						{promo && (
							<p className='text-red-500 font-extrabold text-2xl ml-4 my-auto'>
								{totalPricePromo}€
							</p>
						)}
					</div>
				</div>
				<div className='flex flex-row my-auto'>
					<button
						onClick={() => setQuantity(quantity - 1)}
						className='border-2 w-11 h-11 rounded-lg'
					>
						-
					</button>
					<p className='text-2xl font-bold mx-4 my-auto'>
						{Math.max(quantity, 1)}
					</p>

					<button
						onClick={() => setQuantity(quantity + 1)}
						className='w-11 h-11 bg-indigo-900 text-white text-xl rounded-lg'
					>
						+
					</button>
				</div>
			</div>
			<button className='flex tracking-widest bg-indigo-900 text-white p-4 rounded-lg w-full mx-auto mt-10'>
				<div className='flex mx-auto'>
					AJOUTER AU PANIER{" "}
					<ShoppingCartIcon className='w-5 h-5 ml-3 my-auto' />
				</div>
			</button>
		</section>
	);
};

export default Basket;
