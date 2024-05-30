import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore } from "next/cache";

// TEMP DATA
// const users = [
//     { id: 1, username: "John" },
//     { id: 2, username: "Jane" },
// ];

// const posts = [
//     { id: 1, title: "post 1", body: ".....", userId: 1 },
//     { id: 2, title: "post 2", body: ".....", userId: 1 },
//     { id: 3, title: "post 3", body: ".....", userId: 2 },
//     { id: 4, title: "post 4", body: ".....", userId: 2 },
// ];

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const getUser = async (id) => {
    unstable_noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};
