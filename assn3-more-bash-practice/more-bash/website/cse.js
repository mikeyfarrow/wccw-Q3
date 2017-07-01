document.observe("dom:loaded", function() {
	var rows = $$("table.color_alternating_rows tr");
	for (var i = 0; i < rows.length; i += 2) {
		// color every other row gray
		rows[i].addClassName("evenrow");
	}

	// place links around email addresses
	var cells = $$(".ema");
	for (var i = 0; i < cells.length; i++) {
		var addr = cells[i].textContent ? cells[i].textContent : cells[i].innerText;
		var linkText = addr;
		if (cells[i].hasClassName("showema")) {
			linkText += "@cs.washington.edu";
		}
		cells[i].update("<a href=\"mailto:" + addr + "@cs.washington.edu\">" + linkText + "</a>");
	}

	cells = $$(".building");
	for (var i = 0; i < cells.length; i++) {
		var addr = cells[i].innerHTML;
		var tokens = addr.split(/[ ]+/);
		if (tokens.length < 2) {
			continue;
		}
		var building = tokens[0];
		var roomNumber = tokens[1];
		cells[i].innerHTML = "<a href=\"http://www.washington.edu/home/maps/southcentral.html?" + building + "\">" + building + "</a> " + roomNumber;
	}
});

/*
// old functions I used before Prototype
getElementsByClassName = function(tagName, className, root) {
	var elements;
	if (!root) {
		root = document;
	}
	elements = root.getElementsByTagName(tagName);
	
	if (!(className instanceof Array)) {
		className = [className];
	}

	var result = [];
	for (var i = 0; i < elements.length; i++) {
		for (var j = 0; j < className.length; j++) {
			if (hasClass(elements[i], className[j])) {
				result.push(elements[i]);
			}
		}
	}
	return result;
};

hasClass = function(element, className) {
	if (!element) {
		return false;
	} else if (!className || className == "*") {
		return true;
	} else if (!element.className) {
		return false;
	}
	
	var classes = getClasses(element);
	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == className) {
			return true;
		}
	}
	return false;
};

getClasses = function(element) {
	return element.className.split(/\s+/);
};
*/
