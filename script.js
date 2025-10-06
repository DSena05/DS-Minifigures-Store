// ===============================
// Configurações
// ===============================
const STORE_INITIALS = "DS";
const STORE_NAME = "DS Minifigs";
const WHATSAPP_NUMBER = "5592992137851";
const PIX_CODE = "00020126580014BR.GOV.BCB.PIX0136f47f1d09-64e1-470c-bee7-e4a10e72877d5204000053039865802BR5925Diego Daniel Sena de Lemo6009SAO PAULO62140510zuHKOJgUdV630431ED";

// ===============================
// Produtos
// ===============================
const products = [
 { id: "p2", title: "Spider Gwen", price: 15.0, oldPrice: 19.99, promo: true, desc: "Capacete e Base", category: "Marvel", stock: 1, img: "https://i.ebayimg.com/images/g/Ae8AAOSwXpdmKBBK/s-l1200.jpg" },
  { id: "p3", title: "Ichigo Kurosaki", price: 20.0, desc: "Figura especial sob encomenda", category: "Animes", stock: 0, preOrder: true, arrivalTime: "3 semanas - 6 semanas", img: "https://brixtoy.com/wp-content/uploads/2023/11/Anime-Bleach-Ichigo-Kurosaki-WM2567-Minifigures-300x300.jpg" },
  { id: "p4", title: "Tocha Humana", price: 25.00, desc: "Effect e Base de Fogo", category: "Marvel", stock: 1, img: "https://brixtoy.com/wp-content/uploads/2025/07/Marvel-Human-Torch-First-Steps-GH0384-Minifigures.png" },
  { id: "p5", title: "Doutor Destino", price: 22.0, desc: "Figura especial sob encomenda", category: "Marvel", stock: 0, preOrder: true, arrivalTime: "3 semanas- 6 semanas", img: "https://brixtoy.com/wp-content/uploads/2025/08/Marvel-Dr-Doom-SDCC-TV1104-Minifigures.jpg" },
  { id: "p6", title: "Darth Vader", price: 25.0, desc: "Figura especial sob encomenda", category: "Star Wars", stock: 0, preOrder: true, arrivalTime: "3 semanas - 6 semanas", img: "https://shoplineimg.com/5ae29b268d1db9dde9005d08/673718ba8d69d9000abca8e8/800x.jpg?" },
  { id: "p7", title: "Hulk BigFigure", price: 29.99, desc: "Bigfigure Especial a Pronta Entrega", category:"Marvel", stock: 1, img: "hulk.png" },
  { id: "p8", title: "Batman HellBat", price: 25.00, desc: "Armadura HellBat e armas especiais", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "hellbat.png" },
  { id: "p9", title: "Galactus", price: 35.00, desc: "Galactus de 9CM", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "Galactus" },
  { id: "p10", title: "Superman", price: 22.00, desc: "Superman e Krypto", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "Superman" },
  { id: "p11", title: "Professor Xavier", price: 27.00, desc: "Cadeira e 2 heads", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "xavier" },
  { id: "p12", title: "Sung Jin-Woo", price: 27.00, desc: "Capa de Plástico e Duas Espadas", category: "Animes", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "sung jin-Woo" },
  { id: "p13", title: "Roronoa Zoro", price: 27.00, desc: "Braço Articulado com 3 espadas com effect", category: "Animes", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "Zoro" },
];


// ===============================
// Carrinho
// ===============================
let cart = loadCart();

// ===============================
// Banner de teste
// ===============================
const banners = [
  { img: "https://i.pinimg.com/736x/7f/fc/54/7ffc54ce7b4745feeb359054045c23e5.jpg", text: "Promoção Marvel e DC!" },
  { img: "https://images.hdqwalls.com/wallpapers/bthumb/the-mandalorian-precious-moments-with-the-baby-yoda-ii.jpg", text: "Lançamentos Star Wars!" },
  { img: "fundo.png", text: "Kits Especiais DS Minifigs!" }
];

// ===============================
// Inicialização
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  renderProducts(products);
  setupEvents();
  updateCart();
  initHeroBanner();
});

// ===============================
// Renderiza produtos
// ===============================
function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  if(!grid) return;
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.position = "relative";

    // Badge de estoque
    let stockBadge = "";
    if(p.stock > 0) stockBadge = `<span style="color:green;font-weight:bold;">Disponível</span>`;
    else if(p.preOrder) stockBadge = `<span style="color:orange;font-weight:bold;">Encomendar</span>`;
    else stockBadge = `<span style="color:red;font-weight:bold;">Esgotado</span>`;

    card.innerHTML = `
      ${p.promo ? `<div class="badge-promo">Promoção</div>` : ""}
      ${p.preOrder ? `<div class="badge-preorder">Encomenda</div>` : ""}
      <div class="product-thumb">
        <img data-src="${p.img}" alt="${p.title}" class="lazy" />
      </div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <small>Categoria: ${p.category} • ${stockBadge}</small>
      ${p.preOrder ? `<small>Prazo de chegada: ${p.arrivalTime}</small>` : ""}
      <div class="price-row">
        ${p.promo && p.oldPrice 
          ? `<span class="price"><span class="old-price">R$ ${p.oldPrice.toFixed(2).replace(".",",")}</span><span class="new-price">R$ ${p.price.toFixed(2).replace(".",",")}</span></span>` 
          : `<span class="price">R$ ${p.price.toFixed(2).replace(".",",")}</span>`}
        <button class="btn-primary add" data-id="${p.id}">${p.preOrder ? "Encomendar" : "Adicionar"}</button>
      </div>
    `;

    grid.appendChild(card);
  });

  setupCardEvents();
  lazyLoadImages();
}

// ===============================
// Eventos do card
// ===============================
function setupCardEvents() {
  document.querySelectorAll(".add").forEach(btn => btn.addEventListener("click", e => addToCart(e.target.dataset.id)));
}

// ===============================
// Adicionar ao carrinho
// ===============================
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { 
    if (existing.qty < prod.stock) existing.qty++; 
    else return alert("Estoque máximo atingido!"); 
  } else cart.push({id, qty:1});

  saveCart();
  updateCart();

  // Abrir carrinho automaticamente
  const cartModal = document.getElementById("cart-modal");
  if(cartModal) cartModal.classList.add("show");
}

// ===============================
// Atualiza carrinho com desconto progressivo
// ===============================
function updateCart() {
  const count = document.getElementById("cart-count");
  if(count) count.textContent = cart.reduce((s,i)=>s+i.qty,0);

  const list = document.getElementById("cart-items");
  if(!list) return;
  list.innerHTML = "";
  let total=0;
  let itemCount=0;

  cart.forEach(it=>{
    const p = products.find(x=>x.id===it.id);
    if(!p) return;
    total += p.price*it.qty;
    itemCount += it.qty;
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `<div><strong>${p.title}</strong><br>Qtd: ${it.qty}<br>Subtotal: R$ ${(p.price*it.qty).toFixed(2).replace(".",",")}</div>
    <button class="btn-outline remove" data-id="${it.id}">Remover</button>`;
    list.appendChild(li);
  });

  // Desconto progressivo dinâmico
  let desconto = 0;
  if(itemCount >= 5) desconto = total*0.30;
  else if(itemCount >=3) desconto = total*0.15;
  const totalFinal = total - desconto;

  const totalDiv = document.getElementById("cart-total");
  if(desconto > 0){
    totalDiv.innerHTML = `
      <div>Subtotal: R$ ${total.toFixed(2).replace(".",",")}</div>
      <div>Desconto: -R$ ${desconto.toFixed(2).replace(".",",")}</div>
      <strong>Total: R$ ${totalFinal.toFixed(2).replace(".",",")}</strong>
    `;
  } else {
    totalDiv.textContent = total.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
  }

  document.querySelectorAll(".remove").forEach(btn=>btn.addEventListener("click", e=>{
    cart = cart.filter(i=>i.id!==e.target.dataset.id);
    saveCart();
    updateCart();
  }));
}

// ===============================
// Hero/banner rotativo
// ===============================
function initHeroBanner() {
  const hero = document.getElementById("hero");
  if(!hero) return;

  let currentBanner = 0;

  function showBanner() {
    if(!hero) return;
    const h2 = hero.querySelector("h2");
    if(h2) h2.textContent = banners[currentBanner].text;
    hero.style.backgroundImage = `url(${banners[currentBanner].img})`;
    currentBanner = (currentBanner + 1) % banners.length;
  }

  showBanner();
  setInterval(showBanner, 5000);
}

// ===============================
// Lazy Load imagens com placeholder
// ===============================
function lazyLoadImages(){
  const imgs = document.querySelectorAll("img.lazy");
  imgs.forEach(img=>{
    const src=img.dataset.src;
    if(src){
      img.style.filter = "blur(6px)";
      img.src=src;
      img.onload=()=>{
        img.classList.add("loaded");
        img.style.filter="none";
      };
    }
  });
}

// ===============================
// Modal PIX
// ===============================
function showPix(){
  const pixModal = document.getElementById("pix-modal");
  if(!pixModal) return;
  const pixField = document.getElementById("pixCode");
  if(pixField) pixField.value = PIX_CODE;
  renderPixQRCode();
  pixModal.style.display = "flex";
}

function copiarPix() {
  const pixCode = document.getElementById("pixCode");
  pixCode.select();
  pixCode.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Código PIX copiado!");
}

function closePix(){
  const pixModal=document.getElementById("pix-modal");
  if(pixModal) pixModal.style.display="none";
}

// ===============================
// Setup eventos gerais
// ===============================
function setupEvents(){
  document.getElementById("cart-btn").addEventListener("click",()=>document.getElementById("cart-modal").classList.add("show"));
  document.getElementById("close-cart").addEventListener("click",()=>document.getElementById("cart-modal").classList.remove("show"));
  document.getElementById("clear-cart").addEventListener("click",()=>{
    cart=[]; saveCart(); updateCart();
  });
  document.getElementById("checkout").addEventListener("click",()=>{
    if(cart.length===0) return alert("Carrinho vazio");
    document.getElementById("cart-modal").classList.remove("show");
    showPix();
  });

  document.getElementById("search").addEventListener("input", e=>{
    const q = e.target.value.toLowerCase();
    renderProducts(products.filter(p=>`${p.title} ${p.desc}`.toLowerCase().includes(q)));
  });

  document.getElementById("sort").addEventListener("change", e=>{
    let arr=[...products];
    if(e.target.value==="price-asc") arr.sort((a,b)=>a.price-b.price);
    if(e.target.value==="price-desc") arr.sort((a,b)=>b.price-a.price);
    if(e.target.value==="name-asc") arr.sort((a,b)=>a.title.localeCompare(b.title));
    renderProducts(arr);
  });

  const categorySelect = document.getElementById("category");
  const promoCheckbox = document.getElementById("promo-only");

  function applyFilters(){
    let arr = [...products];
    const cat = categorySelect.value;
    if(cat!=="all") arr = arr.filter(p=>p.category===cat);
    if(promoCheckbox.checked) arr = arr.filter(p=>p.promo);
    renderProducts(arr);
  }

  categorySelect.addEventListener("change", applyFilters);
  promoCheckbox.addEventListener("change", applyFilters);

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click",()=>{
    const body=document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");
    const theme=body.classList.contains("dark")?"dark":"light";
    themeToggle.textContent=theme==="dark"?"🌙":"☀️";
    localStorage.setItem("theme",theme);
  });

  const savedTheme=localStorage.getItem("theme");
  if(savedTheme){
    document.body.classList.add(savedTheme);
    themeToggle.textContent=savedTheme==="dark"?"🌙":"☀️";
  }
}

// ===============================
// QR Code PIX
// ===============================
function renderPixQRCode(){
  const pixImg = document.getElementById("pix-qrcode");
  if(pixImg) pixImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(PIX_CODE)}`;
}

// ===============================
// WhatsApp
// ===============================
function sendWhatsappOrder(){
  if(cart.length===0) return alert("Carrinho vazio");

  let hasPreOrder = cart.some(it => products.find(p => p.id === it.id).preOrder);

  let msg = `Olá! Quero finalizar meu pedido na ${STORE_NAME}:%0A%0A`;
  cart.forEach(it => {
    const p = products.find(x => x.id === it.id);
    msg += `- ${p.title} x${it.qty} = R$ ${(p.price*it.qty).toFixed(2)}%0A`;
  });

  const total = cart.reduce((s,it) => s + products.find(p=>p.id===it.id).price*it.qty,0);

  // Desconto progressivo no WhatsApp também
  let desconto = 0;
  const itemCount = cart.reduce((s,i)=>s+i.qty,0);
  if(itemCount >= 5) desconto = total*0.30;
  else if(itemCount >=3) desconto = total*0.15;
  const totalFinal = total - desconto;

  msg += `%0ATotal: R$ ${totalFinal.toFixed(2)}%0A%0A`;

  if(hasPreOrder){
    msg += "Este pedido é uma encomenda. Aguardo confirmação do prazo de chegada.";
  } else {
    msg += "Pagamento via PIX já realizado.";
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");

  cart = [];
  saveCart();
  updateCart();
  closePix();
  alert("Pedido enviado! Aguarde o contato via WhatsApp.");
}

// ===============================
// Persistência
// ===============================
function saveCart(){localStorage.setItem("cart",JSON.stringify(cart));}
function loadCart(){return JSON.parse(localStorage.getItem("cart")||"[]");}
