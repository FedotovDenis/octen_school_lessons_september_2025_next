const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function UserPage({ params }: { params: { id: string } }) {
    const res = await fetch(`${apiUrl}/users/${params.id}`);
    const user = await res.json();

    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}
