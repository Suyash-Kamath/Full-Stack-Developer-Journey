const mongoose = require('mongoose');

// Tweet Schema
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    // comments: [{
    //     content: {
    //         type: String,
    //         required: true
    //     }
    // }]
    // OR
    // comments: [
    //   // gonna store comment id and refer to collection Comment
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment',
    //   },
    // ],
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;