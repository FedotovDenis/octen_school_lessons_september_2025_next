const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function CommentPage({ params }: { params: { id: string } }) {
    const res = await fetch(`${apiUrl}/comments/${params.id}`);
    const comment = await res.json();

    return (
        <div>
            <h2>Comment Details</h2>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
        </div>
    );
}
