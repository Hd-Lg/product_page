import Basket from "./Basket";
import Picture from "./Picture";
import Presentation from "./Presentation";

export default function Home() {
	return (
		<main className='flex'>
			<div className='max-w-2xl overflow-x-clip md:mx-auto lg:m-0 h-screen px-20 pt-20 '>
				<Presentation
					subtitle={"Meilleure vente"}
					title={`Nike air force 1'07 NEXT NATURE`}
					text={
						"Place au jeu. Confectionnée avec au moins 20 % de son poids en matières recyclées, elle revisite une légende de l'histoire des sneakers avec un cuir synthétique."
					}
				/>
				<Basket amount={299.99} promo={true} price_reduction={50} />
			</div>
			<Picture />
		</main>
	);
}
