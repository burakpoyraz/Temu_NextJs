"use client";
import { LoaderCircle } from "lucide-react";
import Form from "next/form";
import React, { useActionState } from "react";

const initialState = {
  message: "",
};

type SignInProps = {
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};

const SignIn = ({ action }: SignInProps) => {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <Form
      action={formAction}
      className="max-w-md mx-auto my-16 bg-white rounded-lg shadow-md p-8"
    >
      <h1 className="text-2x text-center font-bold mb-2">Welcome Back! 👋</h1>
      <p className="text-center text-sm text-rose-600 font-semibold  mb-2">
        🔥MEMBER EXCLUSIVE 🔥
      </p>
      <p className="text-center text-sm text-gray-600  mb-2">
        Sign in to access your exclusive member deals
      </p>

      <div className="space-y-6 mt-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="
              Enter your email address"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="
              Enter your password"
          />
        </div>
        <div className="space-y-2 text-center">
          <p className=" text-xs mb-2 text-gray-600">
            🎁 Members save an extra 15% on all orders
          </p>
          <p className="text-xs text-gray-600">
            🚚 Plug get free extra shipping on orders over $15.00
          </p>
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full px-4 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 font-medium transition-colors flex justify-center items-center gap-2 ${
              isPending ? "cursor-not-allowed" : ""
            }`}
          >
            {isPending ? (
              <React.Fragment>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Signing In...
              </React.Fragment>
            ) : (
              "Sign In"
            )}
          </button>
          {state?.message && state.message.length > 0 && (
            <p className="text-red-500 text-center text-sm mt-2">{state.message}</p>
          )}
          <p></p>
        </div>
      </div>
    </Form>
  );
};

export default SignIn;
