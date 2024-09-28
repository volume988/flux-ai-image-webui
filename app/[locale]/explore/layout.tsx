
interface ExploreLayoutProps {
  children: React.ReactNode;
}

export default async function ExploreLayout({
  children
}: ExploreLayoutProps) {
    return (
        <main className="pt-4 relative z-50">{children}</main>
    );
}
