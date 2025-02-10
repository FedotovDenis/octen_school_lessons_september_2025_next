const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function UsersPage(){
    const res = await fetch(`${apiUrl}/users`);
    const users = await res.json();

    return(
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map((user: {id: number; name: string;}) => (
                    <li key={user.id}>
                        <a href={`/users/${user.id}`}>{user.name}</a>
                    </li>
             ))}
            </ul>
        </div>
    );
}