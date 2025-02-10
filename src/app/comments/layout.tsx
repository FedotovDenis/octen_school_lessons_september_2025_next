export default function CommentsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Comments Section</h1>
            {children}
        </div>
    );
}
