const ListaItems = [
]

export function setItem(item){
  if(!ListaItems.includes(item)){
    ListaItems.push(item);
    console.log('agrego un item')
  }
}
export default ListaItems