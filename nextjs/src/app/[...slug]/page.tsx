export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
	const { slug } = await params;
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<h1 className="text-6xl font-bold">
				{slug}
			</h1>
		</main>
	);
}
