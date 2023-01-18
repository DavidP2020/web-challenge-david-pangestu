import { Button, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "https://dummyjson.com/auth/login",
          JSON.stringify({ username, password }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((resp) => {
          if (resp.status) {
            // console.log(resp);
            sessionStorage.setItem("name", resp.data.firstName);
            window.location = "/dashboard";
          } else {
            alert("Please Try Again}");
          }
        });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center justify-items-center items-center">
      <div className="border border-cyan-600 w-5/6 md:w-1/4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Image
              src="/assets/header-login.png"
              alt="logo"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="w-3/4 px-2 md:px-10">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>

        <div className="px-4">
          <h2 className="font-bold text-2xl mt-16 py-2">Login</h2>
          <div className="text-xs">
            {" "}
            <span>Please Sign in to continue</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="py-2">
              {" "}
              <TextField
                required
                id="userId"
                name="userId"
                label="User Id"
                onChange={(e) => setUsername(e.target.value)}
                multiline
                className="w-full"
                variant="standard"
              />
            </div>
            <div className="mb-8">
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="standard"
                className="w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right mb-36">
              <button
                type="submit"
                className="font-bold py-2 px-12 text-sm leading-[160%] border border-cyan-900 rounded-full bg-purple-800 text-white"
              >
                Login
              </button>
            </div>

            <div className="text-center text-xs mb-6">
              <span>
                Don't have an account?
                <a href="/register" className="text-red-800">
                  {" "}
                  Sign Up
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
