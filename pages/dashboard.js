import React, { useEffect, useState } from "react";
import Image from "next/image";
import { setConfig } from "next/config";
import axios from "axios";

const dashboard = () => {
  const [name, setName] = useState("");
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res);
      setItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
    const data = sessionStorage.getItem("name");
    setName(data);
  }, []);
  return (
    <>
      <div>
        <header className="fixed w-full">
          <div className="bg-slate-50 mx-auto flex flex-row justify-between items-center">
            <div className="py-2 px-10 md:px-40   w-8/12">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={70}
                height={70}
                priority
              />
            </div>
            <div>{name}</div>
            <Image
              src="/assets/header-splash.png"
              alt="header-splash"
              width={100}
              height={100}
              priority
            />
          </div>
        </header>
      </div>

      <div className="h-screen bg-black flex items-center">
        <div className="card">
          <Image
            src="/assets/logo.png"
            alt="header-splash"
            width={100}
            height={100}
            priority
            className="w-full h-full object-cover"
          />
          <div className="p-5 flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="badge">Stock Ready</span>
              <span className="badge">Official Store</span>
            </div>

            <h2 className="product-title">Best Smardsasad</h2>

            <div>
              <span className="text-xl font-bold">Rp.400000</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  Rp.500.000
                </span>
                <span className="discount">Save 20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
