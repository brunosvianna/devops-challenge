# 🚀 Desafio Técnico DevOps

Bem-vindo(a)! Este repositório contém um desafio técnico de **DevOps** com três níveis de dificuldade: **Júnior**, **Pleno** e **Sênior**.

O objetivo não é avaliar se você decorou comandos, e sim como você **pensa, organiza e justifica** suas decisões de engenharia. Não existe uma única resposta certa — queremos ver suas escolhas e o raciocínio por trás delas.

---

## 📋 Como funciona

1. **Faça um fork** deste repositório (ou crie um repositório novo e copie o conteúdo).
2. Escolha o nível que corresponde à vaga em que você está concorrendo (se tiver dúvida, pergunte ao recrutador).
3. Leia o enunciado do seu nível na pasta [`levels/`](./levels).
4. Desenvolva sua solução **em uma branch própria** e abra um Pull Request contra a `main` quando terminar.
5. Documente tudo no `SOLUTION.md` (veja o template em [`docs/SOLUTION_TEMPLATE.md`](./docs/SOLUTION_TEMPLATE.md)).

---

## 🎯 Os três níveis

| Nível | Foco principal | Tempo estimado |
|-------|----------------|----------------|
| [**Júnior**](./levels/junior/README.md) | Containerização e fundamentos de CI | 3–5 horas |
| [**Pleno**](./levels/pleno/README.md) | Pipeline CI/CD completo + Kubernetes | 6–10 horas |
| [**Sênior**](./levels/senior/README.md) | IaC, observabilidade, segurança e deploy sem downtime | 10–16 horas |

> ⏱️ Os tempos são **estimativas**, não limites rígidos. Preferimos qualidade a velocidade. Se faltar tempo, entregue o que tiver e descreva no `SOLUTION.md` o que faria a seguir.

---

## 📦 A aplicação

Na pasta [`app/`](./app) há uma API REST simples já pronta. **Você não precisa alterar a lógica da aplicação** — ela é apenas o objeto do desafio. Seu trabalho é tudo que está *ao redor* dela: como buildar, testar, empacotar, implantar e operar.

Caso prefira, você pode substituir por uma aplicação sua de complexidade equivalente — mas explique o motivo no `SOLUTION.md`.

---

## ✅ Como você será avaliado

Independente do nível, olhamos para:

- **Organização** — estrutura do repositório, nomes claros, commits que contam uma história.
- **Boas práticas** — segurança, idempotência, princípio do menor privilégio, ausência de secrets no código.
- **Documentação** — alguém consegue rodar seu projeto do zero apenas seguindo o README?
- **Raciocínio** — suas decisões estão justificadas? Você conhece os trade-offs do que escolheu?
- **Funcionamento** — funciona de ponta a ponta?

Cada nível tem uma rubrica detalhada no seu respectivo `README.md`.

---

## 🚫 O que NÃO fazer

- Não comite secrets, tokens, chaves de API ou `.env` com dados reais.
- Não copie soluções prontas sem entender — você será questionado sobre suas escolhas.
- Não se preocupe em "impressionar" com complexidade desnecessária. Simplicidade bem-feita vale mais.

---

## 📨 Entrega

Abra um Pull Request com:
- Sua solução completa.
- O arquivo `SOLUTION.md` preenchido.
- Um README atualizado (se você mudou a forma de rodar o projeto).

Boa sorte! 🍀
