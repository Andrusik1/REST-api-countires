import { useEffect, useState } from "react";
import React from "react";
import CountriesList from "./CountriesList";
function App() {
	const [countryData, setCountryData] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setCountryData(data));
	}, []);
	return (
		<>
			<header>
				<h1>Where in the World?</h1>
				<div
					onClick={() => {
						const actualTheme =
							document.documentElement.getAttribute("data-theme");
						actualTheme == "dark"
							? document.documentElement.setAttribute("data-theme", "light")
							: document.documentElement.setAttribute("data-theme", "dark");
					}}
					className="ThemeSwitch"
				>
					<img src="https://cdn-icons-png.flaticon.com/512/5453/5453924.png"></img>
					Switch Theme
				</div>
			</header>
			<CountriesList data={countryData} />
		</>
	);
}

export default App;
