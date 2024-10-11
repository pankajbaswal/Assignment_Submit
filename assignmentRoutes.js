const express = require('express');
const { uploadAssignment, getAssignmentsForAdmin, acceptAssignment, rejectAssignment } = require('../controllers/assignmentController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', auth, uploadAssignment);
router.get('/assignments', auth, getAssignmentsForAdmin);
router.post('/assignments/:id/accept', auth, acceptAssignment);
router.post('/assignments/:id/reject', auth, rejectAssignment);

module.exports = router;
