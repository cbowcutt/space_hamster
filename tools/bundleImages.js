const fs = require('fs');

var sourceFolder = "../images";
var imgSourceFolder = "images";
var html = "";
fs.readdir(sourceFolder, (err, files) => {
  files.forEach(file => {
    html += "<img src=\"" + imgSourceFolder + "/" + file + "\" id=\"" + file + "\" style=\”display:none\”>\n"
  });
  console.log(html);
});