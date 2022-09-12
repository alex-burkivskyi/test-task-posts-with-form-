import { List } from "@mui/material";
import React from "react";
import { Post } from "../types/Post";
import { PostItem } from "./PostItem";

interface Props {
    posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
    <List>
        {posts.map(post => (
            <PostItem post={post} />
        ))}
    </List>
)