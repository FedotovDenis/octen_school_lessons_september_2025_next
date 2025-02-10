export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Posts Section</h1>
            {children}
        </div>
    );
}
