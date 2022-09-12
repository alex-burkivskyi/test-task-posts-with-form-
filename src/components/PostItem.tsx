import React from "react";
import { Post } from "../types/Post";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface Props {
    post: Post
}

export const PostItem: React.FC<Props> = ({ post }) => (
    <ListItem 
      alignItems="flex-start"
      sx={{ width: 700, maxWidth: 1000, bgcolor: '#b2dfdb', borderRadius: 5, padding: 2, mb: 1}}
    >
        <ListItemAvatar>
          <Avatar alt={post.userName} src={post.avatarURL} />
        </ListItemAvatar>
        <ListItemText
          primary={post.userName}
          secondary={
            
           <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {post.textOfPost}
          </Typography>
          }
        />
      </ListItem>
)
