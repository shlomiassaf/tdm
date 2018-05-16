ng build tixin
ng build core-tdm
ng build core
ng build core-testing
ng build data
ng build data-plugin-active-record && ./node_modules/.bin/ncp libs/data/plugin/active-record/src/lib/\$rc.ts ./dist/@tdm/data/plugin/active-record/lib/\$rc.d.ts
ng build data-plugin-control-flow
ng build data-plugin-rx-resource-control
ng build data-testing
ng build json-api-mapper
ng build ngx-dynamic-forms
ng build ngx-dynamic-forms-plugin-material
ng build ngx-http-client
ng build local-forage
ng build service-mocker-shared
ng build service-mocker
ng build service-mocker-client
