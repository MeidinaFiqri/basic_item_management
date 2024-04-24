'use client'

import axios from "axios";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import 'dotenv/config'

export default function page({params : {id}}){
    const nameRef = useRef();
    const priceRef = useRef();
    const router = useRouter();

    useEffect(() => {
        axios.get(process.env.API_HOST+ `/get-items/${id}`)
        .then(res => {
            nameRef.current.value = res.data[0].name;
            priceRef.current.value = res.data[0].price;
        })
    }, [])

    const submitButton = async() => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;

        if(!name || !price) return alert('Please fill all the fields')

        try {            
            await axios.put(process.env.API_HOST+`/update-item/${id}`, {
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
        <div>
            <form className="max-w-md mx-auto mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        ref={nameRef}
                        value={nameRef.current?.value}
/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Enter price"
                        ref={priceRef}
                        value={priceRef.current?.value}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" onClick={submitButton}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}