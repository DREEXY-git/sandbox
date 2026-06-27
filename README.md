# {{PROJECT_NAME}}

> {{ONE_LINE_DESCRIPTION}}

会社標準 AI 開発基盤（ai-dev-platform）テンプレートから生成。

## セットアップ
```bash
pnpm install
pnpm dlx lefthook install
cp .env.example .env   # 値を埋める（または infisical run -- を使う）
```

## 開発
```bash
pnpm check        # biome + typecheck + test + knip（PR前に通す）
pnpm test:watch   # 単体テスト watch
pnpm test:e2e     # Playwright E2E
```

## AI エージェントで開発する
```bash
claude   # Claude Code（CLAUDE.md → AGENTS.md を読む）
codex    # Codex（AGENTS.md を読む）
```

## このテンプレートを使い始めたら
- `{{PROJECT_NAME}}` / `{{ONE_LINE_DESCRIPTION}}` を全ファイルで置換
- `.mcp.json` から使わないMCPサーバを削除
- 必要に応じて段階2のツール（Vercel/PostHog/Langfuse等）を追加

規約・運用は [AGENTS.md](AGENTS.md) を参照。
