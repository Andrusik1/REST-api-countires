import React, { useEffect, useState } from "react";

function FilterBox({ updateFilter, updateSearchBar }: any) {
	useEffect(() => {
		const a = document.querySelector("#filterBox__searchBar");
		a?.addEventListener("keyup", ({ target }) => {
			updateSearchBar(target.value);
		});
	}, []);
	return (
		<div className="filterBox">
			<input
				placeholder="Search for a country..."
				type="text"
				name="filterBox__serachBar"
				id="filterBox__searchBar"
			/>
			<select
				onChange={(option) => updateFilter(option.target.value)}
				name="filterBox__searchForRegion"
				id="filterBox__searchForRegion"
				defaultValue="All"
			>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
				<option value="All">All</option>
			</select>
		</div>
	);
}
export default FilterBox;
