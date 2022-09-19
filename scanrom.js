import { readdirSync, writeFileSync } from "fs";
import path from "path";
var remotePath = "/roms";
var fileArr = [];
var files = readdirSync(filePath);
var count = files.length;
console.log(files)

writeFile(files);

function writeFile(fileArr){
	var data = [];
	for(var i=0;i<fileArr.length;i++){
		var f = fileArr[i].split('.');
	}
    var data = data.join(",\n");
    writeFileSync("../../"+"filelist.txt",data+'\r\n',function(err){
        if(err) throw err;
        console.log("Successfully gathered all roms.");
    });
}