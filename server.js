const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/api', assignmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
