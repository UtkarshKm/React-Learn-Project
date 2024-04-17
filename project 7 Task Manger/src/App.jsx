import {useState, useEffect} from "react";
import "./context";
import TodoItem from "./components/Todoitem";
import "./App.css";
import {TodoProvider} from "./context/ToContext";
import TodoForm from "./components/Todoform";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		//  1. setTodos([...Todos, todo])} //adding previous todos and new todo
		// 2.  setTodos([...Todos, {id: Date.now(), todo, completed: false}])} //adding previous todos and new todo

		setTodos([...todos, {id: Date.now(), ...todo}]);
	}; //adding previous todos and new tod

	const updateTodo = (id, todo) => {
		setTodos(todos.map((t) => (t.id === id ? {...t, todo} : t)));
	};
	const deleteTodo = (id) => {
		setTodos(todos.filter((t) => t.id !== id));
	};
	const toggleComplete = (id) => {
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? {...prevTodo, completed: !prevTodo.completed}
					: prevTodo
			)
		);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						{/* Todo form goes here */}
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{/*Loop and Add TodoItem here */}
						{todos.map((todo)=>(
						<div key={todo.id} className="w-full">
							<TodoItem todo={todo} />
						</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
