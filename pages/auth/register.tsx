import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/router";

interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const createUserSchema = object({
  name: string().nonempty({
    message: "Name is required",
  }),
  password: string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .nonempty({
      message: "Password is required",
    }),
  passwordConfirmation: string().nonempty({
    message: "password confirmation is required",
  }),
  email: string().email("Not a valid email").nonempty({
    message: "Email is required",
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "passwords do not match",
  path: ["passwordConfirmation"],
});

const Register: NextPage = () => {
  const router = useRouter();
  const [registerError, setRegisterError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInputs>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: RegisterInputs) => {
    try {
      router.push("/");
    } catch (e: any) {
      setRegisterError(e);
    }
  };

  return (
    <>
      {/* <p>{registerError}</p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="name">Email:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && "Name is required"}
          <div>{errors.name?.message}</div>
        </div>

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

        <div className="form-element">
          <label htmlFor="passwordConfirmation">Confirm password</label>
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="Enter password"
            {...register("passwordConfirmation", { required: true })}
          />
          {errors.passwordConfirmation?.type === "required" &&
            "Password is required"}
          <div>{errors.passwordConfirmation?.message}</div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
