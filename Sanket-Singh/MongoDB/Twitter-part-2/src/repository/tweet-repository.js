const Tweet = require('../models/tweet');

class TweetRepository {

  
    async createTweet(data){
        try {

            const tweet = await Tweet.create(data);
            return tweet;
            
          } catch (error) {
            console.log(error);
            
          }
    }

    async getTweets(id){
        try {

            const tweet = await Tweet.findById(id);
            return tweet;
            
          } catch (error) {
            console.log(error);
            
          }
    }

    async getWithComments(id){
      try {
        const tweet = await Tweet.findById(id).populate({path:'comments'}).lean(); //it is an array , so {path:'comments'} is used to populate the comments...lean() moment you add this , not a mongoose object , it is a javascript object
        return tweet;
      } catch (error) {
        console.log(error);
        
      }
    }
    
    async update(tweetId,data){
        try {

            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true}); // if you  dont write new:true , you get to access old in the console
            // By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
            return tweet;
            
          } catch (error) {
            console.log(error);
            
          }
    }
    async destroy(id){
        try {

            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
            
          } catch (error) {
            console.log(error);
            
          }
    
    }


    async getAll(offset,limit){
      try {
        const tweets = await Tweet.find().limit(limit).skip(offset);
        return tweets;
      } catch (error) {
        console.log(error);
        
      }
    }
}

module.exports = TweetRepository;