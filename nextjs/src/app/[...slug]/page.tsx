export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
	const { slug } = await params;
	return (
		<main>
			<h1 className="text-6xl font-bold">
				{slug}
			</h1>
		</main>
	);
}
