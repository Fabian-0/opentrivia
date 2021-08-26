import * as React from "react";
import GenericField from "../ReusableComponents/GenericField";
import DangerNotification from "../ReusableComponents/DangerNotification";
import "../../../public/css/register.css";

export default function RegisterUI({
  handleSubmit,
  onSubmit,
  register,
  errors,
  errorInfo,
  handleError,
  requestState,
}) {
  return (
    <div className="section section-register">
      <div className="columns is-justify-content-center has-text-centered pb-5-5">
        <div className="helper p-2">
        {requestState && <DangerNotification textInfo={errorInfo} handleError={handleError} />}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 box bg-secondary"
        >
          <h2 className="register mb-4 is-size-3 has-text-white">Register</h2>
          <GenericField
            type="text"
            register={register("first_name", {
              required: "First Name required",
              maxLength: {
                value: 50,
                message: "Max 50 charecters"
              },
              minLength: {
                value: 5, 
                message: "Min 5 characters"
              }
            })}
            errors={errors}
            referenceError="first_name"
            placeholder="First Name"
          >
            <i className="fas fa-user icons-custom"></i>
          </GenericField>
          <GenericField
            type="text"
            register={register("last_name", {
              required: "Last Name required",
              maxLength: {
                value: 50,
                message: "Max 50 charecters"
              },
              minLength: {
                value: 5, 
                message: "Min 5 characters"
              }
            })}
            errors={errors}
            referenceError="last_name"
            placeholder="Last Name"
          >
            <i className="fas fa-file-signature icons-custom"></i>
          </GenericField>
          <GenericField
            type="email"
            register={register("email", {
              required: "Email required",
              maxLength: {
                value: 100,
                message: "Max 100 charecters"
              },
              minLength: {
                value: 10, 
                message: "Min 10 characters"
              }
            })}
            errors={errors}
            referenceError="email"
            placeholder="Email"
          >
            <i className="fas fa-envelope icons-custom"></i>
          </GenericField>
          <GenericField
            type="password"
            register={register("password", {
              required: "Password required",
              maxLength: {
                value: 15,
                message: "Max 15 charecters"
              },
              minLength: {
                value: 10, 
                message: "Min 10 characters"
              }
            })}
            errors={errors}
            referenceError="password"
            placeholder="Password"
          >
            <i className="fas fa-key icons-custom"></i>
          </GenericField>
          <div className="field">
            <div className="control">
              <input
                type="submit"
                value="Register"
                className="button has-text-white btn-primary"
              />
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
