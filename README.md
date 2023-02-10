1. npm install
2. npx nx run new-package-e2e:e2e
3. Tests fail(expected since there are no screenshots to compare) but no screenshots are generated, despite the default value of updateSnapshots https://playwright.dev/docs/api/class-testconfig#test-config-update-snapshots