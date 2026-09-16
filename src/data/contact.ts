// Dados de contato reais da cliente (Leya Santos), confirmados em
// Clientes/@leyasantoshair/Identidade Visual/Referências, Imagens, Videos e CTA/Direcionamentos - CTA.txt
// Nenhum valor abaixo é inventado — ver site-forge/research/identity.json.contatos_confirmados.

const whatsappPhone = "351961199781";

/** Gera o link do WhatsApp com uma mensagem já preenchida — nunca abrir um
 * chat em branco (achado P1 do /impeccable critique 2026-09-10: nenhum dos
 * 8 links + botão flutuante tinha texto, o visitante precisava inventar a
 * primeira mensagem sozinho). */
function whatsappLink(mensagem: string): string {
  return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(mensagem)}`;
}

export const contact = {
  whatsapp: whatsappLink("Olá Leya! Vim pelo site e queria marcar um horário 💛"),
  whatsappFor: whatsappLink,
  whatsappDisplay: "+351 961 199 781",
  instagram: "https://www.instagram.com/leyasantoshair",
  instagramHandle: "@leyasantoshair",
  facebook: "https://www.facebook.com/share/19XNZzoiaZ/?mibextid=LQQJ4d",
  email: "dossantoscamilolea@gmail.com",
  telefone: "tel:+351961199781",
  telefoneDisplay: "+351 961 199 781",
  endereco: "R. São Tomás de Aquino 6B, 1600-203 Lisboa, Portugal",
  enderecoMapsUrl:
    "https://www.google.com/maps/place/R.+S%C3%A3o+Tom%C3%A1s+de+Aquino+6B,+1600-203+Lisboa,+Portugal/@38.7523139,-9.1733296,17z",
  horario: "09:30 – 20:00",
  videoPodcastYoutube: "https://www.youtube.com/watch?v=6_3EPeOLOAI",
  linkSoloBooking: "https://solobooking.base44.app/Leya-Santos",
} as const;

// Especialidades = as áreas de expertise/posicionamento da Leya (o "porquê escolher
// ela"), não a lista de serviços com preço — que já vive em `servicos` abaixo.
// Corrigido em 2026-09-10 (achado P2 do /impeccable critique: a lista antiga repetia,
// quase palavra por palavra, os nomes dos itens de `servicos`, fazendo o visitante ler
// o mesmo conteúdo duas vezes). Termos abaixo vêm do próprio posicionamento dela no
// Instagram — "ESPECIALISTA EM MADEIXAS" na bio, hashtags de loiro/morena
// iluminada/ruivo, "visagismo" e "terapia capilar" nos destaques e legendas.
export const especialidades = [
  "Especialista em Madeixas",
  "Loiros",
  "Morena Iluminada",
  "Ruivos",
  "Balayage",
  "Correção de Cor",
  "Visagismo",
  "Terapia Capilar",
] as const;

// Tabela real extraída da plataforma de agendamento da cliente (Solo Booking).
// Ver Site de Agendamento (Referência)/Análise Estrutural.md.
export const servicos = [
  { nome: "Brushing", duracao: "1h", preco: "a partir de 25€" },
  {
    nome: "Madeixas | com avaliação",
    descricao: "Teste de mecha + madeixa + nutrição + finalização",
    duracao: "4h",
    preco: "a partir de 180€",
  },
  {
    nome: "Tratamento (Truss, NYCE, Wella)",
    descricao: "Reconstrução, nutrição ou hidratação, com finalização",
    duracao: "1h",
    preco: "a partir de 60€",
  },
  { nome: "Corte de Cabelo", descricao: "Corte + finalização", duracao: "1h", preco: "50€" },
  { nome: "Coloração de Cabelo", duracao: "1h15", preco: "a partir de 55€" },
  { nome: "Alisamento Brasileiro", duracao: "2h", preco: "a partir de 150€" },
  { nome: "Botox Capilar", descricao: "Alinhamento dos fios", duracao: "1h30", preco: "a partir de 120€" },
  { nome: "Maquilhagem", duracao: "1h15", preco: "a partir de 60€" },
  { nome: "Sobrancelhas", descricao: "Procedimento na pinça", duracao: "20min", preco: "20€" },
  { nome: "Penteado", descricao: "Inclui lavagem e escova", duracao: "1h", preco: "a partir de 55€" },
] as const;

// Depoimentos reais, verbatim, coletados nos comentários do Instagram.
// Ver Análise de Instagram.md, seção "Provas Sociais e Diferenciais".
export const depoimentos = [
  {
    autor: "@caraimundo",
    texto:
      "A Musa entrega o seu trabalho! Há 7 anos contigo e virão muitos mais! Incrível, profissional e maravilhosa 🤍",
    contexto: "Cliente há 7 anos",
  },
  {
    autor: "@ariadnaoliveiraferreira",
    texto: "A melhor de Portugal❤️",
  },
  {
    autor: "cliente do Instagram",
    texto: "Trabalho impecável.",
  },
  {
    autor: "cliente do Instagram",
    texto: "Amei demais 😍❤️ era exatamente o que eu queria!!",
  },
] as const;
