const express = require('express');
const router = express.Router();

const { imageUpload, videoUpload, imageSizeReducer, localFileUpload}  = require("../controllers/fileUpload");

// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videUpload);    
// router.post("/imageReducerUpload", imageReducerUpload);
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

module.exports = router;