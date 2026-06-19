# Carolina de Sousa Neves — Website

Site institucional de **Carolina de Sousa Neves**, neuropsicóloga especializada em
adições químicas e comportamentais. Página única (one-page), bilingue (PT/EN),
estética minimalista e acolhedora, focada na captação de pacientes para consultas online.

## Estrutura

```
index.html              → todo o conteúdo (PT por defeito no HTML)
assets/
  css/styles.css        → design system + 5 temas de cor comutáveis
  js/main.js            → idioma PT/EN, seletor de tema, FAQ, menu, animações
  img/                  → imagens placeholder (substituir pelas fotos reais)
reference/              → imagens de referência visual fornecidas
```

Sem dependências nem passo de build. É um site estático — basta abrir/servir os ficheiros.

## Ver localmente

```bash
# a partir da raiz do projeto
python3 -m http.server 8000
# depois abrir http://localhost:8000
```

(ou qualquer outro servidor estático / extensão "Live Server").

## Publicar (deploy)

Por ser estático, pode ser colocado gratuitamente em **Netlify**, **Vercel** ou
**GitHub Pages**: basta arrastar a pasta ou ligar o repositório. Não precisa de servidor.

## Personalização rápida

### Idioma e tema por defeito
- **Idioma:** por defeito deteta o idioma do browser (PT/EN) e respeita a última escolha.
  Pode forçar com `?lang=pt` ou `?lang=en` no URL.
- **Tema:** por defeito `salvia`. Para mudar o tema inicial, edite o atributo
  `data-theme="salvia"` na tag `<html>` do `index.html`. Pode pré-visualizar qualquer
  tema com `?theme=terracota` (ou `petroleo`, `areia`, `rosa`) no URL.
- Os 5 temas: **salvia** (sálvia), **terracota**, **petroleo**, **areia**, **rosa** (rosa-velho).
  Definidos no topo do `styles.css` — fáceis de afinar.

### Substituir as fotografias
As imagens em `assets/img/` são **placeholders** com um overlay de cor do tema.
Para usar as suas fotos, substitua os ficheiros mantendo o nome, ou edite os `src` no HTML:

- `ambient-wall.jpg` → imagem do hero (formato vertical 4:5 fica melhor).
- O **retrato** na secção "Sobre mim" é, neste momento, um cartão com as iniciais.
  Para colocar a sua foto, troque o bloco `.portrait__ph` por
  `<img src="assets/img/retrato.jpg" alt="Carolina de Sousa Neves">`.

### Contactos (já configurados)
- Telefone: **+351 930 485 323**
- Email: **carolinapsn06@hotmail.com**
- WhatsApp e Instagram ligados no separador de contacto.

Para alterar, procure por estes valores no `index.html` (links `tel:`, `mailto:`,
`wa.me/351930485323` e o URL do Instagram).

### Textos
Os textos PT estão no `index.html`; os textos EN (e as chaves correspondentes) estão
no dicionário `I18N` em `assets/js/main.js`. Ao editar uma frase em PT, atualize a
mesma chave em ambos para manter as duas línguas alinhadas.
