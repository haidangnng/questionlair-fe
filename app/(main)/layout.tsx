// import Navbar from "@/components/common/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full flex flex-col justify-start items-center">
      <div className="container">{children}</div>
    </div>
  );
}
