import React from "react";

const Cell = ({ header = false, r, even }) =>  header ? (
		<div className="cell header">
			<span>{r.name}</span>
		</div>
	) : (
		<div className="cell data">
			<span>
				<a href={r.url} target="_blank" rel="noopener noreferrer">
					{`${r.name} ${r.tweet_volume ? "(" + r.tweet_volume + ")" : ""}`}
				</a>
			</span>
		</div>
	);

export default Cell;