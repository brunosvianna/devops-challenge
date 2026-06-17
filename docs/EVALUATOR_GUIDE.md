# 🔍 Guia do Avaliador (uso interno)

> **Não compartilhe este arquivo com candidatos.** Remova-o do repositório público ou mantenha-o em uma branch/local separado antes de enviar o desafio.

Este guia ajuda a avaliar entregas de forma consistente entre os três níveis.

---

## Princípios gerais

- **Funciona do zero?** Siga o `SOLUTION.md` literalmente. Se você não consegue rodar, é um sinal forte.
- **Raciocínio > complexidade.** Uma solução simples e bem justificada vence uma complexa e mal explicada.
- **Segurança não é opcional.** Secrets commitados, container rodando como root ou imagem inchada são red flags em qualquer nível.

---

## 🟢 Júnior — o que procurar

**Aprovado se:**
- Dockerfile builda, roda e a app responde em `/healthz`.
- Container não roda como root.
- CI roda lint + test + build e falha corretamente quando algo quebra.

**Red flags:**
- `FROM node` sem tag, ou imagem gigante sem necessidade.
- Secrets ou `node_modules` na imagem.
- CI que "passa" mesmo com teste quebrado.

**Sinais de destaque:** multi-stage build, healthcheck, docker-compose, pinning por digest.

---

## 🟡 Pleno — o que procurar

**Aprovado se:**
- Tudo do Júnior, +
- Pipeline publica imagem **versionada** (não só `latest`) com credenciais como secrets.
- Manifests K8s com probes corretas, `resources` definidos, ≥2 réplicas, config via ConfigMap.
- Aplica no cluster local e a app responde.

**Red flags:**
- Probes ausentes ou apontando para rota errada.
- Sem `resources` (risco de noisy neighbor).
- Credenciais do registry hardcoded.
- Só usa `latest` (impossível rastrear/rollback).

**Sinais de destaque:** Helm/Kustomize, Ingress, HPA, overlays por ambiente.

---

## 🔴 Sênior — o que procurar

**Aprovado se:**
- Tudo do Pleno, +
- IaC idempotente e modular; state gerenciado com critério.
- Deploy sem downtime demonstrado + rollback documentado.
- Observabilidade real (logs estruturados coletáveis + métricas).
- Secrets fora do git; `securityContext` com menor privilégio.

**Red flags:**
- Terraform com recursos hardcoded ou que não é idempotente.
- "Sem downtime" afirmado mas não demonstrado.
- Observabilidade apenas mencionada, sem implementação.
- `securityContext` ausente; container privilegiado.

**Sinais de destaque:** GitOps (ArgoCD/Flux), Trivy no pipeline, NetworkPolicy, SOPS/sealed-secrets/Vault, dashboards versionados, PDB + anti-affinity.

---

## Escala de nota sugerida

| Nota | Significado |
|------|-------------|
| 1 | Não funciona / requisitos centrais ausentes |
| 2 | Funciona parcialmente, com red flags relevantes |
| 3 | Atende os obrigatórios de forma correta |
| 4 | Atende os obrigatórios + alguns diferenciais bem-feitos |
| 5 | Exemplar; contrataria com confiança |

Avalie também a entrevista de follow-up: peça para o candidato justificar 2–3 decisões e descrever o que mudaria em produção.
