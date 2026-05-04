"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());

    const { data: authData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (authData) {
      toast.success("SignIn Successful!");
    }

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold">
              <span className="text-[#FF653F]">Tiles</span> Gallery
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-[#0b0031]">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <Form
          className="bg-white rounded-lg shadow-lg p-8 space-y-6"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="email" type="email">
            <Label className="font-semibold text-[#0b0031]">Email Address</Label>
            <Input 
              placeholder="you@example.com"
              className="py-2"
              variant="bordered"
            />
            <FieldError />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password">
            <Label className="font-semibold text-[#0b0031]">Password</Label>
            <Input 
              placeholder="••••••••"
              className="py-2"
              variant="bordered"
            />
            <Description className="mt-2 text-xs text-gray-600">
              At least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link href="#" className="text-[#FF653F] font-semibold hover:underline">
              Forgot password?
            </Link>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <Button 
              type="submit"
              className="w-full bg-[#FF653F] text-white font-semibold py-3 text-lg hover:bg-[#E55A35] transition-colors"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button 
              onClick={handleGoogleLogIn}
              className="w-full border-2 border-gray-200 bg-white text-gray-700 font-semibold py-3 hover:border-[#FF653F] hover:text-[#FF653F] transition-colors flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-lg" />
              Sign in with Google
            </Button>
          </div>
        </Form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="text-[#FF653F] font-bold hover:underline">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center text-xs text-gray-600">
          <div className="space-y-2">
            <div className="text-lg">🔒</div>
            <p>Secure</p>
          </div>
          <div className="space-y-2">
            <div className="text-lg">⚡</div>
            <p>Fast</p>
          </div>
          <div className="space-y-2">
            <div className="text-lg">✨</div>
            <p>Easy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
