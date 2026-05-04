
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
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: authData, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
    });

    if (authData) {
      toast.success("SignUp successful!");
    }

    if (!error) {
      router.push("/");
    }

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  const handleGoogleLogIn = async () => {
    const res = await authClient.signIn.social({
      provider: "google",
    });

    if (res) {
      router.push("/");
    }
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
          <h2 className="text-2xl font-bold text-[#0b0031]">Create Account</h2>
          <p className="text-gray-600">Join our community of tile enthusiasts</p>
        </div>

        {/* Form */}
        <Form
          className="bg-white rounded-lg shadow-lg p-8 space-y-5"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label className="font-semibold text-[#0b0031]">Full Name</Label>
            <Input 
              placeholder="John Doe"
              className="py-2"
              variant="bordered"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label className="font-semibold text-[#0b0031]">Email Address</Label>
            <Input 
              placeholder="you@example.com"
              className="py-2"
              variant="bordered"
            />
            <FieldError />
          </TextField>

          <TextField name="image" type="text">
            <Label className="font-semibold text-[#0b0031]">Profile Image URL</Label>
            <Input 
              placeholder="https://example.com/image.jpg"
              className="py-2"
              variant="bordered"
            />
            <Description className="mt-2 text-xs text-gray-600">
              Optional: Add a profile picture URL
            </Description>
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

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1 rounded" required />
            <span className="text-gray-700">
              I agree to the <span className="text-[#FF653F] font-semibold cursor-pointer">Terms & Conditions</span>
            </span>
          </label>

          <div className="flex flex-col gap-4 pt-4">
            <Button 
              type="submit"
              className="w-full bg-[#FF653F] text-white font-semibold py-3 text-lg hover:bg-[#E55A35] transition-colors"
            >
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <Button 
              onClick={handleGoogleLogIn}
              className="w-full border-2 border-gray-200 bg-white text-gray-700 font-semibold py-3 hover:border-[#FF653F] hover:text-[#FF653F] transition-colors flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-lg" />
              Sign up with Google
            </Button>
          </div>
        </Form>

        {/* Signin Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href={"/signin"} className="text-[#FF653F] font-bold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-10 space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Access exclusive collections</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Get special offers & discounts</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Save your favorite tiles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;


