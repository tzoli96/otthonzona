const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const path = require("path");
const fs = require("fs");

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_ID,
    secretAccessKey: process.env.S3_SECRET,
    region: 'eu-north-1',
});

const s3 = new AWS.S3();

const upload = multer({ dest: path.join(__dirname, 'uploads/') });

router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const params = {
      Bucket: 'otthonzona',
      Key: `i${Date.now()}-${file.originalname}`,
      Body: fs.readFileSync(file.path),
    };
  
    s3.upload(params, (err, data) => {
        fs.unlink(file.path, () => "");
      if (err) {
        console.error('Error uploading file to S3:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send({
            location: data.Location,
        });
      }
    });
});

module.exports = router;
