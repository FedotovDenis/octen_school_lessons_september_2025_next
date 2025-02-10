import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function CommentsPage() {
    const res = await fetch(`${apiUrl}/comments`);
    const comments = await res.json();

    return (
        <div>
            <h2>All Comments</h2>
            <ul>
                {comments.map((comment: { id: number; name: string }) => (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
