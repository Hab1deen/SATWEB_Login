import React, { useState } from "react";
import trees from "../../assets/images/bg8.jpg";
import blindIconOpen from "../../assets/images/eye-open.svg";
import blindIconClosed from "../../assets/images/eye-off.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      emailRegex.test(email)
        ? ""
        : "กรุณาป้อนอีเมลที่ถูกต้อง"
    );
  };

  const validatePassword = () => {
    // Password should have at least 8 characters
    const passwordRegex = /^(.{8,})$/;
    setPasswordError(
      passwordRegex.test(password) ? "" : "รหัสผ่านต้องมีอย่างน้อย 8 ตัว"
    );
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password before submitting
    validateEmail();
    validatePassword();

    // If no errors, proceed with form submission
    if (!emailError && !passwordError) {
      console.log("Email:", email);
      console.log("Password:", password);
      // Add your submission logic here
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      {/* ส่วนนี้เป็นการเพิ่มรูปภาพพื้นหลัง */}
      <style>
        {`
          body {
            background-image: url('${trees}');
            background-size: cover;
            background-position: center;
            opacity: 0.8;
          }
        `}
      </style>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-blue-800">
          สุขาภิบาล
        </h1>
        <p className="mt-5 text-center text-sm text-gray-600">
          ระบบติดตามผลการอบรม
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-md">
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="mt-2 text-lg text-blue-700 mb-2">
              ลงชื่อเข้าใช้เพื่อเข้าสู่ระบบ
            </p>
            <label
              htmlFor="email"
              className="mt-5 block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-6">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onBlur={validateEmail}
                onChange={handleEmailChange}
                className={`pl-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 ${emailError ? "border-red-500" : ""
                  }`}
              />
              {emailError && (
                <p className="pt-2 text-sm text-red-500">{emailError}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              รหัสผ่าน
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                ลืมรหัสผ่าน?
              </a>
            </div>
          </div>
          <div className="mt-2 relative">
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              autoComplete="current-password"
              required
              onBlur={validatePassword}
              onChange={handlePasswordChange}
              className={`pl-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${passwordError ? "border-red-500" : ""
                }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
            >
              <img
                src={isPasswordVisible ? blindIconClosed : blindIconOpen}
                alt={isPasswordVisible ? "Hide Password" : "Show Password"}
                className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
              />
            </button>
          </div>

          {passwordError && (
            <p className="text-sm text-red-500">{passwordError}</p>
          )}
          <div>
            <button
              type="submit"
              className="pt-2 flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          หากไม่มีบัญชี{" "}
          <a
            href="#"
            className="font-midium leading-6 text-blue-700 hover:text-indigo-900"
          >
            คลิกที่นี่เพื่อลงทะเบียน
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
