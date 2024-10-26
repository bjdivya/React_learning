import React from 'react'

 function ListRendering() {
 const kpopgroup=['BTS','ENHYPEN','STRAYKIDS','SEVENTEEN','GOT7','EXO','MOSNSTA X','TXT','ZB1','BOYNEXTDOOR','THE BOYS','ATEEZ','ASTRO','NCT DREAM','NCT 27']
 const ggroup=['BLACKPINK','NEW JEANS','BABY MONSTOR','TWICE','GIRLS GENERATION','IU','ILLIT','IVE']
 const first=kpopgroup.map(x=><ul><li>{x}</li></ul>);
 const second=ggroup.map(x=><ul>{x}</ul>);
 return (
    <div>
        <h1>K-pop Boys group:</h1>
        {first}
        <h1>K-pop girls group:</h1>
        {second}
    </div>
  )
}

export default ListRendering

