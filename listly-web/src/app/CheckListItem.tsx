'use client'
import getConfig from "next/config";
import {MouseEventHandler} from "react";

export async function CheckListItem(props: { id: string, api: string }) {
    async function onCheck(event: any) {
        if(event.target.checked)
        {
            await fetch(`${props.api}/ShoppingList/CheckListItem?item=${props.id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
    }

    return (
        <input type={"checkbox"} name='checked' className={"ml-4"} onClick={e => onCheck(e)}/>
    );
}