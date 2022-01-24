import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/router";

interface LoginInputs {
  email: string;
  password: string;
}

export const createSessionSchema = object({
  email: string().nonempty({
    message: "Email is required",
  }),
  password: string().nonempty({
    message: "password is required",
  }),
});

const Login: NextPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInputs>({
    resolver: zodResolver(createSessionSchema),
  });

  const onSubmit = async (data: LoginInputs) => {};

  return (
    <>
      <p>{loginError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email is required"}
          <div>{errors.email?.message}</div>
        </div>

        <div className="form-element">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "Password is required"}
          <div>{errors.password?.message}</div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
