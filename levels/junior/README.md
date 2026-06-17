# 🟢 Desafio Júnior — Containerização & Fundamentos de CI

Bem-vindo(a) ao desafio de nível **Júnior**! Aqui o foco é mostrar que você domina os fundamentos: empacotar uma aplicação em um container de forma correta e automatizar verificações básicas.

⏱️ **Tempo estimado:** 3–5 horas (sem limite rígido).

---

## 🎯 Objetivo

Pegar a aplicação que está em [`/app`](../../app) e:
1. Empacotá-la em uma imagem Docker bem construída.
2. Permitir rodá-la localmente com um comando simples.
3. Configurar um pipeline básico de CI que valide cada alteração.

---

## ✅ Requisitos obrigatórios

### 1. Dockerfile
Crie um `Dockerfile` que builde e rode a aplicação. Ele **precisa**:
- Usar uma imagem base oficial e enxuta (ex.: `node:18-alpine` ou `node:18-slim`).
- **Não rodar como root** — crie e use um usuário sem privilégios.
- Expor a porta correta da aplicação.
- Não conter secrets nem arquivos desnecessários (use um `.dockerignore`).

### 2. Como rodar localmente
Documente no seu `SOLUTION.md` como buildar e rodar:
```bash
docker build -t devops-challenge .
docker run -p 3000:3000 devops-challenge
```
Depois de rodar, `curl http://localhost:3000/healthz` deve retornar `{"status":"ok"}`.

### 3. Pipeline de CI
Configure um workflow (GitHub Actions, GitLab CI ou equivalente) que, a cada push ou pull request:
- Instale dependências.
- Rode o lint (`npm run lint`).
- Rode os testes (`npm test`).
- Builde a imagem Docker (não precisa fazer push).

O pipeline **deve falhar** se qualquer etapa falhar. Há um exemplo comentado em [`/.github/workflows/`](../../.github/workflows) que você pode usar como ponto de partida.

---

## 🌟 Diferenciais (opcionais, mas valorizados)

- Usar **multi-stage build** para reduzir o tamanho da imagem final.
- Adicionar um `HEALTHCHECK` no Dockerfile.
- Criar um `docker-compose.yml` para subir a aplicação com um comando.
- Fixar versões (pinning) da imagem base por digest.

---

## 📊 Rubrica de avaliação

| Critério | Peso |
|----------|------|
| Dockerfile correto e seguro (não-root, base enxuta, sem secrets) | 35% |
| CI funcional que falha quando deve falhar | 30% |
| Documentação clara (dá pra rodar do zero?) | 20% |
| Organização do repositório e commits | 15% |

---

## 📨 Entrega

1. Desenvolva em uma branch (ex.: `solucao-junior`).
2. Preencha o [`SOLUTION.md`](../../docs/SOLUTION_TEMPLATE.md).
3. Abra um Pull Request contra a `main`.

Boa sorte! Lembre-se: **simplicidade bem-feita vale mais que complexidade desnecessária.**
