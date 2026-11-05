(function(){
var WHATS="5521979956532";
var K_GIFTS="chaHeitor.presentes.v2", K_RSVP="chaHeitor.rsvp";
var LISTA=[["Enxoval e roupas", ["Macacões", "Conjuntinho", "Cueiro", "Calças com pé (mijão)", "Calças com pé (mijão)", "Mantas de tricô", "Mantas de tricô"]], ["Higiene e banho", ["Banheira com suporte: 1", "Toalhas com capuz — 1 pacote de fralda M", "Toalhas com capuz — 1 pacote de fralda P", "Toalhas com capuz — 1 pacote de fralda G", "Fraldas de pano — 1 pacote de fralda RN", "Fraldas de pano — 1 pacote de fralda G", "Lenços umedecidos — 1 pacote de fralda G", "Lenços umedecidos — 1 pacote de fralda RN", "Lenços umedecidos — 1 pacote de fralda M", "Lenços umedecidos — 1 pacote de fralda P", "Lenços umedecidos — 1 pacote de fralda G", "Lenços umedecidos — 1 pacote de fralda M", "Lenços umedecidos — 1 pacote de fralda G", "Lenços umedecidos — 1 pacote de fralda G", "Pomada para assaduras — 1 pacote de fralda P", "Pomada para assaduras — 1 pacote de fralda M", "Pomada para assaduras — 1 pacote de fralda M", "Pomada para assaduras — 1 pacote de fralda G", "Pomada para assaduras — 1 pacote de fralda G", "Pomada para prevenção — 1 pacote de fralda G", "Pomada para prevenção — 1 pacote de fralda G", "Pomada para prevenção — 1 pacote de fralda G", "Pomada para prevenção — 1 pacote de fralda P", "Sabonete neutro — 1 pacote de fralda G", "Sabonete neutro — 1 pacote de fralda P", "Shampoo neutro — 1 pacote de fralda M", "Shampoo neutro — 1 pacote de fralda G", "Colônia — 1 pacote de fralda G", "Colônia — 1 pacote de fralda G", "Hidratante — 1 pacote de fralda G", "Hidratante — 1 pacote de fralda G", "Algodão Quadrado — 1 pacote de fralda RN", "Algodão Quadrado — 1 pacote de fralda G", "Algodão Quadrado — 1 pacote de fralda G", "Algodão Quadrado — 1 pacote de fralda G", "Algodão Quadrado — 1 pacote de fralda G", "Cotonetes — 1 pacote de fralda P", "Cotonetes — 1 pacote de fralda G", "Cotonetes — 1 pacote de fralda G", "Cotonetes — 1 pacote de fralda G", "Cotonetes — 1 pacote de fralda M", "Aspirador nasal — 1 pacote de fralda G", "Chupeta — 1 pacote de fralda G", "Chupeta — 1 pacote de fralda G", "Álcool 70 — 1 pacote de fralda G", "Álcool 70 — 1 pacote de fralda G", "Álcool 70 — 1 pacote de fralda G", "Álcool 70 — 1 pacote de fralda G", "Talco — 1 pacote de fralda G", "Talco — 1 pacote de fralda G"]], ["Alimentação", ["Escova para mamadeira: 1 — 1 pacote de fralda P", "Esterilizador: 1", "Babadores — 1 pacote de fralda G", "Babadores — 1 pacote de fralda RN", "Paninhos de boca — 1 pacote de fralda M", "Paninhos de boca — 1 pacote de fralda G", "Kit refeição para bebê — 1 pacote de fralda P", "Kit refeição para bebê — 1 pacote de fralda G"]], ["Quarto e sono", ["Lençóis com elástico — 1 pacote de fralda G", "Lençóis com elástico — 1 pacote de fralda G", "Protetor de berço: 1", "Kit berço: 1", "Móbile: 1", "Babá eletrônica: 1", "Ninho de bebê"]], ["Passeio e segurança", ["Carrinho de bebê: 1", "Bebê conforto: 1", "Trocador portátil: 1", "Canguru: 1"]], ["Diversão e estímulo", ["Tapete de atividades: 1", "Tapete de atividades: 1", "Livrinhos de plástico — 1 pacote de fralda G", "Livrinhos de plástico — 1 pacote de fralda G", "Brinquedos de banho — 1 pacote de fralda G"]]];

function $(id){return document.getElementById(id)}
function load(k,def){try{var v=localStorage.getItem(k);return v?JSON.parse(v):def}catch(e){return def}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function abrirWhats(url){window.open(url,"_blank","noopener")}

/* contagem regressiva */
function contagem(){
 var alvo=new Date(2026,10,22,12,0,0), d=alvo-new Date(), el=$("count");
 if(d<=0){el.textContent="A aventura começa hoje! 💚";return}
 var dias=Math.ceil(d/864e5);
 el.textContent=dias===1?"Falta 1 dia para a aventura":"Faltam "+dias+" dias para a aventura";
}
contagem();

/* presença */
var rs=load(K_RSVP,{nome:"",qtd:1});
$("nome").value=rs.nome||""; $("qtd").value=rs.qtd||1;
$("rsvpBtn").onclick=function(){
 var nome=$("nome").value.trim(), qtd=parseInt($("qtd").value,10);
 var er=$("rsvpErro");
 if(!nome){er.textContent="Digite seu nome completo.";$("nome").focus();return}
 if(!qtd||qtd<1){er.textContent="Informe quantas pessoas vão.";$("qtd").focus();return}
 er.textContent="";
 save(K_RSVP,{nome:nome,qtd:qtd});
 var msg="Olá! Confirmo presença no Chá do Heitor 💚\nNome: "+nome+"\nPessoas: "+qtd+"\nData: 22/11/2026 12h - Nova Guanabara";
 abrirWhats("https://wa.me/"+WHATS+"?text="+encodeURIComponent(msg));
};

/* presentes */
var gifts=load(K_GIFTS,null);
if(!gifts){gifts=[];LISTA.forEach(function(c){c[1].forEach(function(n){gifts.push({c:c[0],n:n,by:""})})});save(K_GIFTS,gifts)}
var alvoIdx=-1;

function renderGifts(){
 var tb=$("gifts"); tb.innerHTML="";
 var ultima="";
 gifts.forEach(function(g,i){
  if(g.c&&g.c!==ultima){ultima=g.c;var h=document.createElement("tr");h.className="cat";var hc=document.createElement("td");hc.colSpan=4;hc.textContent=g.c;h.appendChild(hc);tb.appendChild(h)}
  var tr=document.createElement("tr");
  var t1=document.createElement("td"); t1.textContent=g.n;
  if(g.custom||g.c==="Outros"){
   var d=document.createElement("button"); d.className="btn mini del"; d.textContent="Desfazer"; d.title="Remover este item adicionado";
   d.onclick=function(){if(confirm("Remover \""+g.n+"\" da lista?"+(g.by?" A reserva de "+g.by+" também será apagada.":""))){gifts.splice(i,1);save(K_GIFTS,gifts);renderGifts()}};
   t1.appendChild(d);
  }
  var t2=document.createElement("td"); t2.dataset.l="Status";
  var s=document.createElement("span"); s.className="st "+(g.by?"res":"disp");
  s.textContent=g.by?"Reservado por "+g.by:"Disponível"; t2.appendChild(s);
  var t3=document.createElement("td"); t3.dataset.l="Quem vai dar"; t3.textContent=g.by||"—";
  var t4=document.createElement("td");
  var b=document.createElement("button");
  if(g.by){b.className="btn fantasma mini";b.textContent="Liberar";b.onclick=function(){if(confirm("Liberar \""+g.n+"\" para outra pessoa?")){gifts[i].by="";save(K_GIFTS,gifts);renderGifts()}}}
  else{b.className="btn mini";b.textContent="Reservar";b.onclick=function(){abrirModal(i)}}
  t4.appendChild(b);
  tr.appendChild(t1);tr.appendChild(t2);tr.appendChild(t3);tr.appendChild(t4);tb.appendChild(tr);
 });
}
function abrirModal(i){
 alvoIdx=i; $("mp").textContent="Você vai dar: "+gifts[i].n; $("quem").value="";
 $("modal").classList.add("on"); setTimeout(function(){$("quem").focus()},50);
}
function fecharModal(){$("modal").classList.remove("on");alvoIdx=-1}
function confirmar(){
 var nome=$("quem").value.trim();
 if(!nome){$("quem").focus();return}
 if(alvoIdx>=0){gifts[alvoIdx].by=nome;save(K_GIFTS,gifts);renderGifts()}
 fecharModal();
}
$("ok").onclick=confirmar; $("cancel").onclick=fecharModal;
$("quem").addEventListener("keydown",function(e){if(e.key==="Enter")confirmar()});
$("modal").addEventListener("click",function(e){if(e.target===this)fecharModal()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")fecharModal()});

function adicionar(){
 var v=$("novo").value.trim(); if(!v){$("novo").focus();return}
 gifts.push({c:"Outros",n:v,by:"",custom:true}); save(K_GIFTS,gifts); $("novo").value=""; renderGifts();
}
$("addBtn").onclick=adicionar;
$("novo").addEventListener("keydown",function(e){if(e.key==="Enter")adicionar()});
renderGifts();

/* botões flutuantes: levam às seções */
function rolar(id){
 var r=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 $(id).scrollIntoView({behavior:r?"auto":"smooth",block:id==="rsvp"?"center":"start"});
 return r;
}
$("goGifts").onclick=function(){rolar("presentes")};
$("share").onclick=function(){
 var r=rolar("rsvp");
 setTimeout(function(){$("nome").focus({preventScroll:true})},r?0:500);
};
/* música de fundo (musica.mp3 na mesma pasta) */
var bgm=$("bgm"), mb=$("music");
bgm.volume=0.35;
function musicaEstado(on){mb.classList.toggle("on",on);mb.textContent=on?"🔊":"🎵";mb.setAttribute("aria-pressed",on?"true":"false");mb.setAttribute("aria-label",on?"Pausar música":"Tocar música")}
function aviso(txt){
 var t=document.createElement("div"); t.className="toast"; t.setAttribute("role","status"); t.textContent=txt;
 document.body.appendChild(t); setTimeout(function(){t.remove()},4000);
}
function musicaFalhou(e){
 musicaEstado(false);
 if(e&&e.name==="AbortError")return;
 aviso("Não foi possível tocar a música.");
 if(e&&e.name==="NotSupportedError")mb.style.display="none";
}
bgm.addEventListener("play",function(){musicaEstado(true)});
bgm.addEventListener("pause",function(){musicaEstado(false)});
bgm.addEventListener("error",function(){musicaFalhou({name:"NotSupportedError"})});
mb.onclick=function(){
 if(bgm.paused){
  musicaEstado(true);
  try{var p=bgm.play(); if(p&&p.catch)p.catch(musicaFalhou)}catch(e){musicaFalhou(e)}
 }else{bgm.pause()}
};
})();
