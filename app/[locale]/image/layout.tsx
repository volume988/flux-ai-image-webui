
interface ImageDetailsLayoutProps {
  children: React.ReactNode;
}

export default async function ImageDetailsLayout({
  children
}: ImageDetailsLayoutProps) {
    return (
        <main className="pt-4 relative z-50">{children}</main>
    );
}
