const List = () => {
    let itemsList = ['Rainbow Six', 'Arsenal', 'FIFA', 'Football', 'Cats', 'Coding'];
    
    return (

        <div>
            <h3>Items List are-</h3>
            <p><strong>NOTE : </strong> Used list rendering</p>
            <ul>
                {
                itemsList.map((item, i) => {
                    return <li key={i.toString()}>{item} </li>;
                })
                }
            </ul>
        </div>
    );
};

export default List;