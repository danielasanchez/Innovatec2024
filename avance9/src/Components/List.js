function List(props){
    return(
        <div className='App-array'>
        {
          props.arreglo.map((p, i) => 
              <div className="App-movie" key={i}>
                    <img width='100%' src={p.Poster} alt={p.Title}></img>
              </div>
          )
        }
      </div>
    )
}

export default List;

