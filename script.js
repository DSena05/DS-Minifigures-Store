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
  { id: "p2", title: "Spider Gwen", price: 10.0, oldPrice: 19.99, promo: true, desc: "Capacete e Base", category: "Marvel", stock: 1, img: "https://i.ebayimg.com/images/g/Ae8AAOSwXpdmKBBK/s-l1200.jpg" },
  { id: "p3", title: "Ichigo Kurosaki", price: 20.0, desc: "Figura especial sob encomenda", category: "Animes", stock: 0, preOrder: true, arrivalTime: "3 semanas - 6 semanas", img: "https://brixtoy.com/wp-content/uploads/2023/11/Anime-Bleach-Ichigo-Kurosaki-WM2567-Minifigures-300x300.jpg" },
  { id: "p4", title: "Doutor Destino", price: 22.0, desc: "Figura especial sob encomenda", category: "Marvel", stock: 0, preOrder: true, arrivalTime: "3 semanas- 6 semanas", img: "https://brixtoy.com/wp-content/uploads/2025/08/Marvel-Dr-Doom-SDCC-TV1104-Minifigures.jpg" },
  { id: "p5", title: "Darth Vader", price: 25.0, desc: "Figura especial sob encomenda", category: "Star Wars", stock: 0, preOrder: true, arrivalTime: "3 semanas - 6 semanas", img: "https://shoplineimg.com/5ae29b268d1db9dde9005d08/673718ba8d69d9000abca8e8/800x.jpg?" },
  { id: "p6", title: "Hulk BigFigure", price: 29.99, desc: "Bigfigure Especial a Pronta Entrega", category:"Marvel", stock: 1, img: "hulk.png" },
  { id: "p7", title: "Batman HellBat", price: 25.00, desc: "Armadura HellBat e armas especiais", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "hellbat.png" },
  { id: "p8", title: "Galactus", price: 35.00, desc: "Galactus de 9CM", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "galactus.png" },
  { id: "p9", title: "Superman", price: 22.00, desc: "Superman e Krypto", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "superman.png" },
  { id: "p10", title: "Professor Xavier", price: 27.00, desc: "Cadeira e 2 heads", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "xavier.png" },
  { id: "p11", title: "Sung Jin-Woo", price: 27.00, desc: "Capa de Plástico e Duas Espadas", category: "Animes", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "jinwoo.png" },
  { id: "p12", title: "Roronoa Zoro", price: 27.00, desc: "Braço Articulado com 3 espadas com effect", category: "Animes", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "zoro.png" },
  { id: "p13", title: "Batman The Dark Knight", price: 19.99, desc: "Capa de Plástico", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "data:image/jpeg;base64,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" },
  { id: "p14", title: "Coringa Heath Ledger", price: 19.99, desc: "Arma e Cartas", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "data:image/jpeg;base64,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" },
  { id: "p15", title: "Quarteto Fantástico", price: 65.00, desc: "Equipe Quarteto Fantástico Completo com Acesórrios e 1 surfista(Escolha)", category: "Marvel, Kits", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "quarteto.png" },
  { id: "p16", title: "Luffy Gear 5", price: 25.00, desc: "Braço elastico com effect e desenho de placa", category: "Animes", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "luffy.png" },
  { id: "p17", title: "Homem de Ferro", price: 19.99, desc: "Armadura e Equipamentos", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "ironman.png" },
  { id: "p18", title: "Homem Aranha", price: 22.00, desc: "Mascara pa por na mão e rosto de peter parker", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "miranha.png" },
  { id: "p19", title: "The Flash", price: 19.99, desc: "Máscara detalhada e effect de raio", category: "DC", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "flash.png" },
  { id: "p20", title: "Deadpool", price: 19.99, desc: "2 Katanas e 2 Pistolas", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "deadpool.png" },
  { id: "p21", title: "Wolverine", price: 19.99, desc: "Máscara Clássica e Garras", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "wolverine.png" },
  { id: "p22", title: "Boba Fett", price: 19.99, desc: "Armas e Armadura Mandaloriana", category: "Star Wars", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "Boba.png" },
  { id: "p23", title: "Anakin Skywalker (Sith)", price: 25.00, desc: "Sabre de Luz e Capa preta", category: "Star Wars", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "Anakin.png" },
  { id: "p24", title: "Obi-wan Kenobi", price: 25.00, desc: "Sabre de Luz e Capa Marrom Jedi", category: "Star Wars", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "obiwan.png" },
  { id: "p25", title: "Mandaloriano and Grogu", price: 35.00, desc: "Kit Esecial Mandaloriano e Grogu", category: "Star Wars, Kits", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "mandoegrogu.png" },
  { id: "p26", title: "Sr Fantástico", price: 25.00, desc: "Braço Articulado com efeito elastico", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico1.png" },
  { id: "p27", title: "Mulher Invisível", price: 19.99, desc: "Braço Articulado com efeito e bebê Franklin", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico2.png" },
  { id: "p28", title: "Johnny Storm", price: 19.99, desc: "Braço Articulado com effect de fogo", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico3.png" },
  { id: "p29", title: "O Coisa", price: 22.00, desc: "Braço Articulado com Opção de Escolha de Corpo", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico4.png"},
  { id: "p30", title: "Surfista Prateado (Norrin Radd)", price: 21.00, desc: "Braço Articulado com Prancha e Pernas especiais" , category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico5.png" },
  { id: "p31", title: "Surfista Prateada(Shalla-Bal)", price: 21.00, desc: "Braço Articulado com Prancha e Pernas especiais", category: "Marvel", stock: 0, preOrder:true, arrivalTime: "3 semanas - 6 semanas", img: "fantastico6.png" },
    
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
