import * as React from "react";
import { useForm } from "react-hook-form";
import { RegisterUser } from "../../services/auth/auth";
import RegisterUI from "./RegisterUI";


export default function Register() {
  const { register, handleSubmit, trigger, formState: { errors }, setFocus } = useForm();
  const [requestError, setRequestError] = React.useState(false);
  React.useEffect(()=> {
    setFocus("first_name");
  }, [setFocus]);

  const onSubmit = async (data) => {
    const response = await RegisterUser(data);
    console.log(response);
    if (!response) setRequestError(true);
    return console.log(reult);
  }

  const handleClick = () => {
    return setRequestError(false)
  }

  return(
    <>
      <RegisterUI
        handleSubmit={handleSubmit} 
        onSubmit={onSubmit} 
        register={register} 
        errors={errors}
        requestState={requestError}
        errorInfo={"Email already exist"}
        handleError={handleClick}
      />
    </>
  )
}