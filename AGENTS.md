# AGENTS.md

> AIエージェント共通指示の**真実の源（single source of truth）**。
> Claude Code・Codex・その他のエージェントがすべてここを参照する。
> Claude Code は `CLAUDE.md` の `@AGENTS.md` 経由でこれを読み込む。

## プロジェクト概要
- 名前: {{PROJECT_NAME}}
- 概要: {{ONE_LINE_DESCRIPTION}}
- 技術スタック: TypeScript / pnpm / (Turborepo) / Vitest / Playwright / Biome

## 開発の鉄則
1. **main へ直接 push しない**。必ずブランチ → PR。マージ可否は CI が決める。
2. **書いたら自分で検証する**。実装したら必ず単体(Vitest)・必要ならE2E(Playwright MCP)で動作を確認する。
3. **既存コードの作法に合わせる**。命名・コメント量・構造を周囲に揃える。
4. **秘密情報をコードに書かない**。トークン/キーは env / シークレット管理から読む。
5. **デッドコードを残さない**。`pnpm knip` がグリーンであること。

## 必ず通すコマンド（PR前のローカルチェック）
```bash
pnpm biome check --write .   # lint + format
pnpm typecheck               # tsc --noEmit
pnpm test                    # Vitest
pnpm knip                    # デッドコード検出
# UIを変えた場合:
pnpm test:e2e                # Playwright
```
これらは CI でも必須チェックとして走る。ローカルで通してから PR する。

## ディレクトリ規約
- `src/` 実装 / `tests/` または co-located `*.test.ts` / `e2e/` Playwright
- 共有設定は repo ルート（biome.json, tsconfig.json 等）

## コミット / PR
- Conventional Commits（`feat:`, `fix:`, `chore:` ...）
- ユーザー影響のある変更は `.changeset/` に changeset を追加
- PR本文に「何を・なぜ・どう検証したか」を書く

## やってはいけないこと
- 必須チェックの無効化・skip（`--no-verify`, `it.skip` の放置）
- 依存の無断追加（必要なら理由をPRに明記、Renovateが更新を管理）
- 本番デプロイ・課金変更・データ削除など不可逆操作の独断実行（人間承認を待つ）

## MCP の使いどころ
- **context7**: ライブラリのAPIを使う前に最新docsを引く（ハルシネーション防止）
- **playwright**: UI変更後にブラウザで実際に操作して検証する
- **sentry**: 本番エラーを調べる／修正する
- **linear**: 着手する課題・完了報告
- **github**: PR/CI状態の確認
