'use client'

import { useRef } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import 'dotenv/config'

export default function addItem(){
    const priceRef = useRef();
    const nameRef = useRef();
    const router = useRouter();

    const submitButton = async() => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;

        if(!name || !price) return alert('Please fill all the fields')

        try {            
            await axios.post(process.env.API_HOST+`/input-item`, {
                name,
                price
            })
            .then(res => {
                router.push('/view-items')
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
    <div className="font-mono">
        <h1 className="text-center mb-5 mt-5 text-3xl">Add Item</h1>
        <form className="w-1/2 mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={nameRef} id="name" type="text" placeholder="Name" value={nameRef.current?.value} />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={priceRef} id="price" type="number" placeholder="Price" value={priceRef.current?.value} />
            </div>
            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitButton}>
                    Add Item
                </button>
                <button className="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link href={"/"}>
        Back to Home
        </Link>
                </button>
            </div>
        </form>

    </div>
    )
}