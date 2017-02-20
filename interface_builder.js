function InterfaceBuilder() {
	this.Computer = function(x, y, width, height) {
		var interface = new Interface(x, y, width, height);

		var hamsternet_text = "Welcome To the hamsternet!";
		var hamsternet_options = {
			"go on hamsterpedia":
			"read HNN (Hamster News Network)"
		};
		var hamsternet_node = new InterfaceNode(hamsternet_text, hamsternet_options);

		var root_text = "You are on the computer. What would you like to do?";
		var root_options = { "Go on the hamsternet": hamsternet_node };
		var root_node = new InterfaceNode(root_text, root_options);
}