"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/lib/utils";

export default function SignUpForm() {
  const router = useRouter();

  const onSignUp = async () => {
    const EmailAddress = document.getElementById(
      "EmailAddress"
    ) as HTMLInputElement;
    const UserName = document.getElementById("UserName") as HTMLInputElement;
    const Password = document.getElementById("Password") as HTMLInputElement;
    const ConfirmPassword = document.getElementById(
      "ConfirmPassword"
    ) as HTMLInputElement;

    if (!validateEmail(EmailAddress.value)) {
      console.info(EmailAddress.value, !validateEmail(EmailAddress.value))
      toast.error("Email address is incorrect!");
      return;
    }
    if (!EmailAddress.value) {
      toast.error("EmailAddress is empty!");
      return;
    }
    if (!UserName.value) {
      toast.error("UserName is empty!");
      return;
    }
    if (!Password.value) {
      toast.error("Password is empty!");
      return;
    }
    if (Password.value !== ConfirmPassword.value) {
      toast.error("Password inconsistency!");
      return;
    }

    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: EmailAddress.value,
        username: UserName.value,
        password: Password.value,
      }),
    });
    const data = await response.json();

    if (data.success) {
      toast.success("Sign Up Success!");

      router.push("/sign-in");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      {/* email */}
      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="EmailAddress"
        >
          Email Address
        </label>
        <input
          id="EmailAddress"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      {/* username */}
      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="UserName"
        >
          UserName
        </label>
        <input
          id="UserName"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder=""
        />
      </div>

      {/* password */}
      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="Password"
          >
            Password
          </label>
        </div>

        <input
          id="Password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
        />
      </div>

      {/* confirm password */}
      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="Password"
          >
            Confirm Password
          </label>
        </div>

        <input
          id="ConfirmPassword"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
        />
      </div>

      {/* sign up */}
      <div className="mt-6">
        <button
          onClick={onSignUp}
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
