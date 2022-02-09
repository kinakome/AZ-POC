# Docker の導入

[参考記事](https://zenn.dev/matsukaz/articles/31bc31ff1c54b4) 通りに進める

# SQL Server のインストール

### Intel の場合

- Dockcer イメージの取得  
  `docker pull mcr.microsoft.com/mssql/server:2019-latest`

- SQL Server の起動  
  `sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=password" \ -p 1433:1433 --name DEMO -h DEMO \ -d mcr.microsoft.com/mssql/server:2019-latest`

- コンテナに入る  
  `sudo docker exec -it DEMO "bash"`

- SQL Server に接続
  `/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "password"`

### M1 の場合

[参考サイト](https://database.guide/how-to-install-sql-server-on-an-m1-mac-arm64/)

- Dockcer イメージの取得  
  `docker pull mcr.microsoft.com/azure-sql-edge`

- SQL Server の起動  
  `sudo docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=password' -p 1433:1433 --name DEMO -d mcr.microsoft.com/azure-sql-edge`

- コンテナに入る  
  `sudo docker exec -it DEMO "bash"`

- SQL Server に接続
  `/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "password"`

# Azure FunctionsCore Tools の導入

### Intel の場合

`brew tap azure/functions`  
`brew install azure-functions-core-tools@3`

### M1 の場合
