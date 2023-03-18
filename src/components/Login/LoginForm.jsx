import React from "react";

function LoginForm(props) {
  return (
    <form>
      <div>
        <input placeholder={"Login"} />
      </div>
      <div>
        <input placeholder={"Password"} />
      </div>
      <div>
        <input type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;


// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     <div>
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//     </div>
//   );
// }
