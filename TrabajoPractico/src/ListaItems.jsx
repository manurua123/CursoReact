const ListaItems = [
]
export function setItem(item){
  if(!ListaItems.includes(item)){
    ListaItems.push(item);
  }
}
export default ListaItems