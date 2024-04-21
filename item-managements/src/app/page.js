'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from '../../components/navbar.js'

export default function Home() {
  return (
    <div className="font-mono">
      <div className="justify-center">
      <Navbar />
      </div>
      <div className="text-center items-center">
      <h1 className="text-9xl" style={{marginTop: 300}}>Item Management</h1>
      <p className="text-4xl" style={{marginTop: 20}}>Make It Safety</p>
      </div>
    </div>
  );
}
