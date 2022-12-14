import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import doodle from "../public/assets/doodle.png";
import Vector from "../public/assets/Vector.png";
import { useRouter } from "next/router";

interface Inputs {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/login");
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-[#BFD732] md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>The Perfect Mentor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src={Vector} alt="" />
        <Image src={doodle} alt="" />
      </div>
      <div>
        <form
          className="relative mt-24 space-y-8 rounded bg-black/60 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                placeholder="Username"
                className={`input ${
                  errors.username && "border-b-2 border-orange-500"
                }`}
                {...register("username", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-[#BFD732]">
                  Please enter a username.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className={`input ${
                  errors.email && "border-b-2 border-orange-500"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-[#BFD732]">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                placeholder="Password"
                className={`input ${
                  errors.password && "border-b-2 border-orange-500"
                }`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-[#BFD732]">
                  Your password must contain between 5 and 10 characters.
                </p>
              )}
            </label>
          </div>
          <button
            className="w-full rounded bg-[#797878] py-3 font-semibold"
            onClick={handleClick}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
