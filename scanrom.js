var fs = require("fs");

var path = require("path");

var remotePath = "/roms";

var filePath = path.resolve('../../rom_cn');

var fileArr = [];

var files = fs.readdirSync(filePath);
    
var count = files.length;
console.log(files)
writeFile(files);
 
function writeFile(fileArr){

	var data = [];
	for(var i=0;i<fileArr.length;i++){
		var f = fileArr[i].split('.');

		data.push('["'+f[0]+'","roms/rom_cn/'+(fileArr[i])+'"]');
	}
    var data = data.join(",\n");
    fs.writeFileSync("../../"+"filelist.txt",data+'\r\n',function(err){
        if(err) throw err;
        console.log("Successfully gathered all roms.");
    });
}