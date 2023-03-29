const mongoose = require("mongoose");
const { Schema } = mongoose;

// const profileSchema = new Schema({
//   first_name: String,
//   last_name: String,
//   location: String,
// });

// mongoose.model("profiles", profileSchema);


const ReviewSchema = new mongoose.Schema({
  movieId: Number,
  review: [String]
})

const WatchedSchema = new mongoose.Schema({
  movieId:  Number,
  movieTitle: String,
  rating: mongoose.Decimal128,
  large: String 
})

const MovieSchema = new mongoose.Schema({
  backdrop_path: String,
  genre: [String],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: mongoose.Decimal128,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: mongoose.Decimal128,
  vote_count: mongoose.Decimal128,
  media_type: { type: String, enum: ['tv', 'movie'] }
})

const VoteSchema = new mongoose.Schema({
  id: Number,
  movieId: Number,
  movie: MovieSchema
})

const NameSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  }
});

const ProfileSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true }
});



const UserSchema = new mongoose.Schema({
  name: NameSchema,
  email: {
    type: String
  },
  profile: ProfileSchema,
  password: {
    type: String,
    required: true
  },
  watched: [WatchedSchema],
  addedMovies: [MovieSchema],
  reviews: ReviewSchema,
  vote:VoteSchema
});

// module.exports = User = mongoose.model('users', UserSchema, 'users');
var User = mongoose.model('users', UserSchema);
module.exports = User;

