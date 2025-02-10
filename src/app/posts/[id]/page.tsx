const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function PostPage({ params }: { params: { id: string } }) {
    const res = await fetch(`${apiUrl}/posts/${params.id}`);
    const post = await res.json();

    return (
        <div>
            <h2>Post Details</h2>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    );
}
