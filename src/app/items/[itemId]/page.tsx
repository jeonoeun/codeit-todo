const TodoDetailPage = async ({
  params,
}: {
  params: Promise<{ itemId: number }>;
}) => {
  const { itemId } = await params;
  return (
    <main className="wrapper py-0">
      <div className="container-layout bg-white">{itemId}</div>
    </main>
  );
};

export default TodoDetailPage;
