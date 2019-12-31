import Vue from 'vue'
export function saveCartFoods(shopId,cartFoods) {
  const cartCounts = cartFoods.reduce((pre,food)=>{
    pre[food,id] = food.count 
    return pre
  },{})
  sessionStorage.setItem(shopId+'_key',JSON.stringify(cartCounts))
}
export function getCartFoods(shop) {
  const cartFoods = []
  const cartCounts = JSON.parse(sessionStorage.getItem(shop.id + '_key'))||{}
  shop.goods.forEach(good =>{
    good.foods.forEach(food=>{
      const count = cartCounts[food.id]
      if (count>0) {
        Vue.set(food,'count',count)
        cartFoods.push(food)
      }
    })
  })
   return cartFoods
}