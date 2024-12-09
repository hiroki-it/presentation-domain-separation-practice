# presentation-domain-separation-practice

[presentation-domain-separation](https://martinfowler.com/bliki/PresentationDomainSeparation.html) を練習するためのリポジトリ

## セットアップ

1. 各コンテナ間で共有するdockerネットワークを作成する。

```bash
$ docker network create shared-network
```

2. 各ディレクトリ配下のコンテナをセットアップする。個別のREADMEを参照。
