 export function Products(props) {
     return(
         <div className='productList'>
             <div key={props.id} className='productCard'>
                 <img src={props.avatar} alt='consumer-img' className='productImage'></img>

                
                 <div className='productCard_content'>
                     <h3 className='firstName'>{props.first_name}</h3>
                     <h3 className='lastName'>{props.last_name}</h3>
                     <h3 className='Email'>{props.email}</h3>
                     <h3 className='Gender'>{props.gender}</h3>
                     <h3 className='Avatar'>{props.avatar}</h3>
                     <h3 className='Domain'>{props.domain}</h3>
                     <h3 className='Available'>{props.available}</h3>
                     
                     </div>
                 </div>
            </div>
     ); 
     
 }