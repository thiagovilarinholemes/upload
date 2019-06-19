# Upload de arquivos com NodeJS e gravar informações no MongoDB


Nesta API é apresentado como fazer Uploads de arquivos com NodeJS e gravar informações no MongoDB.

A pasta '/src' contém o arquivo inicial o <strong>index.js</strong> e o arquivo de configuração das rotas o <strong>routes.js</strong>.

Na pasta '/src/config' no arquivo <strong>multer.js</strong> contém as configurações que o arquivo receberá ao ser importado. Configurações como: local onde será armazenado, nome que receberá, tamanho máximo permitido, extensões permitidas para upload.

A pasta '/src/models' contém o <i>schema</i>, arquivo <strong>Post.js</strong>, da coleção do database no MongoDB.

Pasta '/tmp/upload' é o diretório onde será armazenado o arquivo importado.

