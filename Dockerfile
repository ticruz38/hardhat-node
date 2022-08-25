FROM mhart/alpine-node:16

# install dependencies
WORKDIR /app
COPY . .
# RUN npm ci

EXPOSE 8545
CMD ["npx", "hardhat", "node"]