"use client"
export function AddListItem() {
    function postItem() {
        
    }
    return (
        <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={postItem}
        >
            Add
        </button>);
}