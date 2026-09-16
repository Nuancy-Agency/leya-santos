---
name: Leya Santos Hair
description: Marca pessoal de uma colorista em Lisboa — cuidado técnico e autoestima na mesma frase, nunca salão genérico.
colors:
  tinta-quente: "#1A1A1A"
  papel-cru: "#F5F0E6"
  linho: "#ECE3D3"
  cobre-vivido: "#B87333"
  terracota-acesa: "#8B4513"
typography:
  display:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "normal"
  headline:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
  title:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  full: "9999px"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  portrait: "2rem"
spacing:
  container: "72rem"
  container-narrow: "56rem"
  gutter: "1.25rem"
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.tinta-quente}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.terracota-acesa}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-quente}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
---

# Design System: Leya Santos Hair

## Overview

**Creative North Star: "O Ritual de Se Permitir"**

O site é a extensão visual do próprio manifesto da Leya ("Permita-se. Você é o maior projeto da sua vida") — quente e acolhedor por princípio, nunca corporativo ou clínico. A base é uma serifada editorial (Fraunces, eixo óptico suave/orgânico, não uma Didone rígida) contra uma sans humanista neutra (Work Sans), sobre um fundo de "papel" quente em vez de branco puro. O preto quase-puro (Tinta Quente) carrega texto e o botão de ação principal; o terracota é a única cor de link/hover/preço — a voz de ação do site; o cobre fica reservado a toques discretos (chips, anel de foco). Depoimentos e blocos de contato ficam propositalmente chapados (só borda, sem sombra) — a sombra suave é reservada só para fotografia e vídeo reais, que são a prova mais forte do trabalho.

O sistema rejeita explicitamente o clichê de salão genérico (preto/branco duro, ícones de tesoura/pente) e não repete a paleta fria/escura já usada por outra cliente da agência — aqui o calor da paleta (terracota, cobre, papel cru) é o próprio argumento visual de "cuidado e técnica", não decoração.

**Key Characteristics:**
- Serifada editorial (Fraunces) com eixo óptico orgânico contra sans neutra (Work Sans) — nunca uma terceira família.
- Terracota como única cor de ação/link/preço; cobre como acento discreto, nunca superfície grande.
- Sombra suave reservada a fotografia/vídeo real e ao botão flutuante de WhatsApp; cards de conteúdo (depoimentos, contato, serviços) ficam chapados, só com borda `ink/10`.
- Retratos da própria Leya (Hero, Sobre) com raio maior (`2rem`) — uma "moldura mais macia" reservada só a esses dois retratos pessoais.
- CTA único e recorrente: WhatsApp — Solo Booking aparece sempre como alternativa secundária, nunca como caminho primário.

## Colors

Paleta restrita e quente: preto quase-puro para texto e ação primária, terracota como a única cor de voz/link, cobre como acento raro, papel cru e linho como as duas bases neutras.

### Primary
- **Tinta Quente** (`#1A1A1A`): texto padrão do corpo inteiro, fundo do botão de ação principal (estado de repouso), fundo do cabeçalho móvel e do rodapé.

### Secondary
- **Terracota Acesa** (`#8B4513`): a cor de ação do site — hover de todo botão primário, todo link de texto (Instagram, Solo Booking, canais de contato), valor de preço nos Serviços, e o rótulo em caixa-alta que abre cada seção. Se um elemento convida a clicar ou destaca um valor, é essa cor.

### Tertiary
- **Cobre Vivido** (`#B87333`): acento raro — preenchimento a 10% e borda a 30% nos chips de Especialidades, anel de foco de teclado (`:focus-visible`), hover de borda nos cartões de canal de contato e nos links do rodapé. Nunca usado como texto de corpo nem como superfície grande.

### Neutral
- **Papel Cru** (`#F5F0E6`): fundo padrão do body e do cabeçalho (a 90% com blur) — um quase-branco quente, não branco puro.
- **Linho** (`#ECE3D3`): fundo alternado das seções pares (Sobre, Serviços, Depoimentos, Localização), sempre a 60% de opacidade sobre o papel base — nunca sólido.

### Named Rules
**The One Action Color Rule.** Terracota Acesa é a única cor usada para convidar a ação (hover de botão, link, preço). Cobre nunca substitui essa função — ele é acento estrutural (chip, foco), não convite a clicar.
**The Rare Metal Rule.** Cobre Vivido nunca preenche um bloco grande — é traço, chip ou anel de foco, sempre em opacidade reduzida (10-30%) quando usado como fundo.

## Typography

**Display Font:** Fraunces (variável, peso 400–700, eixo óptico orgânico — com ui-serif, Georgia, serif de fallback)
**Body Font:** Work Sans (com ui-sans-serif, system-ui, sans-serif de fallback)

**Character:** Serifada editorial de traço suave/orgânico (Fraunces) contra uma sans humanista neutra e legível (Work Sans) — a mesma dupla em todo título e todo corpo do site, sem terceira família. A curva macia de Fraunces é o que torna o sistema "quente" mesmo em preto sobre papel cru.

### Hierarchy
- **Display** (peso 600, `clamp(2.25rem, 6vw, 3.75rem)`, leading 1.08): título do Hero, exclusivo da primeira dobra.
- **Headline** (peso 600, `text-3xl` a `text-4xl`, leading ~1.15): H2 de cada seção — escala idêntica em todas (Sobre, Especialidades, Serviços, Galeria, Depoimentos, Podcast, Localização, CTA final), sem exceção.
- **Title** (peso 600, `text-lg`/`text-xl`): nome de serviço e valor de preço nos Serviços, citação do manifesto em Sobre, texto de cada depoimento.
- **Body** (peso 400, `text-base`, texto a 70–90% de opacidade sobre Tinta Quente): parágrafos de corpo em Work Sans. Piso de opacidade subido de 60% pra 70% em 2026-09-10 (achado P1 do `/impeccable critique` — `text-ink/60` falhava WCAG AA em 5 elementos medidos, entre 3.26:1 e 4.34:1; `text-ink/70` mede 6.08:1+).
- **Label** (peso 600, `text-xs`/`text-sm`, `letter-spacing` largo, uppercase, cor Terracota Acesa): rótulo que abre cada seção (ex. "Sobre", "Depoimentos"), rótulo de canal de contato.

## Layout

Contêiner central `max-w-6xl` (72rem/1152px) na maioria das seções; `max-w-4xl` (56rem) em Serviços e CTA final, onde o conteúdo é mais estreito e centrado para leitura; `max-w-3xl` no Podcast. Gutter lateral `px-5` (20px) em toda seção. Ritmo vertical `py-20` (80px) em mobile, `py-28` (112px) em `md:` na maioria das seções; Especialidades usa um ritmo mais curto (`py-16`/`py-20`) por ser uma lista de chips, não um bloco de leitura. Hero, Sobre e Localização usam grade de duas colunas (`md:grid-cols-2`) com ordem de coluna invertida em mobile vs. desktop (retrato sempre visualmente perto do texto que o descreve). Header é `sticky top-0` com fundo `papel cru` a 90% e `backdrop-blur`.

## Elevation & Depth

Sistema majoritariamente chapado: cartões de conteúdo (depoimentos, canais de contato, lista de serviços) têm só borda `ink/10`, sem sombra nenhuma. Sombra suave e difusa é reservada exclusivamente a fotografia e vídeo reais (retratos do Hero/Sobre, o player do podcast, o mapa) e ao botão flutuante de WhatsApp — nunca a um bloco estrutural ou a um cartão de texto.

### Shadow Vocabulary
- **Ambient Media** (`box-shadow: 0 10px 15px -3px rgb(26 26 26 / 0.1), 0 4px 6px -4px rgb(26 26 26 / 0.1)` — Tailwind `shadow-lg shadow-ink/10`): retratos da Leya, player de vídeo do podcast, mapa incorporado.
- **Ambient Floating** (mesma família, `shadow-ink/20`): botão flutuante de WhatsApp — a opacidade maior (20% vs. 10%) é o que separa um elemento fixo/sobreposto de um elemento no fluxo normal da página.

### Named Rules
**The Real-Media-Only Shadow Rule.** Sombra aparece só em cima de fotografia, vídeo ou mapa reais — nunca em cartão de texto, nunca em botão em repouso, nunca em bloco estrutural.

## Shapes

Botões, chips e o botão flutuante usam raio total (`rounded-full`, 9999px). Cartões de conteúdo e a maioria dos contêineres de mídia usam raio médio (`rounded-2xl`, 16px) ou pequeno (`rounded-xl`, 12px, miniaturas da galeria). Os dois retratos pessoais da Leya (Hero e Sobre) são a única exceção com raio maior e customizado (`rounded-[2rem]`, 32px) — uma moldura deliberadamente mais macia, reservada só a esses dois retratos, nunca aplicada a outra foto do site. Borda fina `ink/10` é o separador estrutural padrão do sistema, usada em vez de sombra ou divisor forte na maioria dos blocos.

## Components

### Buttons
- **Shape:** pílula total (`rounded-full`, 9999px).
- **Primary:** fundo Tinta Quente, texto papel cru/branco, `px-7 py-3.5` (Hero/CTA final) ou `px-5 py-2.5` (header) — hover troca o fundo para Terracota Acesa.
- **Ghost:** borda `border-ink/20`, fundo transparente, texto Tinta Quente — hover muda borda e texto para a família terracota/cobre. Usado como CTA secundário ao lado do botão primário (ex. "Ver no Instagram" no Hero).
- **Foco de teclado:** anel de 2px em Cobre Vivido com `outline-offset: 2px`, nunca removido (`:focus-visible` global).

### Chips (Especialidades)
- **Style:** pílula (`rounded-full`), fundo Cobre Vivido a 10% de opacidade, borda Cobre Vivido a 30%, texto Terracota Acesa, `text-sm font-medium`.
- **State:** estático, sem interação — é uma lista de especialidades, não um filtro.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (depoimentos, lista de serviços, player de vídeo, mapa) ou `rounded-xl` (miniaturas de galeria, canais de contato).
- **Background:** papel cru (`bg-cream`) para cartões sobre fundo `linho`; transparente com borda para canais de contato.
- **Shadow Strategy:** ver Elevation & Depth — só mídia real recebe sombra; cartões de texto ficam chapados.
- **Border:** `border-ink/10` em praticamente todo cartão — o separador estrutural padrão.
- **Internal Padding:** `p-5` a `p-6` conforme o cartão; lista de serviços usa `py-5 px-5`/`px-8` por item, com divisor `divide-ink/10` em vez de cartões separados.

### Navigation
- Header fixo (`sticky top-0`), fundo papel cru a 90% com `backdrop-blur`, borda inferior `ink/10`. Links em Work Sans, hover muda a cor para Terracota Acesa (sem sublinhado animado). Menu mobile é um painel que desliza abaixo do header (`x-transition`, translateY + opacity), com os mesmos links empilhados e o CTA de WhatsApp em destaque no fim.

### Botão Flutuante de WhatsApp (componente de assinatura)
Botão circular fixo (`h-14 w-14`, canto inferior direito, respeitando `env(safe-area-inset-*)`), cor de marca do WhatsApp (`#25D366`) — a única vez que uma cor fora da paleta da Leya aparece no site, porque é a cor reconhecível do próprio canal, não uma cor de marca. Sombra `shadow-ink/20`, leve `scale` no hover, desativado sob `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** manter Terracota Acesa como a única cor de link/hover/preço — nenhuma outra cor assume essa função.
- **Do** reservar sombra só para fotografia, vídeo e mapa reais (Ambient Media) e para o botão flutuante — nunca para cartão de texto ou bloco estrutural.
- **Do** manter o raio maior (`rounded-[2rem]`) exclusivo dos dois retratos pessoais da Leya — não estender a outras fotos.
- **Do** manter WhatsApp como o único CTA primário recorrente; Solo Booking sempre como alternativa secundária, nunca como botão de igual peso visual.

### Don't:
- **Don't** introduzir uma terceira família tipográfica além de Fraunces e Work Sans.
- **Don't** usar sombra com deslocamento duro ("hard offset") — toda sombra do sistema é difusa e ambiente.
- **Don't** preencher um bloco grande com Cobre Vivido — é acento raro (chip, foco), nunca superfície.
- **Don't** aplicar a cor de marca do WhatsApp (`#25D366`) a nenhum outro elemento além do próprio botão flutuante — ela não faz parte da paleta da marca.
