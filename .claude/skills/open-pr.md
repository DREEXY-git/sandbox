---
name: open-pr
description: ローカルの必須チェックを通してから PR を作成する。
---

# /open-pr

PR を作る前に、CI と同じチェックをローカルで通す。

## 手順
1. 変更をブランチにコミット（main ならまずブランチを切る）
2. 必須チェックを順に実行し、失敗したら直す:
   ```bash
   pnpm biome check --write .
   pnpm typecheck
   pnpm test
   pnpm knip
   ```
   UIを変えたなら `pnpm test:e2e` も。
3. ユーザー影響があるなら changeset を追加: `pnpm changeset`
4. push して PR 作成:
   ```bash
   git push -u origin HEAD
   gh pr create --fill
   ```
5. PR本文に「何を・なぜ・どう検証したか」を明記する。
6. `gh run watch` で CI を監視し、赤ければ `/fix-ci` で直す。
