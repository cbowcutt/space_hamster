const fs = require('fs');


function bundleScripts() {
	var sourceFolder = "../";
	var html = "";
	return new Promise((resolve, reject) => {
		fs.readdir(sourceFolder, (err, files) => {
			if (err)
			{
				reject(err);
			}
			files.forEach(file => {
				if (file.indexOf(".js") > -1)
				{
					html+= "<script src=\""+file+"\">\n";
				}

			})
			resolve(html);
		});
	});

}

function bundleImages() {
	var sourceFolder = "../images";
	var imgSourceFolder = "images";
	var html = "";
	
	return new Promise((resolve, reject) => {
		fs.readdir(sourceFolder, (err, files) => {
			if (err)
			{
				reject(err);
			}
			files.forEach(file => {
			html += "<img src=\"" + imgSourceFolder + "/" + file + "\" id=\"" + file + "\" style=\”display:none\”>\n"
			});
			resolve(html);
		});
	})

}
var html = "<head>\n";

bundleImages().then((imageTags) => {
	html += imageTags += "</head>\n";
	html += "<body>\n";
	bundleScripts().then((scriptTags) => {
		html += scriptTags += "</body>\n";
		console.log(html);
	});

});;
