import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Post } from "../types/Post";

type Props = {
    onAdd: (post: Post) => void,
    amount: number
};

export const NewPost: React.FC<Props> = ({ onAdd, amount }) => {
  const [count, setCount] = useState(0);
  const [newUserName, setNewUserName] = useState('');
  const [newTextOfPost, setNewTextOfPost] = useState('');
  const [newAvatarURL, setNewAvatarURL] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [textOfPostError, setTextOfPostError] = useState(false);
  const [avatarURLError, setAvatarURLError] = useState(false);

  const newPost = {
      userName: newUserName,
      textOfPost: newTextOfPost,
      avatarURL: newAvatarURL,
  };

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setUserNameError(false);
    setTextOfPostError(false);
    setAvatarURLError(false);

    if (newUserName === '') {
      setUserNameError(true);
    }

    if (newTextOfPost === '') {
      setTextOfPostError(true);
    }

    if (newAvatarURL === '') {
      setAvatarURLError(true);
    } 

    if (newUserName && newTextOfPost && newAvatarURL) {
      onAdd(newPost);
      setCount(state => state + 1);
      setNewUserName('');
      setNewTextOfPost('');
      setNewAvatarURL('');
    }    
  }

  return (
    <Container>
      <form
        noValidate
        autoComplete="off"
        key={count}
        onSubmit={onSubmit}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={2}
          width={500}
        >
        <Typography
          variant="h6"
          color="textSeconfary"
          gutterBottom
          align={"center"}
        >
          Create a New Post
        </Typography>

        <TextField
          name="userName"
          label="Enter User name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
          error={userNameError}
        />

        <TextField
          name="avatarUrl"
          label="Enter avatar URL"
          value={newAvatarURL}
          onChange={(e) => setNewAvatarURL(e.target.value)}
          required
          error={avatarURLError}
        />      

        <TextField
          name="textOfPost"
          label="Text of post"
          value={newTextOfPost}
          onChange={(e) => setNewTextOfPost(e.target.value)}
          required
          multiline
          rows={3}
          error={textOfPostError}
        />

       
      
        <Button
          type="submit"
          color="inherit"
          variant="contained"
        >
          Add
        </Button>
        </Box>

        <Typography
          variant="subtitle1"
          color="textSeconfary"
          gutterBottom
          align={"right"}
        >
           Ads: {amount}
        </Typography>
        
      </form>
    </Container>
    
  );
}