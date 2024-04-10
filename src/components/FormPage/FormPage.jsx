import { links, socialLinksData } from "../../Data";
import FooterSection from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./FormPage.css";
import { useForm } from "react-hook-form";

const FormPage = () => {
  return (
    <>
      <NavBar />
      <Form />
      <FooterSection data={socialLinksData} navLinks={links} />
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
    <div className="form__section">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <input
            className="input"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />

          <span className="error">
            {errors.firstName ? "This field is required" : ""}
          </span>
        </div>

        <div className="form__input-wrapper">
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          <span className="error">
            {errors.lastName ? "This field is required" : ""}
          </span>
        </div>

        <div className="form__input-wrapper">
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <span className="error">
            {errors.email ? "This field is required" : ""}
          </span>
        </div>

        <button type="submit" className="form__btn">
          Get an invite
        </button>
        <p className="form__p">
          * By clicking the button, you are agreeing to our Terms and Services.
        </p>
      </form>
    </div>
  );
}

export default FormPage;
