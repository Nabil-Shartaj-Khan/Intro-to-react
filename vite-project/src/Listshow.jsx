function Listshow({things, title}) {
    return (

        <div className="list-show">

         <h3 className="display-4">{title}</h3>               
        {things.map((thing)=>(
                
                <div className="thing-preview shadow-lg py-3 px-2" key={thing.id}>
                    
                    <h2 className="display-5">{thing.title}</h2>
                    <p>This is about {thing.about}</p>
                    <p>I have {thing.time} of time for this</p>
    
                </div>
    
            ))}
        </div>
      );
}

export default Listshow;