const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {

	//Diretório que será armazenado o arquivo caso não seja passado no diskStorage
	dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

	storage: multer.diskStorage({
		
		//Local onde será armazenado o arquivo
		destination: (req, res, cb) => {
			cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
		},
		filename: (req, file, cb) => {
			crypto.randomBytes(16, (err, hash) => {

				//Retorna caso ocorra erro
				if(err) cb(err);

				//Nome que será salvo o arquivo, os 16 primeiros digitos são gerados aleatoriamente
				//após o "-" é o nome original do arquivo
				const fileName = `${hash.toString('hex')}-${file.originalname}`;

				//Passa o nome do arquivo
				cb(null, fileName)
			})
		}
	}),

	//Limita o tamanho do arquivo em 2mb
	limits:{
		fileSize: 2 * 1024 * 1024
	},

	//Filtro das extensões permitidas para upload
	fileFilter: (req, file, cb) => {
		const allowedMimes = [
			'image/jpeg',
			'image/pjpeg',
			'image/png',
			'image/gif',
		];

		if(allowedMimes.includes(file.mimetype)){
			cb(null, true);
		}
		else{
			cb(new Error("Invalid file type"))
		}
	}
}