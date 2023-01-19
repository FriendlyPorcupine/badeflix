# für Mac
cd server
yarn docker:dev
yarn install
yarn prisma:migrate

cd ../client
yarn install

