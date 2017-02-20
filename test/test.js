describe("Interface", function() {

	var x = 10;
	var y = 10;
	var width = 32;
	var height = 32;
	var rectangle = new Rectangle(x, y, width, height);
	var interface = new Interface(rectangle);

	var text = "This is interface Text. Select an option:\n" ;
	var options = {
		"option 1": new InterfaceNode("this is text for option 1");
		"option 1": new InterfaceNode("this is text for option 2.");
	};
	var root_node = new InterfaceNode(text, options);
	interface.setCurrentNode(root_node);

	describe("geometry", function() {
		it("represents a square rectangle", function() {
			expect(interface.rectangle.constructor.name)
				.toEqual("Rectangle");
		});
		it("has a positive x value", function() {
			expect(interface.rectangle.x)
				.toBegreaterThan(0);

		});

		it("has a positive y value", function() {
			expect(interface.rectangle.y)
				.toBegreaterThan(0);
		});
	});

	describe("current_node", function() {
		it("is an InterfaceNodeobject", function() {
			expect(interface.current_node.constructor.name)
				.toEqual("InterfaceNode");
		});
	});

	// describe("set_highlighted_option", function() {

	// });
});

describe("InterfaceNode", function() {
	var interfaceNode = interface.current_node
	describe("text", function() {
		it("is a string", function() {
			expect(interfaceNode.text.constructor).toEqual(String);

		});
	});

	describe("options", function() {
		it("has String objects as keys for each option", function() {
			interfaceNode.options.keys().forEach(function(id) {
				expect(id.constructor)
					.toEqual(String);
			})
		});

		it("has InterfaceNode objects as values for each key", function() {
			interfaceNode.options.keys().forEach(function(id) {
				expect(interfaceNode.options[id.constructor].constructor)
					.toEqual(InterfaceNode);
			})
		});
	});

	describe("select_option", function() {
		it("returns an InterfaceNode instance", function() {
			expect(interfaceNode.select_option("option 1").constructor)
				.toEqual(InterfaceNode);
		});
	});

	// describe("highlight_option", function() {
	// 	it("indicates which option shouldbe be highlighted", function() {

	// 	});
	// });
});