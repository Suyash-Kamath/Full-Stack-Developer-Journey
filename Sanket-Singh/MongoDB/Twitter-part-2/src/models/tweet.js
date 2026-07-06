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
// not gonna persist in mongodb , but dynamically created
tweetSchema.virtual('contentWithEmail').get(function process (){
  return this.content + '\n' +'Created by: '+ this.userEmail;
})

tweetSchema.pre('save',function(next){
  console.log('Inside a Hook');
  this.content = this.content + '....'
  next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;