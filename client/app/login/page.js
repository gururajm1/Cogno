"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import pakka from "../Assets/pakka.jpg";
import PasswordChecklist from "react-password-checklist";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";
function GaurdianLogin() {
  const router = useRouter();
  const pathname = usePathname(); 
  const [error, setError] = useState("");

  const emailInputRef = useRef(null);
  const passwordInput = useRef(null);
  const [passwordInputRef, setPasswordInputRef] = useState("");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (
      (pathname === "/" || pathname === "/login" || pathname === "/proLogin") &&
      localStorage.getItem("pat-auth")
    ) {
      router.push("/games"); 
    }
  }, [pathname, isClient]);

  const handlePasswordChange = (e) => {
    setPasswordInputRef(e.target.value);
  };

  const logInForm = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      localStorage.setItem("pat-auth", JSON.stringify(user));
      router.push("/games"); 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred.";
      setError(errorMessage);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-black-200 sm:max-w-[900px]">
        <div className="w-full h-full relative">
          <Image
            className="object-cover w-full h-full"
            src={pakka}
            alt="Login background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={logInForm}>
            <h2 className="text-2xl font-bold text-center mb-9 text-gray-600">
              Guardian Login
            </h2>
            <div className="ml-8">
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-2"
                type="text"
                placeholder="Your Email Address"
                ref={emailInputRef}
              />
              <input
                className="border p-2 mb-4 w-80 ml-2"
                type="password"
                placeholder="Enter Password"
                value={passwordInputRef}
                onChange={handlePasswordChange}
                ref={passwordInput}
              />
              {passwordInputRef !== "" ? (
                <PasswordChecklist
                  value={passwordInputRef}
                  rules={["minLength", "lowercase", "specialChar", "number", "capital"]}
                  minLength={8}
                />
              ) : (
                ""
              )}
            </div>
            <button
              className="w-[350px] ml-7 p-2 my-4 bg-green-600 hover:bg-yellow-500 mt-7"
              type="submit"
            >
              Log In
            </button>
            <h5 className="text-red-600 flex justify-center">{error}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GaurdianLogin;
