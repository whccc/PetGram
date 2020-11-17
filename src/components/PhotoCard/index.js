import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img,Article } from './styles'
import {useLocalStorage} from '../../Hooks/useLocalStorage'
import {FavButton} from '../FavButton'
import {ToggleLikeMutation} from '../../Container/ToggleLikeMutation'
import {Link} from '@reach/router'
const DEFAULT_IMAGE = `
https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
`

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {


  const [show, setShow] = useState(false);
  const key=`like-${id}`;
  const [liked,setLiked] = useLocalStorage(key,false)
 
  const element = useRef(null)
  //efec
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    })
    observer.observe(element.current)
  }, [element])

  
  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike)=>{
                const handleFavClick=()=>{
                  !liked && toggleLike({variables:{
                    input:{id}
                  }})
                  setLiked(!liked)
                }
                return   <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  );

}