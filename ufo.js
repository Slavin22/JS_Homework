// Find a <table> element with id="myTable":
var $tbody = document.querySelector("tbody");

function renderTable() {
	$tbody.innerHTML = "";
	for (var x = 0; x < dataSet.length; x++) {
		var sighting = dataSet[x];
		var fields = Object.keys(sighting);
		var $row = $tbody.insertRow(x);
		for (var y = 0; y < fields.length; y++) {
			var field = fields[y];
			var $cell = $row.insertCell(y);
			$cell.innerHTML = sighting[field]
		}
	}
}

renderTable()

