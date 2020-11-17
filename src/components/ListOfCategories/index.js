import React, { Fragment,useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

//Hook propio
function useCategoriesDate(){
    
    const [Categories, setCategories] = useState([]);
    const [loading,setLoading]=useState(false);
     //se ejecuta cuando se rendediriza un componente componentDidMount
     useEffect(() => {
         setLoading(true)
        window.fetch('https://petgramapi-three.vercel.app/categories').then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    },[]);
    //devolver
    return {Categories,loading};
}

export const ListOfCategories = () => {
    //Hook propio 
    const {Categories,loading}= useCategoriesDate();
    //State 
    const [showFixed,setShowFixed]=useState(false);
   
    //ejecutar cada vez que renderice
    useEffect(()=>{
        const onScroll=(e)=>{
            const newShowFixed=window.scrollY>200;
            showFixed!=newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener('scroll',onScroll);

        //Limpiar eventos
        return ()=> document.removeEventListener('scroll',onScroll);
        
    },showFixed)

    //Lista
    const renderList = (fixed) => {
        return (
            <List fixed={fixed}> 
                {
                    Categories.map(category =>
                        <Item key={category.id}>
                            <Category {...category} />
                        </Item>
                    )
                }

            </List>
        );
    }

    if(loading){
        return 'cargando';
    }
    return (
        <Fragment>
        {renderList()}
        {showFixed && renderList(true)}
        </Fragment>

    );
}