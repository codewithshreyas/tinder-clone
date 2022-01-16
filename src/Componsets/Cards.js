import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
function Cards() {
    const[people,setPeople]=useState([
        {
            name:'steve jobs',
            url:''
        },
        {
            name:'mark zukbarg',
            url:''
        }
    ]);


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div>
             <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
        </div>
    )
}

export default Cards
