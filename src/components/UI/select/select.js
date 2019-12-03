import React from 'react';

// function isInvalid({valid, touched, shouldVal}) {
//  return !valid && shouldVal && touched
// }

const Select = props => {

  // const inputType = props.type || 'text';
  const htmlFor = `${props.label}-${Math.random()}`;

// if (isInvalid(props)){
//   console.log("true");
// }

  return(
    <div>
     <label htmlFor={htmlFor}>{props.label}</label>
     <select
       id={htmlFor}
       value={props.value}
       onChange={props.onChange}
     >
       { props.options.map((option, index) => {
         return (
           <option
             value={option.value}
             key={option.value + index}
             >
             {option.text}
             </option>
         )
       }) }
     </select>

     {/*isInvalid(props) ? <span>{props.errorMessage || "Введите нормальное значение"}</span> : null */}

    </div>
  )
}

export default Select;
