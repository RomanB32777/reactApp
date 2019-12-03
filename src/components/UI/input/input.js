import React from 'react';

function isInvalid({valid, touched, shouldVal}) {
 return !valid && shouldVal && touched
}

const Input = props => {

  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

if (isInvalid(props)){
  console.log("true");
}

  return(
    <div>
     <label htmlFor={htmlFor}>{props.label}</label>
     <input
       type={inputType}
       id={htmlFor}
       value={props.value}
       onChange={props.onChange}
     />
     {isInvalid(props) ? <span>{props.errorMessage || "Введите нормальное значение"}</span> : null }

    </div>
  )
}

export default Input;
