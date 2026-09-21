---
target: src/pages/index.astro
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 5
target_identity: "file:/home/campos/Documentos/Projetos/Portfolio/src/pages/index.astro"
target_fingerprint: "sha256:a91ff4c7c68231e0b8862019ee5291172ccd34309ab3e5fe2121eee4ef1d42f4"
target_path: /home/campos/Documentos/Projetos/Portfolio/src/pages/index.astro
timestamp: 2026-09-21T23-31-29Z
slug: src-pages-index-astro
---
# Design Critique: src/pages/index.astro

Method: dual-agent (A: 312cae1b-1878-41a2-9d1c-ff1c14450e38 · B: 8d52c6cb-10c9-467f-8bb8-fa1457a2b6c0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 4 | Status badges com role="status" e ponto pulsante; alternância instantânea PT/EN com sincronia de title e atributos |
| 2 | Match System / Real World | 4 | Linguagem natural, precisa e focada em engenharia de software sem jargões vazios |
| 3 | User Control and Freedom | 3 | Skip-link funcional e alternâncias instantâneas; menu mobile sem atalho de fechar via Escape |
| 4 | Consistency and Standards | 3 | Descompasso de acentos entre temas (Sky Blue no claro vs Amber no escuro) e classes hexadecimais brutas |
| 5 | Error Prevention | 4 | Sem links quebrados ou botões fantasmas; notas explícitas para repositórios locais |
| 6 | Recognition Rather Than Recall | 3 | Tags de stack claras; navegação sticky sem scrollspy para destacar a seção ativa |
| 7 | Flexibility and Efficiency | n/a | Superfície de leitura/portfólio pessoal sem fluxos de edição em lote |
| 8 | Aesthetic and Minimalist Design | 3 | Tipografia equilibrada; repetição excessiva de cards e vazamento de Markdown cru no diário |
| 9 | Error Recovery | 3 | Mensagens defensivas e fallback claro de contato |
| 10 | Help and Documentation | n/a | Portfólio de página única autoexplicativo |
| **Total** | | **24/32** | **Good (75.0%)** |

## Design Specificity Verdict

- **LLM Assessment**: Conteúdo altamente autêntico e focado em engenharia real (ADS, João Pessoa, transição C -> Django/TypeScript, CineTrack sem falsa métrica). No entanto, a composição visual sofre de monotonia de cards ("card fatigue"), onde todas as seções usam exatamente a mesma geometria e o projeto principal (CineTrack) não tem destaque visual diferenciado.
- **Deterministic Scan**: O detector acusou 4 violações de `[side-tab]` com `dark:border-l-2` em callouts nos componentes `Contact.astro`, `ProjectCard.astro` e `Projects.astro`, além de alertas de `[nested-cards]` e contraste inferior a 4.5:1 no botão principal `bg-sky-600 text-white` (4.12:1).

## Priority Issues

- **[P1] Sintaxe Markdown vazando em artigos expandidos do Diário Técnico**: Textos com asteriscos `**` e crases triplas ` ```sql ` sendo exibidos crus em tela por causa de `whitespace-pre-line`.
- **[P1] Falta de elevação do Flagship (CineTrack) e monotonia de cards**: CineTrack tem o mesmo peso visual que rascunhos em planejamento e exercícios de C.
- **[P1] Contraste WCAG AA no botão primário (4.12:1 < 4.5:1)**: `bg-sky-600 text-white` falha no critério AA para texto de 14px.
- **[P1] Antipadrão de IA `[side-tab]` nos callouts do modo escuro**: Bordas `dark:border-l-2` assimétricas violam o craft floor.
- **[P1] Touch targets inferiores a 44x44px nos seletores de idioma e tema**: Dificulta toque preciso em dispositivos móveis.
- **[P2] Superlotação de ações no Hero**: 6 botões e links concorrendo na mesma linha.
- **[P2] Inversão de hierarquia semântica de cabeçalhos**: Eyebrows renderizados como `<h2>` e títulos reais como `<h3>`.
