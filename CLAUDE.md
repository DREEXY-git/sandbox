@AGENTS.md

# Claude Code 固有の補足

上の `@AGENTS.md` が共通の真実の源。以下は Claude Code 固有の運用メモのみ。

## 作業の進め方
- 複数の独立した調査は subagent（`.claude/agents/`）に並列で投げる
- UIを伴う変更は Playwright MCP で実際に操作して確認してから完了とする
- 不可逆・外向きの操作（デプロイ/課金/削除）は実行前に必ず確認する

## 利用可能なサブエージェント
- `security-reviewer`: 差分のセキュリティレビュー
- `code-explorer`: コードベースの横断調査（read-only）

## 利用可能なスキル
- `/open-pr`: ローカルチェックを通してから PR を作成
- `/fix-ci`: 失敗中の CI ログを読んで修正する

## 権限
- `.claude/settings.json` の方針に従う（既定は acceptEdits、危険操作は確認）
