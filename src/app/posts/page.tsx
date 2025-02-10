const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function PostsPage() {
    const res = await fetch(`${apiUrl}/posts`);
    const posts = await res.json();

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map((post: { id: number; title: string }) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
