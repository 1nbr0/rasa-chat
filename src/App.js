import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (input.trim()) {
			setMessages([...messages, { text: input, user: "user" }]);
			// Simuler une réponse du bot
			setTimeout(() => {
				setMessages((prevMessages) => [
					...prevMessages,
					{ text: "Ceci est une réponse du bot.", user: "bot" },
				]);
			}, 1000);
			setInput("");
		}
	};

	return (
		<div className="app">
			<header className="header gradient-text">Tchatble</header>
			<div className="chat-container">
				<div className="messages">
					{messages.map((msg, index) => (
						<div key={index} className={`message ${msg.user}`}>
							{msg.text}
						</div>
					))}
				</div>
				<div className="input-container">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleSend()}
						placeholder="Écrivez un message..."
					/>
					<button onClick={handleSend}>Envoyer</button>
				</div>
			</div>
		</div>
	);
};

export default App;
