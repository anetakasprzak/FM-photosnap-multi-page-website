import "./FormPage.css";
import { useForm } from "react-hook-form";

const FormPage = () => {
  return (
    <>
      <Form />
    </>
  );
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="form__section" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="input"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </div>

      <div>
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <>
            <span style={{ color: "red" }}>This field is required</span>
          </>
        )}
      </div>

      <div>
        <input
          className="input"
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </div>

      <button type="submit" className="form__btn">
        Get an invite
      </button>
      <p className="form__p">
        By clicking the button, you are agreeing to our{" "}
        <span className="form__span">Terms and Services</span>
      </p>
    </form>
  );
}

export default FormPage;
