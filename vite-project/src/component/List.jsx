import { useRef } from "react";


const List = () => {
    let itemsList = ['Rainbow Six', 'Arsenal', 'FIFA', 'Football', 'Cats', 'Coding'];

    //useref persisted mutable

    let num=useRef(0);

    const numChange=()=>{
        num.current++;
        console.log(num)
    }

return (

        <div>
            <>
            <h3>Items List are-</h3>
            <p><strong>NOTE : </strong> Used list rendering</p>
            <ul>
                {
                itemsList.map((item, i) => {
                    return <li key={i.toString()}>{item} </li>;
                })
                }
            </ul>
            <button onClick={numChange} className="mb-4">Click and check console log</button>   
            </>
        </div>
    );
};

export default List;