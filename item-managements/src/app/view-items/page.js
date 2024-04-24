'use client'
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import 'dotenv/config'

export default function viewItems(){
    const router = useRouter();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(process.env.API_HOST+'/get-items')
        .then(res => {
            setItems(res.data)
        })
    }, [])


    const deleteItem = (id) => {
        axios.delete(process.env.API_HOST+`/delete-item/${id}`)
        .then(res => {
            console.log(res.data)
            setItems(items.filter(item => item.id !== id))
        })
    }

    return (
    <div className="font-mono">
        <h1 className="text-center mb-9 mt-5 text-3xl font-mono">View Items</h1>
    
        <table className="table-auto w-full text-center">
      <thead>
        <tr>
            <th className="px-6 py-2">
                ID
            </th>
            <th className="px-6 py-2">
                Name
            </th>
            <th className="px-6 py-2">
                Price
            </th>
            <th className="px-6 py-2">
                Action
            </th>

        </tr>
      </thead>
      <tbody>
        {items.map((row) => (
          <tr key={row.id}>
              <td key={items.id} className="border px-6 py-2">
                {row.id}
              </td>
              <td key={items.id} className="border px-6 py-2">
                {row.name}
              </td>
              <td key={items.id} className="border px-6 py-2">
                {row.price}
              </td>
              <td key={items.id} className="border px-6 py-2">
                <Link href={{pathname: `/update-item/${row.id}`}}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Edit
                    </button>
                </Link>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteItem(row.id)}>
                        Delete
                    </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
        
        <div className="text-center">
            <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-5">
            Back to Home
            </button>
            </Link>
            <Link href="/add-item">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-5">
                Add Item
            </button>
            </Link>
        </div>
    </div>
    );
}