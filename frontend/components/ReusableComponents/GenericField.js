import * as React from "react";

export default function GenericField({ register, type, placeholder, children, errors, referenceError }) {
  return(
    <div className="field">
      <div className="control has-icons-left">
        <input type={type} {...register} placeholder={placeholder} className="input inputs-custom" />
        <span className="icon is-small is-left">
          {children}  
        </span>
        {errors[referenceError] && <p className="help is-danger is-size-6 has-text-left">{errors[referenceError].message}</p>}
      </div>

      
    </div>
  )
}