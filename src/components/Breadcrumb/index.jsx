import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ List }) {
  return (  
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto overflow-x-auto">
        <ul className="flex whitespace-nowrap text-sm text-gray-600">
          {List?.map((item, index) => {
            const isLast = index === List.length - 1;
            return (
              <li key={item.url} className="flex items-center">
                {!isLast ? (
                  <>
                    <Link to={item.url} className="hover:underline">{item.name}</Link>
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                ) : (
                  <span aria-label="current-page" className="font-semibold text-gray-900">
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

Breadcrumb.propTypes = {
  List: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      url: propTypes.string.isRequired,
    })
  ).isRequired
};







// import React from 'react'
// import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default function Breadcrumb({List}) {
//   return (  
//     <section className="bg-gray-100 py-8 px-4">
//       <div className="container  mx-auto overflow-x-auto">
//         <ul className="breadcrumb flex overflow-x-auto space-x-4">
            
//             { List?.map( (item, index) => {
//                     const arias = index === List.length -1 ? {"aria-label": "current-page"} : {};
//                     return (
//                     <li key={item.url}> 
//                         <Link to={item.url} {...arias}> 
//                         {item.name} 
//                         </Link>
//                    </li>
//                     );
//                 })
//             }

          
//           {/* <li>
//             <a href="#">Office Room</a> 
//           </li>
//           <li>
//             <a href="#" aria-label="current-page">Details</a>
//           </li> */}
//         </ul>
//       </div>
//     </section>
//   )
// }

// Breadcrumb.propTypes = {
//   List: propTypes.arrayOf(
//     propTypes.shape({
//       name: propTypes.string.isRequired,
//       url: propTypes.string.isRequired,
//     })
//   ).isRequired
// };