rm -rf dist
ng build tixin --prod

#ng build core-tdm --prod
ng build core --prod
#ng build core-testing --prod

./node_modules/.bin/mkdirp dist/@tdm/data/plugin/active-record/lib
./node_modules/.bin/ncp libs/data/plugin/active-record/src/lib/\$rc.ts ./dist/@tdm/data/plugin/active-record/lib/\$rc.d.ts
ng build data --prod
#ng build data-plugin-active-record --prod && ./node_modules/.bin/ncp libs/data/plugin/active-record/src/lib/\$rc.ts ./dist/@tdm/data/plugin/active-record/lib/\$rc.d.ts
#ng build data-plugin-control-flow --prod
#ng build data-plugin-rx-resource-control --prod
#ng build data-testing --prod

ng build json-api-mapper --prod

ng build ngx-dynamic-forms --prod
#ng build ngx-dynamic-forms-plugin-material --prod

ng build ngx-http-client --prod

ng build local-forage --prod

# ng build service-mocker-shared --prod
ng build service-mocker --prod
# ng build service-mocker-client --prod

# service-worker.d.ts is copied to root.
# A user will import it but we can't because it exists in non dist, we only need in dest build.
# so we add it.
echo "import './service-worker';" | cat - dist/@tdm/service-mocker/shared/index.d.ts > temp && mv temp dist/@tdm/service-mocker/shared/index.d.ts

# npm publish ./dist/@tdm/tixin && npm publish ./dist/@tdm/core && npm publish ./dist/@tdm/data && npm publish ./dist/@tdm/json-api-mapper && npm publish ./dist/@tdm/ngx-dynamic-forms && npm publish ./dist/@tdm/ngx-http-client
