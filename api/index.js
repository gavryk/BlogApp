import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';
import * as fs from 'fs';

const app = express();
//app includes
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/posts-images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname.replace(' ', '_'));
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(8800, () => {
  console.log('Connected');
});
