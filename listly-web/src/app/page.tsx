export default async function Home() {
  const api = process.env["services__listly.service.api__1"];
  const data = await fetch(`${api}/ShoppingList/ListItems`);
  const result = await data.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(result)}
    </main>
  );
}
