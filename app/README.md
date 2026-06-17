# Aplicação de exemplo

API REST mínima em Node.js (sem dependências externas) usada como base do desafio. **Não é necessário alterar o código** — ele é apenas o objeto a ser containerizado, testado e implantado.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Mensagem e versão |
| GET | `/healthz` | Liveness probe → `{"status":"ok"}` |
| GET | `/readyz` | Readiness probe → `{"status":"ready"}` |
| GET | `/items` | Lista itens (em memória) |
| POST | `/items` | Cria item (body: `{"name":"..."}`) |

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `PORT` | `3000` | Porta de escuta |
| `APP_VERSION` | `1.0.0` | Versão exibida na raiz |
| `GREETING` | `Hello from the DevOps Challenge!` | Mensagem da raiz |

## Rodar localmente (sem Docker)

```bash
cd app
npm start      # inicia o servidor
npm test       # roda os testes
npm run lint   # verificação básica
```

> Requer Node.js 18+.
