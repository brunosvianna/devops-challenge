# 🔴 Desafio Sênior — IaC, Observabilidade, Segurança & Deploy sem Downtime

Bem-vindo(a) ao desafio de nível **Sênior**! Neste nível não basta funcionar — esperamos uma solução que você defenderia em produção: infraestrutura versionada, observável, segura e resiliente.

⏱️ **Tempo estimado:** 10–16 horas (sem limite rígido).

> 💡 Este nível **engloba os anteriores**. A containerização (Júnior) e o pipeline + Kubernetes (Pleno) são pré-requisitos. O foco aqui é tudo que transforma um deploy em uma operação confiável.

---

## 🎯 Objetivo

Entregar a aplicação de [`/app`](../../app) como um sistema operável de ponta a ponta: infraestrutura provisionada por código, deploy automatizado sem downtime, observabilidade e uma postura de segurança sólida.

---

## ✅ Requisitos obrigatórios

### 1. Fundamentos (Júnior + Pleno)
- Dockerfile multi-stage seguro.
- Pipeline CI/CD com imagem versionada publicada em registry.
- Deploy em Kubernetes com probes, resources e configuração externalizada.

### 2. Infraestrutura como Código (IaC)
Provisione a infraestrutura com **Terraform** (ou ferramenta equivalente — justifique a escolha):
- O código deve ser **idempotente** — aplicar duas vezes não causa mudanças inesperadas.
- Use **módulos** e **variáveis**, sem valores hardcoded espalhados.
- Gerencie o **state** de forma adequada (explique sua estratégia; backend remoto é um diferencial).
- O alvo pode ser um cluster local (kind/minikube) provisionado via Terraform, ou nuvem (AWS/GCP/Azure) — se usar nuvem, mantenha tudo no free tier ou documente os custos.

### 3. Deploy sem downtime
- Configure uma estratégia de **rolling update** (ou blue-green / canary) com parâmetros explícitos.
- Demonstre (com logs, prints ou descrição) que uma atualização de versão acontece **sem perda de requisições**.
- Inclua uma estratégia de **rollback** documentada.

### 4. Observabilidade
Implemente pelo menos:
- **Logs estruturados** (a aplicação já emite JSON — garanta que sejam coletáveis).
- **Métricas** expostas (ex.: endpoint Prometheus, ou um sidecar/exporter).
- Documente como visualizar saúde e métricas do sistema.

### 5. Segurança
- Secrets gerenciados adequadamente (`Secret` do K8s no mínimo; **sealed-secrets**, **SOPS** ou **Vault** como diferencial).
- Princípio do menor privilégio nos manifests (`securityContext`, `readOnlyRootFilesystem`, capabilities dropadas).
- (Diferencial) Scan de vulnerabilidades da imagem no pipeline (ex.: Trivy).
- (Diferencial) `NetworkPolicy` restringindo tráfego.

---

## 🌟 Diferenciais (opcionais, mas que destacam candidatos)

- **GitOps** (ArgoCD ou Flux) para o deploy.
- Dashboards prontos (Grafana) versionados.
- Testes de carga ou de resiliência (chaos básico).
- `PodDisruptionBudget` e anti-affinity.
- Pipeline com gate de aprovação manual para produção.

---

## 📊 Rubrica de avaliação

| Critério | Peso |
|----------|------|
| IaC idempotente, modular e bem gerenciada | 25% |
| Deploy sem downtime + estratégia de rollback | 20% |
| Observabilidade (logs + métricas) | 20% |
| Segurança (secrets, menor privilégio, scans) | 20% |
| Documentação, arquitetura e justificativa de trade-offs | 15% |

---

## 📨 Entrega

1. Desenvolva em uma branch (ex.: `solucao-senior`).
2. Preencha o [`SOLUTION.md`](../../docs/SOLUTION_TEMPLATE.md) com **diagrama de arquitetura**, decisões e trade-offs.
3. Abra um Pull Request contra a `main`.

> 🧠 Neste nível, **o raciocínio importa tanto quanto a implementação**. Mostre que você entende os *porquês*, os limites da sua solução e o que faria diferente com mais tempo ou recursos.

Boa sorte!
