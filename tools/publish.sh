ng build tixin --prod

#ng build core-tdm --prod
ng build core --prod
#ng build core-testing --prod

ng build data --prod && ./node_modules/.bin/ncp libs/data/plugin/active-record/src/lib/\$rc.ts ./dist/@tdm/data/plugin/active-record/lib/\$rc.d.ts
#ng build data-plugin-active-record --prod && ./node_modules/.bin/ncp libs/data/plugin/active-record/src/lib/\$rc.ts ./dist/@tdm/data/plugin/active-record/lib/\$rc.d.ts
#ng build data-plugin-control-flow --prod
#ng build data-plugin-rx-resource-control --prod
#ng build data-testing --prod

ng build json-api-mapper --prod

ng build ngx-dynamic-forms --prod
#ng build ngx-dynamic-forms-plugin-material --prod

ng build ngx-http-client --prod

ng build local-forage --prod

ng build service-mocker-shared --prod
ng build service-mocker --prod
ng build service-mocker-client --prod
