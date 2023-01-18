import { Button, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          <h2 className="font-bold text-2xl mt-16 py-2">Register</h2>
          <div className="text-xs">
            {" "}
            <span>Please fill in the fields to register</span>
          </div>
          <form>
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
            <div className="mb-2">
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
            <div className="mb-8">
              <TextField
                required
                id="password"
                name="password"
                label="Confirm Password"
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
                Sign Up
              </button>
            </div>

            <div className="text-center text-xs mb-6">
              <span>
                Already have an account?
                <a href="/login" className="text-red-800">
                  {" "}
                  Sign In
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
