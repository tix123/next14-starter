// TEMP DATA
const users = [
    { id: 1, username: "John" },
    { id: 2, username: "Jane" },
];

const posts = [
    { id: 1, title: "post 1", body: ".....", userId: 1 },
    { id: 2, title: "post 2", body: ".....", userId: 1 },
    { id: 3, title: "post 3", body: ".....", userId: 2 },
    { id: 4, title: "post 4", body: ".....", userId: 2 },
];

export const getPosts = async () => {
    return posts;
};

export const getPost = async (id) => {
    return posts.find((post) => post.id === Number(id));
};

export const getUser = async (id) => {
    return users.find((user) => user.id === Number(id));
};
