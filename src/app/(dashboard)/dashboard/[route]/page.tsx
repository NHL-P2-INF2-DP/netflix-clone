import RoutePage from './route-page';

export default async function page({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route } = await params;

  return (
    <div>
      <RoutePage route={route} />
    </div>
  );
}
