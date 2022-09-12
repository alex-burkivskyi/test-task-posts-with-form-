import React from "react";
import { useState } from "react"
import { PostList } from "./components/PostList";
import { Post } from "./types/Post";
import { NewPost } from "./components/NewPost";
import { Box } from "@mui/material";

const postsFromServer = [
    {
      "userName": "User",
      "textOfPost": "Hello world!",
      "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    },
    {
        "userName": "User",
        "textOfPost":"Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },
      {
        "userName": "User",
        "textOfPost":"Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },
      {
        "userName": "User",
        "textOfPost": "Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },
      {
        "userName": "User",
        "textOfPost": "Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },
      {
        "userName": "User",
        "textOfPost": "Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },
      {
        "userName": "User",
        "textOfPost": "Hello world!",
        "avatarURL": "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      },

  ]


export const App = () => {
  const [posts, setPosts] = useState(postsFromServer);
  const addPost = (newPost: Post) => {
      setPosts((state) => ([...state, newPost]));
  };

  return (
    <>
      <Box 
        display={"flex"}
        justifyContent="space-around"
      > 
        <Box>
          <NewPost onAdd={addPost} amount={posts.length}/>
        </Box>
        <Box>
          <PostList posts={posts.reverse().slice(0, 5)} />
        </Box>
       </Box>
       <Box 
          display={"flex"}
          justifyContent="center"
          margin={5}
        >
         <PostList posts={posts} />
       </Box>
    </>
    
  )
}