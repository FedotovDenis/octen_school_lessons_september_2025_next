export default function UsersLayout({children }: {children: React.ReactNode}) {
    return (
        <div>
            <h1>Users Section</h1>
            {children}
        </div>
    );
}