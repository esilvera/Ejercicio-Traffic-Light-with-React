import React, { useState } from "react";

export function Semaforo() {
	const [color, setColor] = useState("luzroja");

	return (
		<div className="semaforo">
			<input
				onClick={() => setColor("luzrojabrillante")}
				className={color}
			/>
			<input
				onClick={() => setColor("luzamarillabrillante")}
				className={color}
			/>
			<input
				onClick={() => setColor("luzverdebrillante")}
				className={color}
			/>
		</div>
	);
}

{
	/* 			

	<input
				onClick={() => setColor("{box-shadow:0 0 20px black}")}
				className="luzroja"
				style={color}
			/>



            
            	useEffect(() => {
		            setColor("yellow");
	            }, []);


            	const brillar = evento => {
		             alert("debe brillar");
	            };

            <button onClick={evento => brillar(evento)}></button>
            
            
            
            
            */
}
