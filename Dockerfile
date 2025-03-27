# Base da imagem: Node.js versão 20 (leve)
FROM node:20-alpine

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto pro container
COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta do servidor (usa a mesma do Express)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
