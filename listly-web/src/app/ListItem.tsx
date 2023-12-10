export interface ListItemProps {
  id: number;
  content: string;
  quantity: number;
  unit: string;
  frequency: string;
  lastPurchased: Date;
}

export function ListItem(props: ListItemProps) {
  return (
      <div className="container mx-auto mt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex items-center">
          <input type="checkbox" className="ml-4"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.content}</div>
            <p className="text-gray-700 text-base">
              {props.quantity} {props.unit}
            </p>
            <p className="text-gray-700 text-base">
              Frequency: {props.frequency}
            </p>
            <p className="text-gray-700 text-base">
              Last Purchased: {props.lastPurchased.toLocaleString("en-US").split("T")[0]}
            </p>
          </div>
        </div>
      </div>
  );
}
