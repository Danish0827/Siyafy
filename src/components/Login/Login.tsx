"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

import logo from "@/assets/images/vercel.svg";
import { FaArrowRightLong } from "react-icons/fa6";
const Login: React.FC = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center via-[#8e7bff] from-slate-900  to-[#27716F] px-4 sm:bg-[#141414] sm:bg-gradient-to-r">
      <div className="w-full space-y-1 rounded-lg bg-white p-8 sm:max-w-md">
        <img width={100} className="pb-5" src={logo.src} alt="" />
        <div className="login-section">
          <h1 className="text-2xl text-[#333] font-bold tracking-wide">
            Log in
          </h1>
          <p className="text-sm tracking-wide text-gray-500">
            Continue to Shopify
          </p>
          <div className="py-10">
            <Form
              name="login"
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              className="login-form space-y-4"
            >
              <Form.Item
                name="email"
                className="mb-5"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  {
                    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Please input a valid Email!",
                  },
                ]}
              >
                <label htmlFor="sd">Email</label>
                <Input
                  placeholder="Email"
                  className="h-10 border !border-gray-900 placeholder:text-gray-500"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <label htmlFor="sd">Password</label>
                <Input.Password
                  placeholder="Password"
                  className="mb- h-10 border !border-gray-900 placeholder:text-gray-900"
                />
              </Form.Item>
              <p className="text-blue-600">Forget password?</p>

              <Form.Item>
                <Link href="/dashboard">
                  <button
                    // loading={loader}
                    // htmlType="submit"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                    className="hover:pree bg-gray-700 box-s flex h-10 w-full items-center rounded-md justify-center hover:bg-gray-800 font-semibold tracking-wide text-white"
                  >
                    Log in{" "}
                    <FaArrowRightLong className="ml-2 pree-inline-block " />
                  </button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="pt-5">{/* <Termslogin /> */}</div>
      </div>
    </div>
  );
};

export default Login;
