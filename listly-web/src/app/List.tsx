import {ListItem, ListItemProps} from "@/app/ListItem";

export async function List() {
    const api = process.env["services__listly.service.api__1"];
    const data = await fetch(`${api}/ShoppingList/ListItems`);
    const result: ListItemProps[] = await data.json();
    const listContent = result.map((item) => (
        <ListItem key={item.id} {...item} />
    ));

    return (
        <div className="text-2xl">{listContent}</div>
    )
}