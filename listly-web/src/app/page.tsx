import {AddListItem} from "@/app/AddListItem";
import {List} from "@/app/List";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-24">
      <div className="text-6xl">Listly</div>
      <List/>
      <AddListItem/>
    </main>
  );
}
