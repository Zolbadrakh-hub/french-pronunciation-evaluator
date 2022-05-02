const asyncHandler = require("express-async-handler");
const transcription = require("../../../models/transcription");

module.exports = asyncHandler(async (req, res, next) => {
  const data = await transcription.findById(req.params.id);
  if (!data) {
    throw new NotfoundError();
  }
  req.transcription = data;
  next();
});
