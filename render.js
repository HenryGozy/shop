
const AddedItem = []

const display = [
    {
        name: "Formal Dress Shoes",
        type: "Shoes",
        price: 90,
        size: [8, 9, 10],
        otherImages: ["shoes4-front.jpg", "shoes4-side.jpg"],
        img: "./img/shoes4-main.jpg",
        id: "shoes109",
        description: "Elegant formal shoes crafted from premium leather.",
        rating: 4.9,
        comment: ["Look classy!", "Perfect for formal events", "Top quality."]
    },
    {
        name: "Cargo Shorts",
        type: "Short",
        price: 30,
        size: ["L", "XL"],
        otherImages: ["short3-front.jpg", "short3-back.jpg"],
        img: "./img/cargo-short].webp",
        id: "short209",
        description: "Utility cargo shorts with plenty of pockets.",
        rating: 4.6,
        comment: ["Love the pockets!", "Great for casual wear", "Nice fit."]
    },
    {
        name: "Leather Backpack",
        type: "Bag",
        price: 65,
        size: ["Medium"],
        otherImages: ["bag1-front.jpg", "bag1-back.jpg"],
        img: "./img/bag1-main.jpg",
        id: "bag104",
        description: "A stylish leather backpack with multiple compartments.",
        rating: 4.8,
        comment: ["Spacious and durable!", "Looks great", "Perfect for work."]
    },
    {
        name: "Chino Pants",
        type: "Trouser",
        price: 35,
        size: ["M", "L", "XL"],
        otherImages: ["trouser1-front.jpg", "trouser1-back.jpg"],
        img: "./img/trouser1-main.jpg",
        id: "trouser202",
        description: "Slim-fit chinos available in various colors.",
        rating: 4.5,
        comment: ["Great fit!", "Very comfortable", "Love the colors!"]
    },
    {
        name: "Classic White Shirt",
        type: "Shirt",
        price: 25,
        size: ["S", "M", "L"],
        otherImages: ["shirt1-front.jpg", "shirt1-back.jpg"],
        img: "./img/shirt1-main.webp",
        id: "shirt301",
        description: "A classic white shirt made from 100% cotton. Perfect for any occasion.",
        rating: 4.5,
        comment: ["Great quality!", "Fits well", "Love the fabric!"]
    },
    {
        name: "Athletic Shorts",
        type: "Short",
        price: 20,
        size: ["M", "L", "XL"],
        otherImages: ["short2-front.jpg", "short2-back.jpg"],
        img: "./img/short2-main.jpeg",
        id: "short208",
        description: "Breathable athletic shorts ideal for sports and workouts.",
        rating: 4.7,
        comment: ["Very lightweight!", "Good for running", "Breathable fabric."]
    },
    {
        name: "Running Sneakers",
        type: "Shoes",
        price: 50,
        size: [7, 8, 9, 10],
        otherImages: ["shoes1-front.jpg", "shoes1-side.jpg"],
        img: "./img/shoes1-main.webp",
        id: "shoes101",
        description: "Lightweight running sneakers with excellent grip and comfort.",
        rating: 4.6,
        comment: ["Very comfortable!", "Perfect for jogging!", "Great shoes."]
    },
    {
        name: "Sports Duffel Bag",
        type: "Bag",
        price: 55,
        size: ["Large"],
        otherImages: ["bag3-front.jpg", "bag3-side.jpg"],
        img: "./img/bag3-main.jpeg",
        id: "bag107",
        description: "Spacious duffel bag ideal for gym and sports activities.",
        rating: 4.7,
        comment: ["Great for the gym!", "Fits everything I need", "Good quality."]
    },
    {
        name: "Floral Printed Shirt",
        type: "Shirt",
        price: 35,
        size: ["S", "M"],
        otherImages: ["shirt3-front.jpg", "shirt3-back.jpg"],
        img: "./img/shirt3-main.jpg",
        id: "shirt303",
        description: "Bright and colorful floral printed shirt perfect for summer.",
        rating: 4.8,
        comment: ["Perfect for vacation!", "Nice material", "Great for summer."]
    },
    {
        name: "Leather Boots",
        type: "Shoes",
        price: 80,
        size: [9, 10, 11],
        otherImages: ["shoes2-front.jpg", "shoes2-side.jpg"],
        img: "./img/shoes2-main.webp",
        id: "shoes102",
        description: "Stylish leather boots for a rugged look.",
        rating: 4.8,
        comment: ["Look fantastic!", "Very durable", "Great for winter."]
    },
    {
        name: "Denim Shorts",
        type: "Short",
        price: 25,
        size: ["S", "M", "L"],
        otherImages: ["short1-front.jpg", "short1-back.jpg"],
        img: "./img/short1-main.jpg",
        id: "short206",
        description: "Classic denim shorts perfect for a casual look.",
        rating: 4.5,
        comment: ["Great for summer!", "Comfortable fit", "Nice style."]
    },
    {
        name: "Blue Striped Shirt",
        type: "Shirt",
        price: 30,
        size: ["M", "L", "XL"],
        otherImages: ["shirt2-front.jpg", "shirt2-back.jpg"],
        img: "./img/shirt2-main.jpg",
        id: "shirt302",
        description: "A stylish blue striped shirt with a modern fit.",
        rating: 4.7,
        comment: ["Very stylish!", "Looks amazing!", "Great for casual wear."]
    }
];

displayItem(display)
checkAddToCart
const all = document.getElementById('selALL')
let totalQuantity = 0
document.getElementById('backdrop').addEventListener('click', () => {
    popIn()
})
all.addEventListener('click', () => {
    displayItem(disp)
})

const bag = document.getElementById('selBag')
bag.addEventListener('click', () => {
    const bagItem = disp.filter(item => item.type === "Bag")
    displayItem(bagItem)
})

const Short = document.getElementById('selShort')
Short.addEventListener('click', () => {
    const bagItem = disp.filter(item => item.type === "Short")
    displayItem(bagItem)
})

const Shirt = document.getElementById('selShirt')
Shirt.addEventListener('click', () => {
    const bagItem = disp.filter(item => item.type === "Shirt")
    displayItem(bagItem)
})

const Shoes = document.getElementById('selShoe')
Shoes.addEventListener('click', () => {
    const bagItem = disp.filter(item => item.type === "Shoes")
    displayItem(bagItem)
})

function displayItem(element) {
    document.getElementById('display').innerHTML = ''
    element.forEach((elementItem, index) => {
        const eleDiv = document.createElement('div')
        eleDiv.className = 'eleClass'
        eleDiv.innerHTML = `  
<img class='image' src="${elementItem.img}" alt="">
<div id='data'>
<p class='name'>${elementItem.name}</p>
<p class='price'>$${elementItem.price}</p>
<p class='star'><i class="fa-solid fa-star"></i>${elementItem.rating}</p>
 <span></span>
<button class="addCont">
<i class="fa-solid fa-eye"></i>
</div>
 </button>
`
        // console.log(elementItem)
        // console.log(index)
        // console.log(eleDiv)
        document.getElementById('display').appendChild(eleDiv)

        document.querySelectorAll('.addCont')[index].addEventListener('click', (event) => {

        })



        const elClass = document.querySelectorAll('.eleClass')[index]
        elClass.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const opval = elementItem.size

            document.getElementById('popOute').innerHTML =
                `
     <div id="popOutGrid">
        <div class="grid1">
            <img src="${elementItem.img}" alt="" width="100%" height="100%">
        </div>
      
        </div>

        <div id="popOutList">
        <div id="cancel"><i class="fa-solid fa-xmark"></i></div>
        <p class='ptype'>${elementItem.type}</p>
        <p class='pname'>${elementItem.name}</p>
        <p class='pprice'>$${elementItem.price}.00</p>
        <span>Available Size</span>
    <select name="" id="select" data-select="${elementItem.id}">

    </select>
    <br>
<input type="number" max="10" min="1" value ='1' data-id="${elementItem.id}" class='quantity'>
<button class="addCont" onclick='addTo("${elementItem.id}")'>
<i class="fa-solid fa-basket-shopping" ></i>
 </button>
        <h3 class='pdel'>Product Detail</h3>
        <p class='pdes'>${elementItem.description}</p>
        <p class='prate'><i class="fa-solid fa-star"></i> ${elementItem.rating}</p>
        </div>
    `




            opval.forEach(element => {
                const option = document.createElement('option')
                option.value = element
                option.text = element
                document.getElementById('select').appendChild(option)
            })

            const cancel = document.querySelector('#cancel')
            cancel.addEventListener('click', () => {
                popIn()
            })
            popOut()
        })
    });

    window.addTo = function (itemID) {
        const item = element.find(ele => ele.id === itemID)
        const quantity = document.querySelector(`#popOutList input[data-id="${itemID}"]`)
        const selectspan = document.querySelector(`#popOutList select[data-select="${itemID}"]`)
        const selectspanVal = selectspan.value
        console.log(selectspanVal)
        const quantityValue = parseInt(quantity.value)

        const checkItem = AddedItem.find(addele => addele.id === itemID)


        if (!checkItem) {
            AddedItem.push({ ...item, quantityValue, selectspanVal })
            const pop = document.createElement('div')
            pop.innerHTML = `
                <div id="popOutAllert">
            <ul>
                <li>
                    ${item.name} is added to cart
                </li>
            </ul>
        </div>
            `
            document.body.appendChild(pop)
            setTimeout(() => {
                pop.remove()
            }, 2000)
            totalQuantity += 1
            document.getElementById('displayQuanity').innerHTML = totalQuantity
            document.getElementById('displayQuanity').style.display = 'flex'
            updateAddedCart(AddedItem)
            storeCartInLocalStorage()
        }
        else {
            if (checkItem.quantityValue < 10) {
                checkItem.quantityValue += quantityValue
                updateAddedCart(AddedItem)
                storeCartInLocalStorage()
            }

            const pop = document.createElement('div')
            pop.innerHTML = `
            <div id="popOutAllert">
        <ul>
            <li>
                ${item.name}  Aready in cart 
            </li>
        </ul>
    </div>
        `
            document.body.appendChild(pop)
            setTimeout(() => {
                pop.remove()
            }, 2000)
        }


    }

}

window.updateAddedCart = function (itemInCart) {
    document.getElementById('form-nav').innerHTML = ``
    itemInCart.forEach((items) => {
        const Conatainer = document.createElement('ul')
        Conatainer.className = 'ULnew'
        Conatainer.innerHTML = `
<div><img src='${items.img}'></div>
<div class='nameSelect'>
    <li class="PNIC">${items.name}</li>
    <li><span>Size: </span>${items.selectspanVal}</li>
    <input type="number" max="10" min="1" value ='${items.quantityValue}' data-id="${items.id}" class='QINC'>
</div>
<div class='priceTOtal'>
    <li><span>Price: </span>$${items.price}.00</li>
    <li data-sub="${items.id}"><span>Sub Total: </span>$${items.quantityValue * items.price}.00</li>
    <li data-remove="${items.id}"><i class="fa-solid fa-trash-can"></i> remove</li>
    </div>
`
        document.getElementById('form-nav').appendChild(Conatainer)


        const input = document.querySelector(`.ULnew input[data-id=${items.id}]`);
        input.addEventListener('change', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const inputvalue = parseInt(input.value)
            const totalPrice = document.querySelector(`.ULnew li[data-sub="${items.id}"]`)
            totalPrice.innerHTML = `<span>Sub Total: </span>$${input.value * items.price}.00`
            items.quantityValue = inputvalue
            console.log(items.quantityValue)

        })

        if (input.value > 10) {
            alert('You can have more than 10 value quantity in your cart')
            input.value = 10
        }
        const remove = document.querySelector(`.ULnew li[data-remove=${items.id}]`);

        remove.addEventListener('click', (e) => {
            e.stopPropagation()
            e.preventDefault()
            const createDiv = document.getElementsByClassName('AOTIC')[0]
            const checkIndex = itemInCart.findIndex(item => item.id === items.id)
            itemInCart.splice(checkIndex, 1)
            const pDiv = document.querySelector(`.ULnew li[data-remove=${items.id}]`).parentNode.parentNode
            pDiv.remove()
            checkAddToCart()
            totalQuantity -= 1
            document.getElementById('displayQuanity').innerHTML = totalQuantity
            createDiv.innerHTML = `<span>Cart Item (${totalQuantity})</span>`


            const pop = document.createElement('div')
            pop.innerHTML = `
            <div id="popOutAllert">
        <ul>
            <li>
                ${items.name}  Has beign removed
            </li>
        </ul>
    </div>
        `
            document.body.appendChild(pop)
            setTimeout(() => {
                pop.remove()
            }, 1500)

            storeCartInLocalStorage()
        })



    })
    const createDiv = document.createElement('div')
    createDiv.className = 'AOTIC'
    createDiv.innerHTML = `
<span>Cart Item (${totalQuantity})</span>
`
    document.getElementById('form-nav').insertBefore(createDiv, document.getElementById('form-nav').firstChild)

}

window.storeCartInLocalStorage = function () {

    // Save the total quantity to localStorage
    localStorage.setItem('totalQuantity', totalQuantity);
    // Convert the AddedItem array into a string
    const cartItemsString = JSON.stringify(AddedItem);
    // Store the string in local storage
    localStorage.setItem('cartItems', cartItemsString);
}

window.retrieveCartFromLocalStorage = function () {
    const cartItemsString = localStorage.getItem('cartItems');
    // If there are items in local storage, convert the string back into an array
    if (cartItemsString) {
        AddedItem.push(...JSON.parse(cartItemsString));
        updateAddedCart(AddedItem);
    }

    // Retrieve the total quantity from localStorage
    const storedQuantity = localStorage.getItem('totalQuantity');
    totalQuantity = 0
    // If the total quantity exists, set it
    if (storedQuantity) {
        totalQuantity = parseInt(storedQuantity);
    }

    // Update the quantity display
    document.getElementById('displayQuanity').innerHTML = totalQuantity;
    if (totalQuantity > 0) {
        document.getElementById('displayQuanity').style.display = 'flex';
    }


}

// window.onload = function() {
//     retrieveCartFromLocalStorage();
//     checkAddToCart()
// };





function popOut() {
    document.getElementById('popOute').style.display = 'flex'
    document.getElementById('backdrop').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
}

function popIn() {
    const popOut = document.getElementById('popOute')
    const back = document.getElementById('backdrop')
    const cartSide = document.getElementById('cart');
    if (cartSide) {
        cartSide.style.display = 'none'
    }
    if (back) {
        back.style.display = 'none'
    }
    if (popOut) {
        popOut.style.display = 'none'
    }
    document.querySelector('body').style.overflow = 'visible'

}

window.popOutCart = function () {
    document.getElementById('cart').style.display = 'block'
    document.getElementById('backdrop').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
}
window.cancelcart = function () {
    document.getElementById('cart').style.display = 'none'
    document.getElementById('backdrop').style.display = 'none'
    document.querySelector('body').style.overflow = 'visible'
}

function checkAddToCart() {
    if (AddedItem.length === 0) {
        document.getElementById('form-nav').innerHTML = `
        <div class='checckClass'>
        <h1>Your cart is empty</h1>
        <span><i class="fa-solid fa-store"></i></span>
        </div>
        
        `


        document.getElementById('displayQuanity').style.display = 'none'

    }

}
checkAddToCart()
