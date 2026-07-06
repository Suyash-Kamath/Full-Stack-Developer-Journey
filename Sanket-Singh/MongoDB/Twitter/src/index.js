const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connect = require('./config/database');

const Tweet = require('./models/tweet');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

// Listen on port 3000
app.listen(3000, async () => {
  console.log(`Server is running on port 3000`);

  await connect();

  console.log('Connected to database');

  // const tweet = await Tweet.create({
  //     content:'This is my fourth tweet',
  //     // userEmail:"suyash@gmail.com"
  // })

  // const tweet = await Tweet.find({userEmail:"suyash@gmail.com"});

  // const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.update('679a14f4a75125719fdbde17',{content:'This is my updated tweet Bhai,samjhe kya '}); // return old docs but updates it 
  // const tweet = await  tweetRepo.createTweet({content:'my tweet'});
  // console.log( tweet);
  // tweet.comments.push({content:'This is my first comment'});
  // await tweet.save();
  // console.log( tweet);

  const tweetRepo = new TweetRepository();

  // Create a new tweet
  // const tweet = await tweetRepo.createTweet({
  //   content: 'Tweet with comment schema',
  // });

  // // Create a new comment
  // const comment = await Comment.create({
  //   content: 'This is my first comment so say Hello to me,  please I hope every thing works alright',
  // });

  // // Push the comment into the tweet's comments array
  // tweet.comments.push(comment);

  // // Save the tweet
  // await tweet.save();

  const tweet = await tweetRepo.getWithComments('679b70da94fe666c26f76712');

  console.log(tweet);
});