const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const RoomsController = require('../controllers/rooms.js');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:|\./g, '') + ' - ' + file.originalname
    );
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/', RoomsController.Rooms_get_all);

router.post(
  '/',
  upload.array('roomImage', 5),
  checkAuth,
  RoomsController.Rooms_create_room
);

router.get('/:roomId', RoomsController.Rooms_get_room);

router.patch('/:roomId', checkAuth, RoomsController.Rooms_update_room);

router.delete('/:roomId', checkAuth, RoomsController.Rooms_delete);

module.exports = router;
