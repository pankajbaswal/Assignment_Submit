const Assignment = require('../models/Assignment');

exports.uploadAssignment = async (req, res) => {
  const { task, adminId } = req.body;
  const userId = req.user.id;
  try {
    const assignment = new Assignment({ userId, task, admin: adminId });
    await assignment.save();
    res.status(201).json({ message: 'Assignment submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting assignment' });
  }
};

exports.getAssignmentsForAdmin = async (req, res) => {
  const adminId = req.user.id;
  try {
    const assignments = await Assignment.find({ admin: adminId }).populate('userId');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching assignments' });
  }
};

exports.acceptAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignment.findByIdAndUpdate(id, { status: 'accepted' });
    res.json({ message: 'Assignment accepted' });
  } catch (err) {
    res.status(500).json({ error: 'Error accepting assignment' });
  }
};

exports.rejectAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignment.findByIdAndUpdate(id, { status: 'rejected' });
    res.json({ message: 'Assignment rejected' });
  } catch (err) {
    res.status(500).json({ error: 'Error rejecting assignment' });cl
  }
};
