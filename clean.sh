
#!/usr/bin/env bash

echo " - Node: " `node -v`
echo " - NPM: " `npm -v`

echo "Cleaning node modules" && \
rm -rf node_modules/ && \
rm -rf packages/components/node_modules

