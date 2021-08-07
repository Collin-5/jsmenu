const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


  const menuItems = document.querySelector(".menuitems");
  
  const btncontainer = document.querySelector(".buttons");
  

  window.addEventListener('load', function(){
      display(menu);
  })

  function display(menu){
    const items = menu.map(function(item){
      return `<div class="item">
      <div class="image img-responsive"><img src="${item.img}" alt="${item.title}" width="200px" height="100px"></div>
      <div class="paragraph">
          <header><h6>${item.title}</h6> <span class="price text-success">$${item.price}</span></header>
          <hr>
          <p>${item.desc}</p>
      </div>
  </div>`
  }).join("");
  menuItems.innerHTML = items;
  }

  const btnscategory = menu.reduce(function(values, item){
    if (!values.includes(item.category)){
      values.push(item.category);
      
    }
    return values;
  },["all"])

  const btns = btnscategory.map(function(btn){
    return `<button class="btn btn-primary" data-id="${btn}">${btn}</button>`
  }).join("");
  btncontainer.innerHTML = btns;
const buttons = document.querySelectorAll(".btn");
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const filtered = menu.filter(function(item){
        if (item.category === category){
          return item;
        }
      })
      if (category === "all"){
        display(menu);
      }
      else {
        display(filtered);
      }
    })
  })

  