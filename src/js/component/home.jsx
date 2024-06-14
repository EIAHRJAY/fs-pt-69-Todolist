import React from "react";
import TodoApp from "./ToDoList";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<TodoApp/>
		</div>
	)
};

export default Home;
