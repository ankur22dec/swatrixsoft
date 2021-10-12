const multer =  require('multer');
const path =  require('path');
const fs =  require('fs')


const destination = path.join(__dirname, './uploads');
// console.log(destination);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination)
  },
  filename: function (req, file, cb) {
  	const filename = file.originalname;
    const file_name_array = filename.split(".");
    console.log(file_name_array);
	  const file_extension = file_name_array[file_name_array.length - 1];
    const preFix = file.mimetype.substring(0, file.mimetype.indexOf("/"));
    // console.log({preFix});
    cb(null, file_name_array[0] + '_' + Date.now()+"."+file_extension);
  }
})
 
const upload = multer({ storage: storage }).single('image');

module.exports = {
    upload
}