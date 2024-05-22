import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid size-max">
				<Jumbo />
				<div class="container-fluid p-4">
					<div class="row row-cols-4">
						<div class="col"><Card /></div>
						<div class="col"><Card /></div>
						<div class="col"><Card /></div>
						<div class="col"><Card /></div>
					</div>
				</div>
			</div>

		</>
	);
};

export default Home;
