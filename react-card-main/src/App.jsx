 import { Products } from './components/products';
 import contents from './content';

 export default function App() {
     return(
            <div className='App'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.avatar}
                        first_name={contents.first_name}
                        last_name={contents.last_name}
                        email={contents.email}
                        gender={contents.gender}
                        domain={contents.domain}
                        availability={contents.available}
                    />
                ))}
            </div>
     )
 }