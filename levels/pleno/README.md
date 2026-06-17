# 🟡 Desafio Pleno — Pipeline CI/CD Completo & Kubernetes

Bem-vindo(a) ao desafio de nível **Pleno**! Aqui esperamos que você já domine a containerização e dê o próximo passo: um pipeline de entrega contínua de verdade e um deploy em Kubernetes feito com boas práticas.

⏱️ **Tempo estimado:** 6–10 horas (sem limite rígido).

> 💡 Este nível **inclui tudo do nível Júnior**. Comece pela containerização (veja o [enunciado Júnior](../junior/README.md)) e avance a partir daí.

---

## 🎯 Objetivo

Levar a aplicação de [`/app`](../../app) do código até rodando em um cluster Kubernetes, com um pipeline que automatiza build, testes, publicação da imagem e deploy.

---

## ✅ Requisitos obrigatórios

### 1. Containerização (base do Júnior)
- `Dockerfile` seguro, não-root, com **multi-stage build**.
- `.dockerignore` adequado.

### 2. Pipeline CI/CD
Configure um pipeline que, a cada push na `main` (ou tag):
- Rode lint e testes.
- Builde a imagem.
- **Faça push** da imagem para um registry (Docker Hub, GHCR, etc.). Use uma tag baseada no commit SHA ou em versionamento semântico — **evite usar apenas `latest`**.
- (Opcional, mas valorizado) Dispare o deploy automaticamente.

Trate credenciais do registry como **secrets do pipeline**, nunca commitadas.

### 3. Deploy em Kubernetes
Crie os manifests (ou um chart Helm/Kustomize) para implantar a aplicação. **Obrigatório incluir:**
- `Deployment` com **pelo menos 2 réplicas**.
- `Service` para expor a aplicação internamente.
- **`resources`** definidos (`requests` e `limits` de CPU e memória).
- **Liveness e readiness probes** apontando para `/healthz` e `/readyz`.
- Configuração injetada via `ConfigMap` (ex.: variáveis `GREETING`, `APP_VERSION`).

O cluster pode ser local — recomendamos **kind** ou **minikube** para não gerar custos. Documente qual usou.

### 4. Documentação
No `SOLUTION.md`, explique como subir o cluster, aplicar os manifests e validar que a aplicação responde.

---

## 🌟 Diferenciais (opcionais, mas valorizados)

- `Ingress` configurado para acesso externo.
- Uso de **Helm** ou **Kustomize** em vez de manifests soltos.
- `HorizontalPodAutoscaler`.
- Estratégia de deploy `RollingUpdate` com `maxSurge`/`maxUnavailable` explícitos.
- Separação de ambientes (dev/prod) via overlays.

---

## 📊 Rubrica de avaliação

| Critério | Peso |
|----------|------|
| Pipeline CI/CD completo com push de imagem versionada | 25% |
| Manifests K8s corretos (probes, resources, réplicas) | 30% |
| Containerização segura | 15% |
| Tratamento de configuração e secrets | 15% |
| Documentação e reprodutibilidade | 15% |

---

## 📨 Entrega

1. Desenvolva em uma branch (ex.: `solucao-pleno`).
2. Preencha o [`SOLUTION.md`](../../docs/SOLUTION_TEMPLATE.md), incluindo as decisões de arquitetura.
3. Abra um Pull Request contra a `main`.

Boa sorte! Queremos ver **decisões justificadas**, não só o que funciona.
