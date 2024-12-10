# authentication

Keycloakで作成したIDプロバイダーの認証サービス。

ユーザー情報を一括で管理する。

## セットアップ

1. コンテナを起動する。

```bash
$ docker-compose up 
```

2. DBに接続する。


```bash
$ docker exec -it authentication-service-db /bin/bash

bash-5.1# mysql -u keycloak -ppassword keycloak

mysql> show tables
```
