const Item = (props) =>(
    <ul>
     <li>{props.item.title}</li>
     <li>{props.item.description}</li>
     <li>{props.item.picturURL}</li>
     <li>{props.item.price}</li>
    </ul>
)


export default Item;
