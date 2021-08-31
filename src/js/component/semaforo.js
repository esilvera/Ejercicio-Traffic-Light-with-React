import React, { useState } from "react";

export function Semaforo() {
	const [color, setColor] = useState(""); //Todos con luz original hasta el evento click que agrega color a useState con setColor

	return (
		<div className="semaforo">
			<div
				onClick={() => setColor("luzroja")}
				className={
					"luz luzroja" + (color === "luzroja" ? " luzbrillante" : "")
				}></div>
			<div
				onClick={() => setColor("luzamarilla")}
				className={
					"luz luzamarilla" +
					(color === "luzamarilla" ? " luzbrillante" : "")
				}></div>
			<div
				onClick={() => setColor("luzverde")}
				className={
					"luz luzverde" +
					(color === "luzverde" ? " luzbrillante" : "")
				}></div>
		</div>
	);
}
