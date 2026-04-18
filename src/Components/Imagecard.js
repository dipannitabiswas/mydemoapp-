// we write js function in two ways
//1.using arrow 
//2.using function keyword
// 1.pass props to function parameter and get props.name or props.imglink in return statement.
// 2. destructure props in function parameter and get name and imglink in return statement.

function Imagecard({Name, ImgLink}) {                     // when we pass functional paramenter in funtion  its called props sharing.
console.log("Name");             //outside return statement
return(
    <div>
        <h1>{Name}</h1>
        <img src={ImgLink} alt="placeholder" />
    </div>
);
}
export default Imagecard;

/* if we write js function or variable insind return statementin jsx then we have to write it in curly braces.
if we want to write html in js then we have to write it in return statement and it should be in one parent tag. 
we can not write two html tags in return statement without parent tag. */