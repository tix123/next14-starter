"use server";

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

export const addPost = async (fromData) => {
    // const title = fromData.get("title");
    // const desc = fromData.get("desc");
    // const slug = fromData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(fromData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log("save to db");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const deletePost = async (fromData) => {
    const { id } = Object.fromEntries(fromData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("delete from db");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "something went wrong!" };
    }
};

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const register = async (formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return "Password do not match!";
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return "Username already exist";
        }

        const newUser = new User({
            username,
            email,
            password,
            img,
        });
        await newUser.save();
        console.log("save to db");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};
