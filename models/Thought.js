const mongoose = require('mongoose');
const { Schema } = mongoose;

// Reaction Schema (subdocument)
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (v) => new Date(v).toLocaleString()
  }
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (v) => new Date(v).toLocaleString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
});

// Virtual for reaction count
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

module.exports = mongoose.model('Thought', ThoughtSchema);
