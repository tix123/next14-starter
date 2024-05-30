"use server";

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

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
