const multer = require('multer')
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        // path.resolve
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // file = arquivo , cb função
        filename: (req, file, cb ) =>{
            // fieldname busca o nome do arquivo enviado
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
};