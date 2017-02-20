var fs = require('fs');

eval(fs.readFileSync('../rectangle.js')+'');
eval(fs.readFileSync('../animatable.js')+'');
eval(fs.readFileSync('../interface.js')+'');


	describe("Interface", function() {


	var test_interface = new Interface(new Rectangle(10, 10, 32, 32));
	
	var text = "This is interface Text. Select an option:\n" ;
	var options = ['option 1', 'option 2'];
	var child_nodes = {
		'option 1': new InterfaceNode("this is text for option 1"),
		'option 2': new InterfaceNode("this is text for option 2.")
	};
	var root_node = new InterfaceNode(text, options, child_nodes);
	test_interface.setCurrentNode(root_node);

	describe("geometry", function() {
		it("represents a square rectangle", function() {
			var rectangle = test_interface.getRectangle();
			expect(rectangle.x).toEqual(10);
			expect(rectangle.y).toEqual(10);
		});
		it("has a positive x value", function() {
			expect(test_interface.getRectangle().x).toBeGreaterThan(0);

		});

		it("has a positive y value", function() {
			expect(test_interface.getRectangle().y)
				.toBeGreaterThan(0);
		});
	});

		describe("current_node", function() {
			it("is an InterfaceNodeobject", function() {
				expect(test_interface.current_node.constructor.name)
					.toEqual("InterfaceNode");
			});
	});

	// describe("set_highlighted_option", function() {

	// });


	describe("InterfaceNode", function() {
		var interfaceNode = test_interface.current_node
		describe("text", function() {
			it("is a string", function() {
				expect(interfaceNode.text.constructor).toEqual(String);

			});
		});

		describe("options", function() {
			it("has String objects as keys for each option", function() {
				interfaceNode.options.forEach(function(id) {
					expect(id.constructor)
						.toEqual(String);
				})
			});

			it("has InterfaceNode objects as values for each key", function() {
				for(var child_id in interfaceNode.children) {
					expect(interfaceNode.select_option(child_id).constructor)
						.toEqual(InterfaceNode);
				};
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
	});
