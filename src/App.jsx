import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import { db } from "./data/db";

export default function App() {
	const [data, setData] = useState(db);
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
		if (itemExists >= 0) {
			console.log("El item ya existe en el carrito");
		} else {
			console.log("No existe... agregando al carrito");
			setCart((prevCart) => [...prevCart, item]);
		}
	}

	return (
		<>
			<Header />

			<main className="container-xl mt-5">
				<h2 className="text-center">Nuestra Colección</h2>
				<div className="row mt-5">
					{data.map((guitar) => {
						return (
							<Guitar
								key={guitar.id}
								guitar={guitar}
								setCart={setCart}
								addToCart={addToCart}
							/>
						);
					})}
				</div>
			</main>

			<Footer />
		</>
	);
}
