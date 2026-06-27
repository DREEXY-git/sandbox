---
name: fix-ci
description: 失敗している CI のログを読んで原因を特定し、修正する。
---

# /fix-ci

現在の PR/ブランチの失敗 CI を自律的に直す。

## 手順
1. 失敗中の run を特定: `gh run list --branch $(git branch --show-current) --limit 5`
2. ログを取得: `gh run view <run-id> --log-failed`
3. 失敗の種類で対処を分岐:
   - lint/format → `pnpm biome check --write .`
   - 型エラー → 該当箇所を修正
   - テスト失敗 → 実装かテストのどちらが正しいか判断して修正（テストの安易なskip禁止）
   - knip → デッドコードを削除 or export を整理
4. ローカルで再度全チェックを通す
5. コミット＆push、`gh run watch` でグリーンを確認
