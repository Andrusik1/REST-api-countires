import React, { useState } from "react";
import FilterBox from "./FilterBox";
function CountriesList({ data }: any) {
	const [filter, setFilter] = useState<any>("All");
	const [searchBar, updateSearchBar] = useState("");
	function formatNumber(num: number) {
		const units = ["k", "M", "B", "T"];
		let unitIndex = 0;
		while (num >= 1000 && unitIndex < units.length - 1) {
			num /= 1000;
			unitIndex++;
		}
		return num.toFixed(1).replace(/\.0$/, "") + units[unitIndex - 1];
	}
	return (
		<main>
			<FilterBox updateFilter={setFilter} updateSearchBar={updateSearchBar} />

			<div className="counteriesList">
				{data.map(({ name, population, region, capital, flags }: any) => {
					capital ? capital : (capital = "none");
					population = formatNumber(population);
					if (
						(filter == "All" || region == filter) &&
						(name.toLowerCase().includes(searchBar.toLowerCase()) ||
							capital.toLowerCase().includes(searchBar.toLowerCase()))
					) {
						return (
							<div key={name} className="countriesList__countryCard">
								<img
									className="countriesList__countryCard--img"
									src={flags.png}
									alt=""
								/>
								<div className="countriesList__countryCard--details">
									<p>{name}</p>
									<p>
										<b>Population:</b> {population}
									</p>
									<p>
										<b>Region: </b>
										{region}
									</p>
									<p>
										<b>Capital:</b> {capital}
									</p>
								</div>
							</div>
						);
					}
				})}
			</div>
		</main>
	);
}
export default CountriesList;
