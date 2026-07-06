const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 8000;
// const upload = multer({ dest: 'uploads/' }); // frntend se uplaoded file uploads folder me jayega

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })


  const upload = multer({ storage: storage });
  
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('homepage');
})

app.post('/upload',upload.single('profileImage') ,(req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});