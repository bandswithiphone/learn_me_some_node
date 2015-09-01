var fs = require('fs');


module.exports = function findExtension (fileDir, extension, callback){
        fs.readdir(fileDir, function(error, list){
            if (error)
              return callback(error);
            var data = [];
            for(var x=0; x<list.length;x++){
                var fileSplit = list[x].split(".");
                var file_name = fileSplit[0];
                var extn = fileSplit[1];
                if (extn == extension) {
                  data.push(file_name + '.' + extn);
                };
            };
            callback(error, data)
        });
};

// module.exports = findExtension(fileDir, extension);
