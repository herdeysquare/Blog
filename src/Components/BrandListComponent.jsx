// import React, { useEffect, useState } from 'react'
// import { BrandList } from '../JsFiles/BrandList'
// import { Link, useParams } from 'react-router-dom'

// const BrandListComponent = () => {
//     const { id } = useParams();
//     const [Letter, setLetter] = useState(null);


//     useEffect(() => {
//         const selectedLetter = BrandList.find(item => item.id === parseInt(id));
//         if (selectedLetter) {
//             setLetter(selectedLetter);
//         }
//     }, [id]);
//     if (Letter === null) {
//         return <div style={{ color: "red" }}>Product not found</div>;
//     }


//     return (
//         <div>
//             <h1>{Letter.name}</h1>
//             <h3>{Letter.list}</h3>
//         </div>

//     )
// }

// export default BrandListComponent