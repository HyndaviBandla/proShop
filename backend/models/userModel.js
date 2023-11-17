import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
      // So that's going to be a Boolean value and the default is going to be false.So in order to make an admin, we specifically have to go into the database and change that value to true.
    },
  },
  {
    timestamps: true,
    // In Mongoose, the timestamps: true option is used when defining a schema to automatically add two fields to each document: createdAt and updatedAt. These fields are used to track when a document is created and when it was last updated
  }
);
const User = mongoose.model("User", userSchema);
export default User;
