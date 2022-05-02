const asyncHandler = require("express-async-handler");
const Transcription = require("../../../models/transcription");

module.exports = asyncHandler(async (req, res) => {
  const where = { _id: { $in: JSON.parse(req.query.filter).id } };
  await Transcription.deleteMany(where);
  res.send({ data: true });
});
