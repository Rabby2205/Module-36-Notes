const bottol = {
    // bellow color is "key" and "yellow" is value.--------------------------
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true,
}
// to find all key or properties.--------------------------------
const key = Object.values(bottol);//******** 
/**Output
 * 
 [ 'color', 'hold', 'price', 'isClean' ]
 */
// to find all properties values------------------------------------------
const values = Object.values(bottol);/*************

/**Output
 * 
 * [ 'yellow', 'water', 50, true ]
 */
// to get pairs
const pairs = Object.entries(bottol);/*************** 

/**Out put is
 * [ 'color', 'yellow' ],
  [ 'hold', 'water' ],
  [ 'price', 50 ],
  [ 'isClean', true ]
 */
// To delet anything at that object follow below structure .
// delet ObjectName.property ;*******************
Object.seal(bottol);//after seal a object you can modifie but you cann't add or delet anything on that object .
Object.freeze(bottol);//if you freez any object you cann't modifie ,add or delet from that object .******
bottol.price = 100;//Modified price at Object of bottol .*****changin value of properties on object .
delete bottol.isClean;
// console.log(bottol);