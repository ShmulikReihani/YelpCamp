var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    
    {
        name: "campground 1",
        image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?dpr=1&auto=compress,format&fit=crop&w=706&h=&q=80&cs=tinysrgb&crop=",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        name: "campground 2",
        image: "https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?dpr=1&auto=compress,format&fit=crop&w=1498&h=&q=80&cs=tinysrgb&crop=",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        name: "campground 3",
        image: "https://images.unsplash.com/photo-1486082570281-d942af5c39b7?dpr=1&auto=compress,format&fit=crop&w=751&h=&q=80&cs=tinysrgb&crop=",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
];


function seedDB(){
    
    //remove all campground
    Campground.remove({}, function(err){
        console.log("campgrounds removed!!!");
        // add a few campgrounds
        data.forEach(function(seed){
          Campground.create(seed, function(err,campground){
              if(err){
                  console.log(err);
              } else{
                  console.log("campground added!!!");
                  // create a comment
                  Comment.create(
                      {
                          text: "this is a bad place to be !!!",
                          author: "Homer"
                      }, function(err, comment){
                          if(err){
                              console.log(err);
                          }else{
                              campground.comments.push(comment);
                              campground.save();
                              console.log("create new comment");
                          }
                      });
              }
          });
        });
    });
    
    
    
    // add a few comments
    
}

module.exports = seedDB;

