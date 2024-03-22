import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  categories: [
    {
      type: String,
      enum: [
        "music",
        "sports",
        "AI",
        "Technology",
        "all",
        "politic",
        "Genral knowledge",
      ],
    },
  ],
});
